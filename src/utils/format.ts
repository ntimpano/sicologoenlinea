/**
 * Formatea un número como precio colombiano
 * @example formatPrice(120000) // "$120.000 COP"
 */
export function formatPrice(amount: number): string {
  return `$${amount.toLocaleString('es-CO')} COP`;
}

/**
 * Formatea una fecha en formato colombiano
 * @example formatDate(new Date()) // "27 de noviembre, 2025"
 */
export function formatDate(date: Date, locale: string = 'es-CO'): string {
  return new Intl.DateTimeFormat(locale, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(date);
}

/**
 * Formatea una fecha de forma corta
 * @example formatDateShort(new Date()) // "27/11/2025"
 */
export function formatDateShort(date: Date, locale: string = 'es-CO'): string {
  return new Intl.DateTimeFormat(locale, {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  }).format(date);
}