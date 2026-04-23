# Gestione Utenti

Endpoint per gestire i dipendenti e gli utenti del ristorante. 
**Richiedono Autenticazione JWT e la selezione di un ristorante (tenant).**


## Lista Utenti - GET
**Endpoint:** `GET /api/users`  
**Permesso richiesto:** `view_users`  
**Descrizione:** Questo endpoint restituisce all'utente autorizzato una lista di tutti gli utenti registrati nel ristorante.

**Esempio di risposta (200 OK)**:
```json
{
  "message": "Lista utenti",
  "data": [
    {
      "id": 1,
      "name": "Mario",
      "surname": "Rossi",
      "email": "mario.rossi@acme.com",
      "stato": "attivo",
      "role": {
        "id": 1,
        "name": "admin",
        "description": "Amministratore totale del tenant"
      }
    },
    {
      "id": 2,
      "name": "Gianni",
      "surname": "Bianchi",
      "email": "gianni.bianchi@acme.com",
      "stato": "attivo",
      "role": {
        "id": 2,
        "name": "user",
        "description": "Utente standard con permessi limitati"
      }
    }
  ]
}
```

## Crea Utente - POST
**Endpoint:** `POST /api/users`  
**Permesso richiesto:** `edit_users`

**Body della richiesta:** 
```json
{
  "name": "Gianni",
  "surname": "Bianchi",
  "email": "gianni.bianchi@example.com",
  "password": "PasswordSicura123!",
  "password_confirmation": "PasswordSicura123!"
}
```

**Esempio di risposta (201 Created):**
```json
{
  "message": "Utente creato con successo",
  "user": {
    "id": 2,
    "name": "Gianni",
    "surname": "Bianchi",
    "email": "gianni.bianchi@example.com",
    "stato": null,
    "role": {
      "id": 2,
      "name": "user",
      "description": "Utente standard con permessi limitati"
    }
  }
}
```

## Aggiorna Utente
**Endpoint:** `PUT /api/users/{user_id}`  
**Permesso richiesto:** `edit_users`

**Esempio di richiesta**:
```json
{
  "name": "Paolo",
  "surname": "Neri",
  "email": "paolo.neri@acme.com"
}
```

**Esempio di risposta (200 OK):**
```json
{
  "message": "Utente aggiornato con successo",
  "user": {
    "id": 2,
    "name": "Paolo",
    "surname": "Neri",
    "email": "paolo.neri@acme.com",
    "stato": "attivo",
    "role": {
      "id": 2,
      "name": "user",
      "description": "Utente standard con permessi limitati"
    }
  }
}
```

## Elimina Utente
**Endpoint:** `DELETE /api/users/{user_id}`  
**Permesso richiesto:** `edit_users`

**Esempio di risposta (200 OK):**
```json
{
  "message": "Utente eliminato con successo"
}
```