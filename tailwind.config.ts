import colors from "tailwindcss/colors";

module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
        "./public/index.html",
    ],
    plugins: [
        require("tailwindcss"),
        require("autoprefixer"),
        require('preline/plugin'),
        require('@heroicons/react'),
        require("postcss-import"),
        require("postcss-nested"),
        require("postcss-custom-properties"),
        require("preline/plugin"),
        require("@tailwindcss/typography"),
    ],
    theme: {
        colors: {
            primary: colors.blue,
            secondary: colors.red,
            accent: colors.green,
            transparent: "transparent",
            current: "currentColor",
            black: colors.black,
            white: colors.white,
            gray: {
                opacityGrey: "#F2F5FA",
                lightGrey: "#F1F5F9",
                coolGrey: "#E2E8F0",
                darkGrey: "#9DB3C4",
                baseGrey: "#EFF4F7",
                "50": "#f9fafb",
                "100": "#f3f4f6",
                "200": "#e5e7eb",
                "300": "#d1d5db",
                "400": "#9ca3af",
                "500": "#6b7280",
                "600": "#4b5563",
                "700": "#374151",
                "800": "#1f2937",
                "900": "#111827",
                "950": "#030712",
                "1000": "#E2E8F0",
            },
            green: {
                inputGreen: "#2E9B58",
                baseGreen: "#C6E57D",
                "50": "#f0fdf4",
                "100": "#dcfce7",
                "200": "#bbf7d0",
                "300": "#86efac",
                "400": "#4ade80",
                "500": "#22c55e",
                "600": "#16a34a",
                "700": "#15803d",
                "800": "#166534",
                "900": "#14532d",
                "950": "#052e16",
            },
            emerald: colors.emerald,
            indigo: colors.indigo,
            iceCream: "#8CD1C9",
            yellow: {
              starYellow: "#FFC62D",
                lightYellow: "#FFE7A6",
                baseYellow: "#FFC627",
                "50": "#fefce8",
                "100": "#fef9c3",
                "200": "#fef08a",
                "300": "#fde047",
                "400": "#facc15",
                "500": "#eab308",
                "600": "#ca8a04",
                "700": "#a16207",
                "800": "#854d0e",
                "900": "#713f12",
                "950": "#572508",
            },
            slate: colors.slate,
            blue: {
                opacityBlue: "#002E5640",
                focusedBlueLight: "#CCDAFF",
                socialBlue: "#334155",
                lightBlue: "#ABBADB",
                teal: "#335E80",
                focusedBlue: "#3B72FF",
                oceanBlue: "#B8DBF7",
                darkBlue: "#1A3C82",
                altBlue: "#002A4C",
                navy: "#003056",
                baseBlue: "#204795",
                deepSea: "#6A8BA6",
                "50": "#eff6ff",
                "100": "#dbeafe",
                "200": "#bfdbfe",
                "300": "#93c5fd",
                "400": "#60a5fa",
                "500": "#3b82f6",
                "600": "#2563eb",
                "700": "#1d4ed8",
                "800": "#1e40af",
                "900": "#1e3a8a",
                "950": "#172554",
            },
            red: {
                invalidBg: "#FEF2F2",
                focusRedLight: "#FACECB",
                lightRed: "#F8CBCC",
                FocusRed: "#EF4444",
                "50": "#fef2f2",
                "100": "#fee2e2",
                "200": "#fecaca",
                "300": "#fca5a5",
                "400": "#f87171",
                "500": "#ef4444",
                "600": "#dc2626",
                "700": "#b91c1c",
                "800": "#991b1b",
                "900": "#7f1d1d",
                "950": "#450a0a",
            },
            orange: {
                baseOrange: "#FF946A",
                "50": "#fff7ed",
                "100": "#ffedd5",
                "200": "#fed7aa",
                "300": "#fdba74",
                "400": "#fb923c",
                "500": "#f97316",
                "600": "#ea580c",
                "700": "#c2410c",
                "800": "#9a3412",
                "900": "#7c2d12",
                "950": "#431407",
            },
        },
        extend: {
            boxShadow: {
                primary: "0px 0px 0px 4px rgba(126, 161, 229, 0.35)",
                secondary: "0px 0px 0px 4px rgba(170, 194, 226, 0.25)",
                yellow: "0px 0px 0px 4px rgba(255, 198, 39, 0.35)",
            },
        },
    },
};
