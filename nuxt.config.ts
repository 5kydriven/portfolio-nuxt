export default defineNuxtConfig({
  compatibilityDate: '2026-04-29',
  devtools: { enabled: true },
  srcDir: 'app/',
  modules: ['@nuxt/ui', '@nuxt/content'],
  css: ['~/assets/css/main.css'],
  app: {
    pageTransition: {
      name: 'page',
      mode: 'out-in'
    },
    head: {
      titleTemplate: '%s | Digital Portfolio',
      htmlAttrs: {
        lang: 'en'
      },
      link: [
        {
          rel: 'stylesheet',
          href: 'https://api.fontshare.com/v2/css?f[]=general-sans@400,500,600,700&display=swap'
        }
      ],
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content: 'Mhel Angelo builds custom software, websites, web apps, mobile apps, and practical tools.'
        }
      ]
    }
  },
  ui: {
    theme: {
      colors: ['primary', 'neutral']
    }
  }
})
