import assert from 'node:assert/strict'
import process from 'node:process'
import test from 'node:test'
import handler, { buildApplicationEmail, validate } from './send-form.js'

const application = {
  birthYear: '2002',
  email: 'applicant@example.com',
  graduateStatus: 'no',
  motivation: 'Učenje in delo z ljudmi',
  name: 'Test Candidate',
  path: 'community',
  phone: '040 123 456',
  reason: 'Zanima me zdravje',
  residence: 'Ljubljana',
  roleAcknowledged: true,
  studyProgram: 'Biologija',
  studyYear: '2',
  type: 'application',
  workRegion: 'Osrednjeslovenska',
}

test('accepts complete student and non-student applications', () => {
  assert.equal(validate(application), null)
  assert.equal(validate({ ...application, studyProgram: 'Ni relevantno', studyYear: 'Ni relevantno' }), null)
})

test('rejects missing new fields and acknowledgment', () => {
  for (const field of ['birthYear', 'studyProgram', 'studyYear', 'graduateStatus', 'residence', 'workRegion']) {
    assert.notEqual(validate({ ...application, [field]: '' }), null, field)
  }
  assert.match(validate({ ...application, roleAcknowledged: false }), /potrdi/)
  assert.match(validate({ ...application, birthYear: '3000' }), /letnico/)
  assert.match(validate({ ...application, graduateStatus: 'maybe' }), /absolvent/)
})

test('keeps contact submissions valid without application fields', () => {
  assert.equal(validate({ type: 'contact', name: 'Test', email: 'test@example.com', message: 'Pozdravljeni' }), null)
})

test('returns a client error for malformed JSON without contacting Resend', async () => {
  const response = await handler(new Request('http://localhost/api/send-form', {
    method: 'POST',
    body: '{',
  }))
  assert.equal(response.status, 400)
})

test('includes each new field in the internal application email and escapes values', () => {
  const { html } = buildApplicationEmail({ ...application, residence: '<Ljubljana>' })
  for (const value of ['2002', 'Biologija', 'Osrednjeslovenska', 'Potrditev seznanitve z vlogo', '&lt;Ljubljana&gt;']) {
    assert.ok(html.includes(value), value)
  }
  assert.ok(!html.includes('<Ljubljana>'))
})

test('routes application and contact notifications to separate inboxes', async () => {
  const oldFetch = globalThis.fetch
  const oldEnv = Object.fromEntries(
    ['RESEND_API_KEY', 'RESEND_FROM_EMAIL', 'RESEND_TO_EMAIL', 'RESEND_APPLICATION_TO_EMAIL']
      .map((key) => [key, process.env[key]]),
  )
  const batches = []

  try {
    process.env.RESEND_API_KEY = 're_test_key'
    process.env.RESEND_FROM_EMAIL = 'forms@genyxz.si'
    process.env.RESEND_TO_EMAIL = 'info@genyxz.si'
    process.env.RESEND_APPLICATION_TO_EMAIL = 'ambasador@genyxz.si'
    globalThis.fetch = async (_url, options) => {
      batches.push(JSON.parse(options.body))
      return Response.json({ data: [{ id: 'internal' }, { id: 'confirmation' }] })
    }

    const applicationResponse = await handler(new Request('http://localhost/api/send-form', {
      method: 'POST',
      body: JSON.stringify(application),
    }))
    const contactResponse = await handler(new Request('http://localhost/api/send-form', {
      method: 'POST',
      body: JSON.stringify({ type: 'contact', name: 'Test', email: 'test@example.com', message: 'Pozdravljeni' }),
    }))

    assert.equal(applicationResponse.status, 200)
    assert.equal(contactResponse.status, 200)
    assert.deepEqual(batches[0][0].to, ['ambasador@genyxz.si'])
    assert.deepEqual(batches[1][0].to, ['info@genyxz.si'])
  } finally {
    globalThis.fetch = oldFetch
    for (const [key, value] of Object.entries(oldEnv)) {
      if (value === undefined) delete process.env[key]
      else process.env[key] = value
    }
  }
})
