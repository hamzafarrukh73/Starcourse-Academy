// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint',
    '@nuxt/ui',
    '@pinia/nuxt',
    '@nuxtjs/supabase',
    '@vite-pwa/nuxt'
  ],

  ssr: false,

  devtools: {
    enabled: false
  },

  app: {
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
  colorMode: {
    preference: 'dark'
  },

  routeRules: {
    '/': { prerender: true }
  },

  compatibilityDate: '2026-02-27',

  eslint: {
    config: {
      stylistic: {
        commaDangle: 'never',
        braceStyle: '1tbs'
      }
    }
  },
  pwa: {
    registerType: 'autoUpdate',
    registerWebManifestInRouteRules: true,
    manifest: {
      name: 'Starcourse Academy',
      short_name: 'Starcourse',
      description: 'Starcourse Academy app',
      display: 'standalone',
      icons: [
        {
          src: 'icon-192x192.png',
          sizes: '192x192',
          type: 'image/png'
        },
        {
          src: 'icon-512x512.png',
          sizes: '512x512',
          type: 'image/png'
        }
      ]
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
