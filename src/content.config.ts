import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';
const servicesCollection = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/services' }),
  schema: z.object({
    title: z.string(),
    modalidad: z.enum(['individual', 'parejas', 'familiar', 'grupal']),
    duracion: z.number(),
    precioCop: z.number(),
    descripcion: z.string(),
    beneficios: z.array(z.string()),
    orden: z.number(),
    activo: z.boolean().default(true),
  }),
});
const ebooksCollection = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/ebooks' }),
  schema: z.object({
    title: z.string(),
    precioCop: z.number(),
    descripcion: z.string(),
    paginas: z.number(),
    temas: z.array(z.string()),
    destacado: z.boolean().default(false),
    orden: z.number(),
    imagenUrl: z.string().optional(),
  }),
});
const blogCollection = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    descripcionCorta: z.string().max(160),
    autor: z.string().default('Equipo sicologoenlinea'),
    fecha: z.date(),
    imagenUrl: z.string().optional(),
    destacado: z.boolean().default(false),
    metaKeywords: z.array(z.string()).optional(),
  }),
});
export const collections = {
  services: servicesCollection,
  ebooks: ebooksCollection,
  blog: blogCollection,
};
