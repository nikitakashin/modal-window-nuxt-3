// @ts-ignore
export default defineNuxtConfig({
  ssr: false,
  components: true,
  plugins: [],
  app: {
    head: {
      titleTemplate: 'Modal',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: '' },
        { name: 'format-detection', content: 'telephone=no' }
      ]
    }
  },

  alias: {
    '~/*': './*',
    '@/*': './*'
  },

  srcDir: './',

  vite: {
    // @ts-ignore
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "@/assets/main.scss";'
        }
      }
    },

    server: {
      watch: {
        usePolling: true
      }
    }
  }
});
