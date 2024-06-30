// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: [
    "@nuxtjs/tailwindcss", 
    "nuxt-icon", 
    "@formkit/nuxt", 
    "@nuxtjs/i18n",
    '@nuxtjs/axios',
    '@nuxtjs/auth-next'
  ],
  runtimeConfig: {
    public: {
      appUrl: process.env.APP_URL || "http://localhost:3000",
      apiUrl: process.env.API_URL || "http://localhost:8000",
    }
  }, 
  formkit: {
    configFile: "~/formkit.config.ts",
    autoImport: true,
  },
  i18n: {
    defaultLocale: 'fr'
  },
  axios: {
    baseURL: process.env.API_URL || "http://localhost:8000",
    credentials: true
  },
  auth: {
    strategies: {
      laravelSanctum: {
        provider: 'laravel/sanctum',
        url: process.env.API_URL || 'http://localhost:8000'
      }
    }
  }
})
