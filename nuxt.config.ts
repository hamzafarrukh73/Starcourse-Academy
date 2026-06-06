// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint',
    '@nuxt/ui',
    '@pinia/nuxt',
    '@nuxtjs/supabase'
  ],

  ssr: false,

  imports: {
    dirs: [
      'composables/**',
      'utils/**'
    ]
  },

  devtools: {
    enabled: false
  },

  app: {
    head: {
      link: [
        {
          rel: 'preload',
          as: 'font',
          type: 'font/woff2',
          href: '/fonts/Roboto-VariableFont_wdth,wght.woff2',
          crossorigin: 'anonymous'
        }
      ]
    },
    pageTransition: {
      name: 'page',
      mode: 'out-in'
    },
    layoutTransition: {
      name: 'layout',
      mode: 'out-in'
    }
  },

  css: ['~/assets/css/main.css'],

  router: {
    options: {
      scrollBehaviorType: 'smooth'
    }
  },

  colorMode: {
    preference: 'dark'
  },

  routeRules: {
    '/': { prerender: true }
  },

  compatibilityDate: '2026-02-27',

  vite: {
    optimizeDeps: {
      include: [
        'zod'
      ]
    }
  },

  eslint: {
    config: {
      stylistic: {
        commaDangle: 'never',
        braceStyle: '1tbs'
      }
    }
  },

  supabase: {
    redirect: false
    // redirectOptions: {
    //   login: URLS.auth.login,
    //   callback: URLS.auth.confirm,
    //   exclude: [
    //     URLS.home,
    //     URLS.landing.hero,
    //     URLS.auth.resetPassword,
    //     URLS.auth.registration.home
    //   ]
    // }
  }
})
