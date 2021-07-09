export default {
  head: {
    title: "Travelpedia",
    htmlAttrs: {
      lang: "en"
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: "Travelpedia, Travel, Travel Indo, Travelin"
      }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.png" }]
  },

  css: ["@/assets/css/tailwind.css"],

  plugins: [],

  components: true,

  buildModules: ["@nuxtjs/tailwindcss", "@nuxtjs/pwa", "@nuxtjs/svg"],

  modules: [],

  build: {},

  pwa: {
    manifest: {
      name: "Travelpedia Online",
      short_name: "TravelIn",
      lang: "en",
      useWebmanifestExtension: false
    }
  }
};
