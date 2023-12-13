// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app:{
    head:{
      title:"博博博客l❤log"
    }
  },
  devtools: { enabled: true },
  alias:{
    "@" : "/"
  },
  // @ts-ignore
  css:['@/assets/scss/index.scss'],
})
