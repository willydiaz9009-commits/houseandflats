# Emilia / Sophi — House & Flats (Cloudflare Worker)

The "Emilia" AI assistant ("Sophi") for **House & Flats** (verified temporary
accommodation for students & digital nomads), running **100% on Cloudflare
Workers AI**. It does **text chat** and **image recognition (vision)**, knows
the brand from the inlined House & Flats *cerebro*, and exposes the same API
contract as the other Emilia workers so the website calls it unchanged.

No API keys or secrets are required — it uses only the `env.AI` Workers AI
binding (no Anthropic/OpenAI/external calls).

## Models

- **Text:** `@cf/meta/llama-3.1-8b-instruct` (default). Override per-deployment
  with the `EMILIA_MODELO` var in `wrangler.toml`.
- **Vision:** `@cf/meta/llama-3.2-11b-vision-instruct` — chosen as the most
  reliable/current multimodal model on Workers AI (instruction-following Llama
  3.2 Vision). To switch to the lighter LLaVA model, change `VISION_MODEL` in
  `src/index.js` to `@cf/llava-hf/llava-1.5-7b-hf`. Note: LLaVA's input schema
  also accepts `image` as an array of byte values, so the existing
  `image: [...bytes]` call works for either model.

## API contract

- `OPTIONS *` → `204` with CORS headers.
- `POST /asistente` (also `POST /` and `POST /api/asistente`)
  - Body: `{ pregunta: string, historial?: array, cliente?: {nombre,telefono}, imagen?: { data: base64String, media_type?: string } }`
  - If `imagen.data` is present → vision model (image described + similar real
    listings suggested). The base64 is decoded to a `Uint8Array` (a leading
    `data:...;base64,` prefix is stripped automatically).
  - Else → text model with `messages = [system, ...historial, {user: pregunta}]`.
  - Response: `200 { ok: true, respuesta: <text> }`.
  - On any error: still `200 { ok: true, respuesta: "<es+en fallback>", fallback: true, error }` — never a 500 to the browser.
- CORS: `Access-Control-Allow-Origin: *`, `Access-Control-Allow-Methods: GET, POST, OPTIONS`, `Access-Control-Allow-Headers: Content-Type`.

## Deploy (3 lines)

```bash
cd emilia-worker
npx wrangler login        # or: npm i -g wrangler && wrangler login
npx wrangler deploy       # or: wrangler deploy
```

Workers AI must be enabled on the Cloudflare account — it already is, since the
other Emilia workers use `env.AI`. The `[ai]` binding in `wrangler.toml`
exposes it as `env.AI`.

After deploy, the public URL is:

```
https://emilia-houseandflats.<account-subdomain>.workers.dev
```

The chat endpoint is `<url>/asistente`.

## Test

Text:

```bash
curl -X POST https://emilia-houseandflats.<account-subdomain>.workers.dev/asistente \
  -H "Content-Type: application/json" \
  -d '{"pregunta":"hola"}'
```

Expected: `{"ok":true,"respuesta":"..."}`.

Zone question example:

```bash
curl -X POST .../asistente -H "Content-Type: application/json" \
  -d '{"pregunta":"¿Qué barrios recomiendas en Madrid con presupuesto 600 EUR?"}'
```

Image (vision) — send base64 in `imagen.data`:

```bash
curl -X POST .../asistente -H "Content-Type: application/json" \
  -d "{\"pregunta\":\"¿Tienen algo parecido?\",\"imagen\":{\"data\":\"$(base64 -i foto.jpg)\",\"media_type\":\"image/jpeg\"}}"
```

## Notes

- The cerebro knowledge (brand, benefits, howItWorks, verification, payment,
  cancellation, countries, zones, listings, faqs, tone) is inlined into
  `src/index.js` as a plain JS object — no `require` of the repo-root CommonJS
  file, and **no secrets**.
- Sophi recommends only the real demonstrative listings, warns when over budget,
  answers zone questions, compares apartments, and for images describes the
  apartment and suggests similar real listings. It never reveals internal
  CRM/leads/admin data.
