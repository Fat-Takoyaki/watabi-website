/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        // brand WATABI
        "red-watabi": "#be212cff",
        "red-dark": "#931b23ff",
        "red-light": "#d63441",
        
        // Rosa (sakura / fiori di ciliegio)
        "sakura": "#ffb7c5",
        "sakura-light": "#ffd4dc",
        "sakura-dark": "#ff9aad",
        "pink-watabi": "#e91e63",
        "pink-dark": "#c2185b",
        "pink-light": "#f06292",
        
        // Rosso intenso (torii gates)
        "torii": "#c41e3a",
        "torii-dark": "#8b0000",
        
        // Verde (natura, bamboo)
        "bamboo": "#4a7c59",
        "bamboo-light": "#6b9976",
        "matcha": "#88b04b",
        
        // Blu
        "ocean": "#1e3a8a",
        "ocean-light": "#3b82f6",
        "sky": "#7dd3fc",
        
        // Viola (glicine)
        "wisteria": "#9370db",
        "wisteria-dark": "#6a4c9c",
        "wisteria-light": "#b19cd9",
        
        // Oro (templi, lusso)
        "gold-temple": "#d4af37",
        "gold-light": "#ffd700",
        "gold-dark": "#b8860b",
        
        // Teal/Cyan (smeraldo)
        "jade": "#14b8a6",
        "jade-dark": "#0d9488",
        "jade-light": "#2dd4bf",
        
        // Neutri (minimal)
        "zen-gray": "#6b7280",
        "zen-light": "#9ca3af",
        "zen-dark": "#374151",
        "paper": "#faf9f6",
        "ink": "#1f2937",
      },
    },
  },
  plugins: [],
};