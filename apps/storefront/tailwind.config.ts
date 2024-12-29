import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/constants/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "soft-primary": "#84D187",
        primary: "#00B207",
        "hard-primary": "#2C742F",
        warning: "#FF8A00",
        danger: "#EA4B48",
        gray: {
          "50": "#F2F2F2",
          "100": "#E6E6E6",
          "200": "#CCCCCC",
          "300": "#B3B3B3",
          "400": "#999999",
          "500": "#808080",
          "600": "#666666",
          "700": "#4D4D4D",
          "800": "#333333",
          "900": "#1A1A1A",
        },
        "green-gray": {
          "50": "#EDF2EE",
          "100": "#DAE5DA",
          "200": "#B4CCB4",
          "300": "#96B297",
          "400": "#7A997C",
          "500": "#618062",
          "600": "#406B42",
          "700": "#2B572E",
          "800": "#173B1A",
          "900": "#002603",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
      },
      fontSize: {
        "display-1": ["72px", "120%"],
        "heading-1": ["56px", "120%"],
        "heading-2": ["48px", "120%"],
        "heading-3": ["40px", "120%"],
        "heading-4": ["36px", "120%"],
        "heading-5": ["32px", "120%"],
        "body-xxl": ["24px", "150%"],
        "body-xl": ["20px", "150%"],
        "body-large": ["18px", "150%"],
        "body-medium": ["16px", "150%"],
        "body-small": ["14px", "150%"],
        "body-tiny": ["12px", "130%"],
      },
      keyframes: {
        "infinite-carousel": {
          "0%": {
            transform: "translateX(0)",
          },
          "100%": {
            transform: "translateX(-1500px)",
          },
        },
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
      },
      animation: {
        "infinite-carousel": "infinite-carousel 20s linear infinite",
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        ten: "10px",
        six: "6px",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
