/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        surface: {
          DEFAULT: "hsl(var(--surface))",
          2: "hsl(var(--surface-2))",
        },
        border: {
          DEFAULT: "hsl(var(--border))",
          strong: "hsl(var(--border-strong))",
        },
        muted: {
          foreground: "hsl(var(--muted-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
          soft: "hsl(var(--primary-soft))",
        },
        ring: "hsl(var(--ring))",
      },
      fontFamily: {
        sans: [
          "Inter var", "Inter", "ui-sans-serif", "system-ui",
          "-apple-system", "Segoe UI", "Helvetica Neue", "Arial", "sans-serif",
        ],
        mono: [
          "JetBrains Mono", "ui-monospace", "SFMono-Regular",
          "Menlo", "Consolas", "monospace",
        ],
      },
      letterSpacing: {
        tightest: "-0.045em",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 4px)",
        sm: "calc(var(--radius) - 8px)",
      },
      maxWidth: {
        content: "76rem",
        prose: "68ch",
      },
      keyframes: {
        "fade-up": {
          from: { opacity: "0", transform: "translateY(14px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.6s cubic-bezier(0.22, 1, 0.36, 1) both",
        marquee: "marquee 38s linear infinite",
      },
    },
  },
  plugins: [],
};
