import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "Restaurant API",
  description: "Sistema Multi-tenant per la gestione della ristorazione",
  base: '/restaurant-api-docs/',
  
  // Impostazioni per il tema chiaro/scuro
  appearance: true, // true di default (abilita lo switch dark/light)

  themeConfig: {
    // Menu di navigazione in alto
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guida Core', link: '/guide/multitenancy' },
      { text: 'API Reference', link: '/api/central' },
      { text: 'Esempi', link: '/examples/examples' }
    ],

    // Barra laterale
    sidebar: {
      '/guide/': [
        {
          text: 'Concetti Fondamentali',
          items: [
            { text: 'Architettura Multi-tenant', link: '/guide/multitenancy' },
            { text: 'Autenticazione & Sicurezza', link: '/guide/auth' }
          ]
        }
      ],

      '/api/': [
        {
          text: 'Dominio Centrale',
          items: [
            { text: 'Gestione Tenant', link: '/api/central' }
          ]
        },
        {
          text: 'Rotte del Tenant',
          items: [
            { text: 'Autenticazione', link: '/api/auth' },
            { text: 'Utenti e Staff', link: '/api/users' },
            { text: 'Menu e Categorie', link: '/api/categories' },
            { text: 'Ruoli e Permessi', link: '/api/roles' }
          ]
        }
      ],

      '/examples/': [
        {
          text: 'Risorse',
          items: [
            { text: 'Esempi di Richieste API', link: '/examples/examples' }
          ]
        }
      ]
    },

    // Link social in alto a destra (Logo GitHub)
    socialLinks: [
      {
        icon: 'github',
        link: 'https://github.com/LavelliTommaso5IE'
      }
    ],

    // Footer
    footer: {
      message: 'Rilasciato sotto licenza MIT.',
      copyright: 'Copyright © 2026 Tommaso Lavelli'
    },
    
    // Testo per la barra di ricerca (se volessi aggiungerla in futuro)
    outline: {
        label: 'In questa pagina'
    }
  }
})