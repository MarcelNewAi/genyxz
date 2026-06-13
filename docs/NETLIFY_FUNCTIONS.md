# Netlify Functions

## Resend Form Email

`netlify/functions/send-form.js` handles both public forms through `POST /api/send-form`:

- `type: "contact"` sends contact messages.
- `type: "application"` sends ambassador applications.

The function validates and escapes submitted values, rejects honeypot submissions, rate-limits requests, and sends distinct HTML emails through Resend.

## Environment Variables

Copy `.env.example` to `.env` for local development and replace the placeholder API key:

```text
RESEND_API_KEY=re_replace_with_api_key
RESEND_FROM_EMAIL=forms@genyxz.si
RESEND_TO_EMAIL=info@genyxz.si
```

Before production deployment:

1. Verify `genyxz.si` in Resend.
2. Add all three variables in Netlify with Functions scope.
3. Keep `.env` private; it is ignored by Git.

## Verification

Run the site and functions together:

```bash
netlify dev
```

Submit both forms and confirm their distinct emails arrive at `info@genyxz.si` with the submitter set as Reply-To.
