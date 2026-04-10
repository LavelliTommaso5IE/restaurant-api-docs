import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "Restaurant API",
  description: "Documentazione ufficiale multi-tenant",
  // Fondamentale per GitHub Pages: deve corrispondere al nome della tua repo
  base: '/restaurant-api-docs/', 
  
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guida', link: '/central-api' }
    ],
    sidebar: [
      {
        text: 'Introduzione',
        items: [
          { text: 'Cos\'è Restaurant API', link: '/' },
          { text: 'Configurazione Centrale', link: '/central-api' },
        ]
      },
      {
        text: 'Core API',
        items: [
          { text: 'Autenticazione JWT', link: '/auth' },
          { text: 'Risorse e Categorie', link: '/tenant-resources' },
        ]
      }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/tuo-utente/nome-repo' }
    ]
  }
})