# Restaurant API Documentation

Benvenuti nella documentazione ufficiale della **Restaurant API**. Questa piattaforma è progettata per gestire più ristoranti contemporaneamente (Multi-tenancy) attraverso un'architettura a database isolati.

## Architettura del Progetto
Il sistema utilizza un approccio multi-tenant basato su domini:
- **Dominio Centrale**: Utilizzato per l'amministrazione e la creazione di nuovi tenant.
- **Tenant Domains**: Ogni ristorante ha il proprio sottodominio (es. `ristorante-1.localhost`) e il proprio database dedicato.

## Caratteristiche Principali
- **Isolamento Dati**: Ogni tenant ha un database fisico separato.
- **Autenticazione Sicura**: Gestita tramite JWT memorizzati in cookie HTTP-Only.
- **Gestione Permessi**: Sistema RBAC (Role-Based Access Control) granulare.

## Navigazione Rapida
- [Configurazione Centrale](./central-api.md)
- [Autenticazione](./auth.md)
- [Risorse Tenant](./tenant-resources.md)