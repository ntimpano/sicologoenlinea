import { defineCollection, z } from 'astro:content';

const servicesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    modalidad: z.enum(['individual', 'parejas', 'familiar', 'grupal']),
    duracion: z.number(), // en minutos
    precioCop: z.number(),
    descripcion: z.string(),
    beneficios: z.array(z.string()),
    orden: z.number(),
    activo: z.boolean().default(true),
  }),
});

const ebooksCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    precioCop: z.number(),
    descripcion: z.string(),
    paginas: z.number(),
    temas: z.array(z.string()),
    destacado: z.boolean().default(false),
    orden: z.number(),
  }),
});

export const collections = {
  services: servicesCollection,
  ebooks: ebooksCollection,
};