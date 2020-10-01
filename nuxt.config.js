export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'Transporte Machado',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Conheça a Machado e o Expresso Fenix e faça suas viagens de ônibus com segurança e conforto.' },
      { hid: 'og:site_name', property: 'og:site_name', content: 'Transporte Machado' },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      { hid: 'twitter:site', name: 'twitter:site', content: '@transpmachado' },
      {
        hid: 'twitter:card',
        name: 'twitter:card',
        content: 'summary_large_image'
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: 'https://transpmachado.com.br/machado-card.jpg'
      },
      {
        hid: 'og:image:secure_url',
        property: 'og:image:secure_url',
        content: 'https://transpmachado.com.br/machado-card.jpg'
      },
      {
        hid: 'og:image:alt',
        property: 'og:image:alt',
        content: 'Transporte Machado'
      },
      {
        hid: 'twitter:image',
        name: 'twitter:image',
        content: 'https://transpmachado.com.br/machado-card.jpg'
      }
    ],
    link: [
      { rel: 'icon', type: 'image/png', href: '/favicon.png' }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    '~/assets/scss/global.scss',
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    '@nuxtjs/svg',
    '@nuxtjs/google-fonts'
  ],
  googleFonts: {
    families: {
      Inter: [300, 600, 800]
    }
  },
  modules: [
    'nuxt-buefy',
    '@nuxtjs/axios'
  ],
  axios: {
    https: true,
    baseUrl: 'transpmachado.com.br',
    browserBaseURL: '/',
    progress: false
  },
  server: {
    host: '0.0.0.0'
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    postcss: {
      preset: {
        features: {
          customProperties: false
        }
      }
    },
  }
}
