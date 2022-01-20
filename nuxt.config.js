export default {
  head: {
    title: "nuxt-blog",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },
  css: ["element-ui/lib/theme-chalk/index.css", "@/theme/index.scss"],

  plugins: ["@/plugins/global", "@/plugins/axios"],

  components: true,

  buildModules: [],

  modules: ["@nuxtjs/axios"],

  axios: {
    baseURL: "http://cms-web-studio.test/api/v1",
    withCredentials: true,
  },

  build: {
    transpile: [/^element-ui/],
  },
};
