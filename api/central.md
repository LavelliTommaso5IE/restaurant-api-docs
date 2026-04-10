# API Dominio Centrale

Queste API sono accessibili solo dal dominio principale dell'applicazione e servono a gestire l'infrastruttura.

## Verifica stato API

Verifica che l'applicazione centrale sia online.

**Endpoint:** `GET /api/ping`

**Risposta di successo (200 OK):**
```json
{
  "message": "Api centrale"
}
```

---

## Creazione Nuovo Tenant

Crea un nuovo ambiente per un ristorante, generando il suo database e il suo utente amministratore.

**Endpoint:** `POST /api/create-tenant`

**Body (JSON):**
```json
{
  "name": "Pizzeria Da Mario",
  "description": "La migliore pizza in città",
  "admin_name": "Mario",
  "admin_surname": "Rossi",
  "admin_email": "mario@example.com",
  "admin_password": "PasswordSicura123!"
}
```

**Comportamento:**
- Genera il dominio (es. `pizzeria-da-mario.localhost`).
- Esegue le migrazioni sul nuovo DB.
- Popola i ruoli e crea l'utente Admin fornito nel body.

**Risposta di successo (201 Created):**
```json
{
  "message": "Tenant creato con successo!",
  "data": {
    "id": "tenant_uuid",
    "name": "Pizzeria Da Mario",
    "domains": [
      {
        "domain": "pizzeria-da-mario.localhost"
      }
    ]
  }
}
```