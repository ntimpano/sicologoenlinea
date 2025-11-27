/**
 * Genera un SVG placeholder con gradiente branded
 */
export function generatePlaceholder(
  width: number,
  height: number,
  text?: string,
  variant: 'primary' | 'secondary' | 'accent' = 'primary'
): string {
  const gradients = {
    primary: {
      from: '#4A90E2',
      to: '#7FCDCD',
    },
    secondary: {
      from: '#7FCDCD',
      to: '#F5F1E8',
    },
    accent: {
      from: '#F5F1E8',
      to: '#4A90E2',
    },
  };

  const gradient = gradients[variant];
  const displayText = text || `${width}×${height}`;

  const svg = `
    <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="grad-${variant}" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:${gradient.from};stop-opacity:1" />
          <stop offset="100%" style="stop-color:${gradient.to};stop-opacity:1" />
        </linearGradient>
      </defs>
      <rect width="${width}" height="${height}" fill="url(#grad-${variant})" />
      <text
        x="50%"
        y="50%"
        font-family="Inter, sans-serif"
        font-size="18"
        fill="white"
        text-anchor="middle"
        dominant-baseline="middle"
        opacity="0.8"
      >
        ${displayText}
      </text>
    </svg>
  `.trim();

  return `data:image/svg+xml,${encodeURIComponent(svg)}`;
}