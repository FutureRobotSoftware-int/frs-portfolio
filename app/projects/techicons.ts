export function getTechIcon(name: string, size = 22) {
  const n = name.toLowerCase();
  const s = String(size);

  if (n === "unity") {
    return `<svg width="${s}" height="${s}" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 1.4l9 5.1v10l-9 5.1-9-5.1v-10l9-5.1zm-3 5l-4.5 2.5v6.1l4.5 2.5v-11zM15 6.4v11l4.5-2.5v-6.1L15 6.4zM12 7.6l-2.8 1.6v5.6L12 16.4l2.8-1.6V9.2L12 7.6z"/>
    </svg>`;
  }
  if (n === "vue") {
    return `<svg width="${s}" height="${s}" viewBox="0 0 261.76 226.69" fill="currentColor">
      <path d="M204.8 0l56.96.02L130.88 226.69 0 0h97.92l32.96 57.14L163.84 0z"/>
    </svg>`;
  }
  if (n.includes("next"))
    return `<svg width="${s}" height="${s}" viewBox="0 0 24 24" fill="currentColor">
      <path d="M11.572 0l11.572 6.616v10.768l-11.572 6.616L0 17.384V6.616L11.572 0zm0 2.308L2.308 7.747v8.506l9.264 5.439 9.264-5.439V7.747l-9.264-5.439z"/>
      <path d="M14.399 7.692v6.923h-1.385V9.077l-2.769 5.538H8.577l3.692-7.385h2.13z"/>
    </svg>`;

  if (n === "fastapi")
    return `<svg width="${s}" height="${s}" viewBox="0 0 128 128" fill="currentColor">
      <circle cx="64" cy="64" r="64"/>
    </svg>`;

  if (n.includes("postgres"))
    return `<svg width="${s}" height="${s}" viewBox="0 0 24 24" fill="currentColor">
      <path d="M9.504 2.054c-3.9 1.1-7.8 6.3-7.2 11.5.6 5 4.7 8.2 9.9 9.7 2.3.5 4.5-.6 6-2.6.9-1.3 1.8-2.8 2.1-4.3.3-1.3.2-2.8.6-4 1-3 3.1-4.4 3.1-4.4-1.2-.7-2.6-1-3.9-1-1.9 0-3.8.6-5.4 1.8-.8-.1-1.6-.2-2.4-.2-1.3 0-2.6.2-3.8.5-1-.7-2.2-1.1-3.4-1-2 .1-3.6 1.3-4.7 3-1.3-2.3-1.1-5.1.2-7.3C2.904 3.954 6.104 2.354 9.504 2.054z"/>
    </svg>`;

  return "";
}
