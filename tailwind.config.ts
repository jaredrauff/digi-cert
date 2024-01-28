import colors from "tailwindcss/colors";

module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
        "./public/index.html",
    ],
    plugins: [
        require("tailwindcss"),
        require("autoprefixer"),
        require("postcss-import"),
        require("postcss-nested"),
        require("postcss-custom-properties"),
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
            gray: colors.gray,
            green: colors.green,
            emerald: colors.emerald,
            indigo: colors.indigo,
            yellow: {
                starYellow: "#FFC62D",
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
            blue: colors.blue,
            red: colors.red,
            orange: colors.orange,
        },
        extend : {

        }
    },
};
