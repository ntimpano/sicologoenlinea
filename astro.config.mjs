import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import cloudflare from '@astrojs/cloudflare';
export default defineConfig({
  site: 'https://sicologoenlinea.co',

  integrations: [
    sitemap({
      i18n: {
        defaultLocale: 'es',
        locales: {
          es: 'es-CO',
        },
      },
    }),
  ],

  output: 'static',

  vite: {
    plugins: [tailwindcss()],
  },

  adapter: cloudflare(),
});