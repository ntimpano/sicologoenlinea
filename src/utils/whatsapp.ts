/**
 * Construye un enlace de WhatsApp con mensaje predefinido
 */
export function buildWhatsAppLink(message: string, phoneNumber: string): string {
  const encodedMessage = encodeURIComponent(message);
  const cleanPhone = phoneNumber.replace(/\D/g, ''); // Elimina caracteres no numéricos
  return `https://wa.me/${cleanPhone}?text=${encodedMessage}`;
}

/**
 * Mensajes predefinidos contextuales para WhatsApp
 */
export const MESSAGES = {
  AGENDAR_CITA: 'Hola, me gustaría agendar una cita para terapia psicológica.',
  CONSULTA_GENERAL: 'Hola, me gustaría obtener más información sobre sus servicios.',
  INFO_SERVICIO: (serviceName: string) =>
    `Hola, me interesa conocer más sobre el servicio de ${serviceName}.`,
  INFO_EBOOK: (ebookName: string) =>
    `Hola, me interesa obtener información sobre el ebook "${ebookName}".`,
  CONSULTA_ARTICULO: (articleTitle: string) =>
    `Hola, leí el artículo "${articleTitle}" y me gustaría hacer una consulta.`,
};

/**
 * Obtiene el número de WhatsApp desde variables de entorno
 */
export function getWhatsAppNumber(): string {
  return import.meta.env.PUBLIC_WHATSAPP_NUMBER || '';
}