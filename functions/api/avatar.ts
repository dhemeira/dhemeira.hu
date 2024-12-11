function fnv1aHash(str: string): number {
  let hash = 2166136261;
  for (let i = 0; i < str.length; i++) {
    hash ^= str.charCodeAt(i);
    hash += (hash << 1) + (hash << 4) + (hash << 7) + (hash << 8) + (hash << 24);
  }
  return hash >>> 0;
}

function hashStringToColor(str: string): string {
  const hash = fnv1aHash(str);
  const color = (hash & 0x00ffffff).toString(16).toUpperCase();
  return '00000'.substring(0, 6 - color.length) + color;
}

function clamp(value: number, min: number, max: number): number {
  return Math.max(min, Math.min(max, value));
}

function seededRandom(seed: number) {
  const a = 1664525;
  const c = 1013904223;
  seed = (a * seed + c) % 4294967296;
  seed ^= seed << 21;
  seed ^= seed >>> 3;
  seed ^= seed << 4;
  seed = Math.abs(seed);
  return clamp(((seed % 4294967296) / 4294967296) * 2, 0, 1);
}

function rnd(seed: number, min: number, max: number) {
  return seededRandom(seed) * (max - min) + min;
}

function generateRandomSvg(seed: string): string {
  const size = 256;
  const numShapes = Math.floor(rnd(seed.length, 25, 50));

  const color1 = `#${hashStringToColor(seed + 'asdsda')}`;
  const color2 = `#${hashStringToColor(seed + 'sgsdggs')}`;
  const color3 = `#${hashStringToColor(seed + 'fgherasfdas')}`;

  let svgContent = `
    <svg width="${size}" height="${size}" xmlns="http://www.w3.org/2000/svg" filter="url(#blur-svg)">
      <defs>
        <linearGradient id="gradient-bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:${color1};stop-opacity:1" />
          <stop offset="50%" style="stop-color:${color2};stop-opacity:1" />
          <stop offset="100%" style="stop-color:${color3};stop-opacity:1" />
        </linearGradient>`;

  for (let i = 0; i < numShapes; i++) {
    const gradientId = `gradient-${i}`;

    const gradientFrom = `#${hashStringToColor(seed + 'shape' + i * 11 + 'asdtnrgd')}`;
    const gradientTo = `#${hashStringToColor(seed + 'shape' + i * 55)}`;

    svgContent += `
      <linearGradient id="${gradientId}" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style="stop-color:${gradientFrom};stop-opacity:1" />
        <stop offset="100%" style="stop-color:${gradientTo};stop-opacity:1" />
      </linearGradient>`;
  }

  svgContent += `
    <filter id="blur-circle" x="0" y="0">
      <feGaussianBlur in="SourceGraphic" stdDeviation="3" />
    </filter>
    <filter id="blur-svg" x="0" y="0">
      <feGaussianBlur in="SourceGraphic" stdDeviation="1.5" />
    </filter>
  `;

  svgContent += `
    </defs>
    <rect width="100%" height="100%" fill="url(#gradient-bg)" />`;

  for (let i = 0; i < numShapes; i++) {
    const gradientId = `gradient-${i}`;

    const x = Math.floor(rnd(seed.length + i, 0, size));
    const y = Math.floor(rnd(seed.length + i, 0, size));

    const circleSize = Math.floor(rnd(seed.length + i, size / 5, size / 2));
    const opacity = rnd(seed.length + i, 0.25, 0.95);

    svgContent += `<circle cx="${x}" cy="${y}" r="${circleSize}" fill="url(#${gradientId})" opacity="${opacity}" filter="url(#blur-circle)" />`;
  }

  svgContent += `</svg>`;
  return svgContent;
}

export const onRequest: PagesFunction = async (context) => {
  const { request } = context;
  const url = new URL(request.url);
  const seed = url.searchParams.get('username') || 'default';

  const svgContent = generateRandomSvg(seed);

  return new Response(svgContent, {
    status: 200,
    headers: {
      'content-type': 'image/svg+xml',
    },
  });
};
