---
layout: home

hero:
  name: "Restaurant API"
  text: "Documentazione Ufficiale"
  tagline: "Sistema Multi-tenant scalabile per la gestione della ristorazione"
  actions:
    - theme: brand
      text: Inizia dalla Guida
      link: /guide/multitenancy
    - theme: alt
      text: API Reference
      link: /api/central
---

<br><br>

## Caratteristiche Principali

<div class="features">
  <div class="feature">
    <h3>🏢 Multi-Tenancy</h3>
    <p>Isolamento totale dei dati. Ogni ristorante ha il proprio database e il proprio sottodominio dinamico.</p>
  </div>
  <div class="feature">
    <h3>🔒 Sicurezza Avanzata</h3>
    <p>Autenticazione basata su JWT con cookie HTTP-Only per la massima protezione contro attacchi XSS.</p>
  </div>
  <div class="feature">
    <h3>🛡️ Gestione Permessi</h3>
    <p>Sistema di ruoli e permessi granulare per gestire lo staff (Admin, Camerieri, Cuochi, ecc).</p>
  </div>
</div>

<style>
.features {
  display: flex;
  gap: 20px;
  margin-top: 20px;
}
.feature {
  flex: 1;
  background: var(--vp-c-bg-soft);
  padding: 20px;
  border-radius: 8px;
}
</style>