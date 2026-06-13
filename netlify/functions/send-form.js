import { Resend } from 'resend'

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const MAX_LENGTHS = {
  email: 254,
  message: 5000,
  motivation: 5000,
  name: 120,
  phone: 60,
  reason: 5000,
}

const json = (body, status = 200) =>
  new Response(JSON.stringify(body), {
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
    status,
  })

const escapeHtml = (value) =>
  value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;')

const formatText = (value) => escapeHtml(value).replaceAll('\n', '<br />')

const getEnv = (name) => globalThis.Netlify?.env.get(name) || globalThis.process?.env[name]

function normalizePayload(payload) {
  return Object.fromEntries(
    Object.entries(payload).map(([key, value]) => [key, typeof value === 'string' ? value.trim() : value]),
  )
}

function validate(payload) {
  if (!payload || typeof payload !== 'object' || !['application', 'contact'].includes(payload.type)) {
    return 'Neveljavna vrsta obrazca.'
  }

  if (payload.website) {
    return null
  }

  const required =
    payload.type === 'contact'
      ? ['name', 'email', 'message']
      : ['name', 'email', 'phone', 'path', 'reason', 'motivation']

  if (required.some((field) => typeof payload[field] !== 'string' || !payload[field])) {
    return 'Izpolni vsa zahtevana polja.'
  }

  if (!EMAIL_PATTERN.test(payload.email) || payload.email.length > MAX_LENGTHS.email) {
    return 'Vnesi veljaven email naslov.'
  }

  for (const [field, maxLength] of Object.entries(MAX_LENGTHS)) {
    if (typeof payload[field] === 'string' && payload[field].length > maxLength) {
      return 'Eno ali več polj je predolgih.'
    }
  }

  if (payload.type === 'application' && !['community', 'lifestyle'].includes(payload.path)) {
    return 'Izberi veljavno pot ambasadorja.'
  }

  return null
}

function emailFrame({ accent, content, eyebrow, title }) {
  return `<!doctype html>
  <html lang="sl">
    <body style="margin:0;background:#f4f7fa;font-family:Arial,sans-serif;color:#111111;">
      <div style="max-width:680px;margin:0 auto;padding:32px 16px;">
        <div style="overflow:hidden;border:1px solid #e2e8ef;border-radius:20px;background:#ffffff;">
          <div style="height:6px;background:${accent};"></div>
          <div style="padding:28px;">
            <p style="margin:0 0 8px;color:#667085;font-size:12px;font-weight:700;letter-spacing:0.12em;text-transform:uppercase;">${eyebrow}</p>
            <h1 style="margin:0 0 24px;font-size:28px;line-height:1.2;">${title}</h1>
            ${content}
          </div>
        </div>
      </div>
    </body>
  </html>`
}

const row = (label, value) => `
  <div style="margin-top:18px;">
    <p style="margin:0 0 5px;color:#667085;font-size:12px;font-weight:700;text-transform:uppercase;">${label}</p>
    <div style="font-size:16px;line-height:1.6;">${formatText(value)}</div>
  </div>`

const paragraph = (value) => `<p style="margin:0 0 16px;font-size:16px;line-height:1.7;">${formatText(value)}</p>`

function buildContactEmail(payload) {
  return {
    html: emailFrame({
      accent: 'linear-gradient(90deg,#111111,#2baeba)',
      content: row('Ime', payload.name) + row('Email', payload.email) + row('Sporočilo', payload.message),
      eyebrow: 'Novo sporočilo s spletne strani',
      title: 'Kontakt GenYXZ',
    }),
    subject: `[GenYXZ kontakt] ${payload.name}`,
  }
}

