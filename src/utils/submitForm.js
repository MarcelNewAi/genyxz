const fallbackMessage = 'Pošiljanje ni uspelo. Poskusi znova.'

export async function submitForm(payload) {
  const response = await fetch('/api/send-form', {
    body: JSON.stringify(payload),
    headers: { 'Content-Type': 'application/json' },
    method: 'POST',
  })

  const result = await response.json().catch(() => null)

  if (!response.ok || !result?.ok) {
    throw new Error(result?.message || fallbackMessage)
  }

  return result
}
