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
  ui:{
    icons:['mdi']
  },
  // @ts-ignore
  css:['@/assets/main.scss'],
  modules: ['@nuxt/ui'],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "~/assets/scss/index.scss" as *;'
        }
      }
    }
  },
  colorMode: {
    // preference: 'dark'  // 暂不实现主题切换
  }
})