function buildApplicationEmail(payload) {
  const path = payload.path === 'community' ? 'Community Ambassador' : 'Lifestyle Ambassador'

  return {
    html: emailFrame({
      accent: 'linear-gradient(90deg,#7e2392,#88ea4e)',
      content:
        row('Ime in priimek', payload.name) +
        row('Email', payload.email) +
        row('Telefon', payload.phone) +
        row('Izbrana pot', path) +
        row('Zakaj ga to zanima', payload.reason) +
        row('Kaj ga trenutno najbolj motivira', payload.motivation),
      eyebrow: 'Nova prijava za ambasadorja',
      title: path,
    }),
    subject: `[GenYXZ prijava] ${payload.name} - ${path}`,
  }
}

function buildConfirmationEmail(payload) {
  const isContact = payload.type === 'contact'

  return {
    html: emailFrame({
      accent: isContact
        ? 'linear-gradient(90deg,#111111,#2baeba)'
        : 'linear-gradient(90deg,#7e2392,#88ea4e)',
      content:
        paragraph(`Živjo, ${payload.name}.`) +
        paragraph(
          isContact
            ? 'Zahvaljujemo se vam za vaše sporočilo. Uspešno smo ga prejeli in odgovorili vam bomo v najkrajšem možnem času.'
            : 'Zahvaljujemo se vam za vašo prijavo za GenYXZ ambasadorja. Vašo prijavo bomo pregledali in stopili v stik z vami v najkrajšem možnem času.',
        ) +
        paragraph('Lep pozdrav,\nekipa GenYXZ'),
      eyebrow: isContact ? 'Potrdilo o prejetem sporočilu' : 'Potrdilo o prejeti prijavi',
      title: isContact ? 'Prejeli smo vaše sporočilo.' : 'Prejeli smo vašo prijavo.',
    }),
    subject: isContact ? 'Prejeli smo vaše sporočilo | GenYXZ' : 'Prejeli smo vašo prijavo | GenYXZ',
  }
}

export default async function handler(request) {
  if (request.method !== 'POST') {
    return json({ message: 'Method not allowed.', ok: false }, 405)
  }

  let payload

  try {
    payload = normalizePayload(await request.json())
  } catch {
    return json({ message: 'Neveljavni podatki obrazca.', ok: false }, 400)
  }

  const validationError = validate(payload)

  if (validationError) {
    return json({ message: validationError, ok: false }, 400)
  }

  if (payload.website) {
    return json({ ok: true })
  }

  const apiKey = getEnv('RESEND_API_KEY')
  const fromEmail = getEnv('RESEND_FROM_EMAIL')
  const toEmail = getEnv('RESEND_TO_EMAIL')

  if (!apiKey || !fromEmail || !toEmail || apiKey === 're_replace_with_api_key') {
    console.error('Resend environment variables are not configured.')
    return json({ message: 'Pošiljanje ni uspelo. Poskusite znova.', ok: false }, 500)
  }

  try {
    const internalEmail = payload.type === 'contact' ? buildContactEmail(payload) : buildApplicationEmail(payload)
    const confirmationEmail = buildConfirmationEmail(payload)
    const resend = new Resend(apiKey)
    const from = `GenYXZ <${fromEmail}>`
    const { error } = await resend.batch.send([
      {
        from,
        html: internalEmail.html,
        replyTo: payload.email,
        subject: internalEmail.subject,
        to: [toEmail],
      },
      {
        from,
        html: confirmationEmail.html,
        replyTo: toEmail,
        subject: confirmationEmail.subject,
        to: [payload.email],
      },
    ])

    if (error) {
      console.error('Resend failed to send form email batch:', error)
      return json({ message: 'Pošiljanje ni uspelo. Poskusite znova.', ok: false }, 500)
    }
  } catch (error) {
    console.error('Resend request failed:', error)
    return json({ message: 'Pošiljanje ni uspelo. Poskusite znova.', ok: false }, 500)
  }

  return json({ ok: true })
}

export const config = {
  rateLimit: {
    aggregateBy: ['ip', 'domain'],
    windowLimit: 5,
    windowSize: 60,
  },
}
