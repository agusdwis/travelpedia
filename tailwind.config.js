module.exports = {
  purge: [
    "./components/**/*.{vue,js}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}"
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "var(--primary)",
        primaryAccent: "var(--primary-accent)",
        primaryAlt: "var(--primary-alt)",
        secondary: "var(--secondary)",
        background: "var(--background)",
        titleColor: "var(--title-color)",
        textColor: "var(--text-color)",
        textColorLight: "var(--text-color-light)",
        inputColor: "var(--input-color)"
      },
      animation: {
        drop: "drop ease 1s",
        "drop-slow": "drop ease 2s"
      },
      keyframes: {
        drop: {
          "0%": {
            opacity: 0,
            transform: "translateY(-80px)"
          },
          "100%": {
            opacity: 1,
            transform: "translateY(0px)"
          }
        }
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
};
