# sicologoenlinea — Sitio Web Profesional

Sitio web de **sicologoenlinea**, equipo de psicólogos especializados en atención online en Colombia. Todas las CTAs derivan a WhatsApp — no hay checkout ni pasarela de pagos.

## 🚀 Stack Tecnológico

- **Framework:** Astro 6 (static output)
- **Lenguaje:** TypeScript (strict)
- **Estilos:** Tailwind CSS 4.3 + glassmorphism
- **Content:** Astro Content Collections (glob loader)
- **Hosting:** Cloudflare Pages (static, sin SSR/Workers)

## 📁 Estructura del Proyecto

```
sicologoenlinea/
├── public/
│   ├── _headers              # Cloudflare security headers
│   ├── _redirects            # Cloudflare redirect rules
│   ├── robots.txt
│   ├── favicon.svg
│   └── *.jpg                 # Imágenes de ebooks
├── src/
│   ├── components/
│   │   ├── ui/               # Button, Card, Container, Section
│   │   ├── BlogCard.astro
│   │   ├── BlogSidebar.astro
│   │   ├── EbookCard.astro
│   │   ├── Header.astro
│   │   ├── Footer.astro
│   │   ├── WhatsAppButton.astro  # CTA flotante + inline
│   │   ├── PlaceholderImage.astro
│   │   ├── ServiceCard.astro
│   │   └── SEO.astro
│   ├── content/
│   │   ├── services/         # 3 servicios
│   │   ├── ebooks/           # 5 ebooks
│   │   └── blog/             # 3 posts
│   ├── content.config.ts     # Schemas de collections
│   ├── layouts/
│   │   └── BaseLayout.astro  # HTML base + SEO
│   ├── pages/
│   │   ├── blog/
│   │   │   ├── index.astro
│   │   │   └── [slug].astro
│   │   ├── index.astro
│   │   ├── servicios.astro
│   │   ├── sobre-nosotros.astro
│   │   ├── politica-privacidad.astro
│   │   └── terminos-condiciones.astro
│   ├── styles/
│   │   └── global.css        # Tailwind + custom utilities
│   └── utils/
│       ├── format.ts         # Formateo de precios (sin uso actual)
│       ├── whatsapp.ts       # Templates de mensajes WhatsApp
│       └── placeholder.ts   # Helpers para placeholder images
├── astro.config.mjs
├── tsconfig.json
└── package.json
```

## 🛠️ Comandos

| Comando           | Acción                              |
|-------------------|-------------------------------------|
| `npm run dev`     | Servidor local en `localhost:4321`  |
| `npm run build`   | Build estático → `dist/`            |
| `npm run preview` | Preview local del build             |

## 🎨 Sistema de Diseño

### Paleta

| Token      | Color     | Uso                     |
|------------|-----------|-------------------------|
| Primary    | `#16c5b4` | Turquesa principal      |
| Secondary  | `#3bf5cd` | Menta                   |
| Accent     | `#eefffb` | Fondo claro             |
| Text       | `#000000` | Texto base              |

### Tipografía

- **Headings:** Poppins (bold 700)
- **Body:** Inter (regular 400)

### Efectos

- **Glassmorphism:** `.glass`, `.glass-card`, `.glass-primary`, `.glass-header`
- **Transitions:** `.transition-smooth`

## 📝 Content Collections

### Servicio (`src/content/services/*.md`)

```yaml
---
title: Terapia Individual Online
modalidad: individual | parejas | familiar | grupal
duracion: 60
precioCop: 120000
descripcion: Descripción breve
beneficios:
  - Beneficio 1
  - Beneficio 2
orden: 1
activo: true
---
Contenido en Markdown…
```

### Ebook (`src/content/ebooks/*.md`)

```yaml
---
title: Título del Ebook
precioCop: 45000
descripcion: Descripción breve
paginas: 85
temas:
  - Tema 1
destacado: true
orden: 1
imagenUrl: /imagen.jpg    # opcional
---
Contenido en Markdown…
```

### Blog Post (`src/content/blog/*.md`)

```yaml
---
title: Título del Post
descripcionCorta: Descripción SEO (max 160 chars)
autor: Equipo sicologoenlinea
fecha: 2025-11-27
destacado: true
imagenUrl: /imagen.jpg    # opcional
metaKeywords:             # opcional
  - keyword1
  - keyword2
---
Contenido en Markdown…
```

## 🌍 Variables de Entorno

Crear `.env` en la raíz:

```env
PUBLIC_WHATSAPP_NUMBER=+573XXXXXXXXX
PUBLIC_SITE_URL=https://sicologoenlinea.co
PUBLIC_BUSINESS_NAME=sicologoenlinea
PUBLIC_LOCATION=Colombia
PUBLIC_SOCIAL_HANDLE=sicologoenlinea
PUBLIC_BUSINESS_HOURS=Lunes a Domingo 6:00 AM - 10:00 PM
```

## 🚀 Deployment (Cloudflare Pages)

1. Conectar repo GitHub a Cloudflare Pages
2. Build command: `npm run build`
3. Output directory: `dist`
4. Configurar variables de entorno en Cloudflare Dashboard
5. Dominio custom: `sicologoenlinea.co`

### Seguridad

Los headers de seguridad se configuran en `public/_headers` (no en vercel.json):
- `X-Content-Type-Options: nosniff`
- `X-Frame-Options: DENY`
- `X-XSS-Protection: 1; mode=block`
- `Referrer-Policy: strict-origin-when-cross-origin`
- `Permissions-Policy: camera=(), microphone=(), geolocation=()`

### Redirects

`public/_redirects` maneja redirecciones a nivel de Cloudflare Pages.

## 🖼️ Imágenes

Las imágenes reales ya están en `public/` (JPG). Los componentes usan `PlaceholderImage.astro` como fallback mientras se integran todas.

## 📈 SEO

- ✅ Sitemap automático (`@astrojs/sitemap` con locale `es-CO`)
- ✅ `robots.txt`
- ✅ Meta tags + Open Graph en todas las páginas (`SEO.astro`)
- ✅ JSON-LD schemas (Organization, LocalBusiness)
- ✅ Canonical URLs
- ✅ Security headers

## 🔮 Roadmap

- [ ] Integración con Smart Schedule
- [ ] Sistema de pagos Stripe para ebooks
- [ ] Newsletter (ConvertKit)
- [ ] Multiidioma (español/inglés)
- [ ] Más contenido de blog
- [ ] Testimonios de pacientes

## 📄 Licencia

© 2025 sicologoenlinea. Todos los derechos reservados.

## 📞 Contacto

- **Email:** contacto@sicologoenlinea.co
- **Web:** https://sicologoenlinea.co