# Sophi en WhatsApp 💚

Un agente que pone a **Sophi** (la asistente de **House & Flats**) a responder
WhatsApp **24/7**, de forma automática, usando el **mismo cerebro** que ya usa la
página web. Cuando alguien le escribe a tu número de WhatsApp Business, Sophi
lee el mensaje, piensa la respuesta con la inteligencia de House & Flats y la
**envía sola**.

> El mismo cerebro de Sophi alimenta la web **y** WhatsApp. **Ningún token ni
> contraseña vive en el código**: todo se guarda como "secreto" en Cloudflare.

---

## ¿Qué hace exactamente?

Es un **Cloudflare Worker** (un mini-servidor en la nube) que conecta la
**WhatsApp Cloud API de Meta** con la inteligencia de House & Flats:

- **Verificación del webhook (GET):** cuando configuras el webhook en Meta, Meta
  hace una llamada de prueba. El worker la responde con tu token de verificación.
- **Mensajes entrantes (POST):** cuando un cliente escribe, el worker:
  1. lee el texto y el número del remitente,
  2. genera la respuesta de Sophi con Cloudflare Workers AI (recomienda solo
     alojamientos reales de la base, avisa si algo supera el presupuesto,
     responde sobre barrios, ofrece conectar con el equipo…),
  3. la envía de vuelta por la WhatsApp Cloud API.
- Responde a Meta **al instante (200)** para que no reintente, y hace el trabajo
  de IA en segundo plano. Si algo falla, manda igualmente un mensaje amable:
  _"En un momento te responde nuestro equipo 💚"_.

---

## Paso 1 · Lado de Meta (WhatsApp)

1. Entra en **developers.facebook.com** y crea una app de tipo **Business**.
2. Añade el producto **WhatsApp**.
3. En **WhatsApp → API Setup** vas a obtener / configurar:
   - Un **número de teléfono de WhatsApp Business**.
   - El **Phone Number ID** (un número largo, NO es el teléfono visible). →
     será tu `WHATSAPP_PHONE_ID`.
   - Un **token de acceso permanente** (genera un *System User* con permisos
     `whatsapp_business_messaging` para que no caduque). → será tu
     `WHATSAPP_TOKEN`.
4. **Webhook:** en **WhatsApp → Configuration → Webhook**:
   - **Callback URL:** la URL de tu worker ya desplegado
     (ej. `https://sophi-whatsapp.TU-SUBDOMINIO.workers.dev/`).
   - **Verify token:** inventa una contraseña (cualquier texto) y anótala. →
     será tu `WHATSAPP_VERIFY_TOKEN` (debe ser **idéntica** en Meta y en el
     worker).
   - Pulsa **Verify and save**. Debe quedar en verde ✅.
   - En **Webhook fields**, **suscríbete al campo `messages`**.

---

## Paso 2 · Lado de Cloudflare (desplegar)

Necesitas Node.js instalado. Desde una terminal:

```bash
cd whatsapp-agent

# 1) Desplegar el worker (la primera vez te pedirá iniciar sesión en Cloudflare)
npx wrangler deploy

# 2) Guardar los secretos (NO van en el código). Te pedirá pegar cada valor:
npx wrangler secret put WHATSAPP_TOKEN          # token permanente de Meta
npx wrangler secret put WHATSAPP_PHONE_ID       # el Phone Number ID
npx wrangler secret put WHATSAPP_VERIFY_TOKEN   # la misma contraseña del webhook
```

Tras `npx wrangler deploy`, copia la **URL** que te muestra (algo como
`https://sophi-whatsapp.TU-SUBDOMINIO.workers.dev`) y úsala como **Callback URL**
en el webhook de Meta (Paso 1.4). Si cambias secretos, no hace falta volver a
desplegar.

> La **IA** ya está conectada por el binding `AI` del archivo `wrangler.toml`
> (Cloudflare Workers AI) — no necesitas API keys de IA.

---

## Probar

1. Verifica que el webhook quedó en verde en Meta y que `messages` está suscrito.
2. Escríbele a tu número de WhatsApp Business desde otro teléfono
   (ej. _"Hola, busco un studio en Madrid por 600€"_).
3. Sophi debería responder en segundos. Para ver registros:
   `npx wrangler tail`.

---

## Variables y secretos

| Nombre                  | Tipo            | Dónde se configura                | Para qué |
|-------------------------|-----------------|-----------------------------------|----------|
| `WHATSAPP_TOKEN`        | **Secreto**     | `wrangler secret put` / dashboard | Token permanente de Meta para enviar mensajes |
| `WHATSAPP_PHONE_ID`     | **Secreto**     | `wrangler secret put` / dashboard | Phone Number ID de WhatsApp |
| `WHATSAPP_VERIFY_TOKEN` | **Secreto**     | `wrangler secret put` / dashboard | Contraseña del webhook (igual que en Meta) |
| `EMILIA_MODELO`         | Variable (var)  | `wrangler.toml` → `[vars]`        | Modelo de texto (tiene valor por defecto) |
| `AI`                    | Binding         | `wrangler.toml` → `[ai]`          | Cloudflare Workers AI |

**Ningún secreto está escrito en el código** — el worker los lee siempre desde
`env`.

---

## Archivos

```
whatsapp-agent/
├── src/index.js     # el worker (cerebro de Sophi + webhook + envío por WhatsApp)
├── wrangler.toml    # configuración de Cloudflare (nombre, binding AI, vars)
└── README.md        # esta guía
```
