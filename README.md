# sicologoenlinea - Sitio Web Profesional

Sitio web para **sicologoenlinea**, equipo de psicólogos especializados en atención online en Colombia.

## 🚀 Stack Tecnológico

- **Framework:** Astro 5.16.2
- **Lenguaje:** TypeScript (strict mode)
- **Estilos:** Tailwind CSS 3.x
- **Hosting:** Vercel
- **Content Management:** Astro Content Collections

## 📁 Estructura del Proyecto
sicologoenlinea/
├── public/
│ └── robots.txt
├── src/
│ ├── components/
│ │ ├── ui/
│ │ ├── BlogCard.astro
│ │ ├── EbookCard.astro
│ │ ├── ServiceCard.astro
│ │ ├── Header.astro
│ │ ├── Footer.astro
│ │ └── SEO.astro
│ ├── content/
│ │ ├── services/
│ │ ├── ebooks/
│ │ ├── blog/
│ │ └── config.ts
│ ├── layouts/
│ │ └── BaseLayout.astro
│ ├── pages/
│ │ ├── blog/
│ │ ├── index.astro
│ │ ├── servicios.astro
│ │ ├── sobre-nosotros.astro
│ │ ├── politica-privacidad.astro
│ │ └── terminos-condiciones.astro
│ ├── styles/
│ │ └── global.css
│ └── utils/
│ ├── placeholder.ts
│ ├── whatsapp.ts
│ └── format.ts
├── astro.config.mjs
├── tailwind.config.mjs
├── tsconfig.json
└── vercel.json


## 🛠️ Comandos Disponibles

| Comando | Acción |
|---------|--------|
| `npm run dev` | Inicia servidor local en localhost:4321 |
| `npm run build` | Genera sitio estático para producción |
| `npm run preview` | Preview del build local |
| `npm run astro` | Acceso directo a CLI de Astro |

## 🎨 Sistema de Diseño

### Paleta de Colores

- **Primary (Turquesa):** #16c5b4
- **Secondary (Menta):** #3bf5cd
- **Accent (Claro):** #eefffb
- Variantes: 50-900 disponibles en Tailwind config

### Tipografía

- **Headings:** Futura (fallback: Helvetica)
- **Body/Subtitles:** Anton (fallback: Helvetica)

## 📝 Content Collections

### Agregar Nuevo Servicio

Crea archivo en `src/content/services/nombre-servicio.md`:

```yaml
---
title: Nombre del Servicio
modalidad: individual
duracion: 60
precioCop: 120000
descripcion: Descripción breve
beneficios:
  - Beneficio 1
  - Beneficio 2
orden: 1
activo: true
---

Contenido en Markdown...

Agregar Nuevo Ebook
Crea archivo en src/content/ebooks/nombre-ebook.md:

---
title: Título del Ebook
precioCop: 45000
descripcion: Descripción breve
paginas: 85
temas:
  - Tema 1
  - Tema 2
destacado: true
orden: 1
---

Contenido en Markdown...


Agregar Nuevo Post de Blog
Crea archivo en src/content/blog/slug-del-post.md:

---
title: Título del Post
descripcionCorta: Descripción SEO (max 160 caracteres)
autor: Equipo sicologoenlinea
fecha: 2025-11-27
destacado: true
metaKeywords:
  - keyword1
  - keyword2
---

Contenido en Markdown...

🌍 Variables de Entorno
Crea archivo .env en la raíz (basado en .env.example):
PUBLIC_WHATSAPP_NUMBER=+573XXXXXXXXX
PUBLIC_SITE_URL=https://sicologoenlinea.co
PUBLIC_BUSINESS_NAME=sicologoenlinea
PUBLIC_LOCATION=Colombia
PUBLIC_SOCIAL_HANDLE=sicologoenlinea
PUBLIC_BUSINESS_HOURS=Lunes a Domingo 6:00 AM - 10:00 PM
PUBLIC_CONVERTKIT_FORM_ID=

🚀 Deployment en Vercel
Primera vez
Conecta repositorio GitHub a Vercel
Configura variables de entorno en Vercel Dashboard
Deploy automático desde branch main
Variables en Vercel
Agrega en Settings → Environment Variables:

PUBLIC_WHATSAPP_NUMBER
PUBLIC_SITE_URL
PUBLIC_CONVERTKIT_FORM_ID (cuando se configure newsletter)
Configurar Dominio Custom
Vercel Dashboard → Settings → Domains
Agregar sicologoenlinea.co
Configurar DNS records:
Type: A, Name: @, Value: 76.76.21.21
Type: CNAME, Name: www, Value: cname.vercel-dns.com
🖼️ Reemplazar Placeholders por Imágenes Reales
Formatos Recomendados
Servicios: 1200x800px (WebP/AVIF)
Ebooks: 600x800px (WebP/AVIF)
Blog covers: 1600x900px (WebP/AVIF)
Logo: SVG preferiblemente
Ubicación
Coloca imágenes en public/images/ y actualiza rutas en componentes.

🔧 Troubleshooting
Error de Content Collections

rm -r .astro
npm run dev


Build falla
Verifica que:

Todas las fechas en frontmatter sean válidas
No haya campos requeridos faltantes
TypeScript compile sin errores
📈 SEO Checklist
✅ Sitemap automático generado
✅ robots.txt configurado
✅ Meta tags en todas las páginas
✅ Open Graph configurado
✅ JSON-LD schemas (Organization, LocalBusiness)
✅ Canonical URLs
✅ Alt text en imágenes
🔮 Roadmap Futuro
 Integración con Smart Schedule
 Sistema de pagos Stripe para ebooks
 Newsletter ConvertKit funcional
 Multiidioma (español/inglés)
 Blog con más contenido
 Testimonios de pacientes
 Chat en vivo
📄 Licencia
© 2025 sicologoenlinea. Todos los derechos reservados.

📞 Contacto
Email: contacto@sicologoenlinea.co
Web: https://sicologoenlinea.co