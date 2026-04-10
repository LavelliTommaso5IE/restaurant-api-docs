# Risorse del Tenant

Tutte queste rotte sono accessibili solo dopo l'autenticazione e operano nel contesto del database del tenant corrente.

## Categorie Menu
Gestione delle categorie dei piatti.
- **Endpoint**: `/api/categories`
- **Permessi**: `view_categories` (lettura), `edit_categories` (scrittura).

## Gestione Utenti (Staff)
Gestione del personale del ristorante.
- **Endpoint**: `/api/users`
- **Metodi**: `GET` (lista), `POST` (crea), `PUT` (modifica), `DELETE` (elimina).
- **Permessi**: `view_users`, `edit_users`.

## Ruoli e Permessi
Permette di visualizzare la gerarchia dei ruoli o assegnare permessi specifici.
- **Endpoint**: `/api/roles` e `/api/permissions`.
- **Permessi**: `view_roles`, `view_permissions`, `edit_roles`.

> **Nota**: Il sistema utilizza il Model Binding di Laravel per risolvere automaticamente le risorse (es. `{user}`, `{category}`) tramite ID.