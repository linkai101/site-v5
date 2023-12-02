/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "media", // bool or 'media' (system setting) or 'class' (toggle manually)
  content: [
    "./app/**/*.{js,ts,jsx,tsx,md,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,md,mdx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./mdx-components.{js,ts,jsx,tsx}",
    "./content/**/*.{md,mdx}",
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {
      fontFamily: {
        sans: ["Epilogue", "sans-serif"],
        display: ["Anybody", "sans-serif"],
      },
      colors: {
        theme: {
          primary: "#887cdc",
          primaryVariant: "#6a5acd", // #d3bee8
          // secondary: "",
          // secondaryVariant: "",
          background: "#f2f6ff",
          backgroundDark: "#282828",
          surface: "#e7e8ec",
          surfaceDark: "#3c3c3e",
          // error: "",
          onPrimary: "#f2f6ff",
          // onSecondary: "",
          onBackground: "#2a2a2a",
          onBackgroundDark: "#f2f6ff",
          onSurface: "#2a2a2a",
          onSurfaceDark: "#f2f6ff",
          // onError: ""
        },
        notion: {
          default: "#7377b6",
          gray: "#808080",
          brown: "#9e7a4c",
          orange: "#d9822b",
          yellow: "#e1ad01",
          green: "#3eb370",
          blue: "#3b88c3",
          purple: "#a36ac7",
          pink: "#e671b8",
          red: "#e74c3c",
        },
      },
      cursor: {
      }
    },
  },
  plugins: [
    // require('@tailwindcss/typography'),
  ],
  safelist: [
    { pattern: /(bg|text|border|decoration|ring-offset|ring|outline|divide|from|to|via|caret|accent|shadow)-notion-(default|gray|brown|orange|yellow|green|blue|purple|pink|red)/ }
  ],
}
