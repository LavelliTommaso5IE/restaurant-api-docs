# Gestione Utenti

Endpoint per gestire i dipendenti del ristorante. **Richiedono Autenticazione JWT.**

## Lista Utenti
**Endpoint:** `GET /api/users`  
**Permesso richiesto:** `view_users`

## Crea Utente
**Endpoint:** `POST /api/users`  
**Permesso richiesto:** `edit_users`

## Aggiorna Utente
**Endpoint:** `PUT /api/users/{user_id}`  
**Permesso richiesto:** `edit_users`

## Elimina Utente
**Endpoint:** `DELETE /api/users/{user_id}`  
**Permesso richiesto:** `edit_users`