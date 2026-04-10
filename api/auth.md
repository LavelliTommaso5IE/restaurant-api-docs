# Autenticazione Tenant

Le seguenti API devono essere chiamate dal sottodominio del ristorante (es. `http://nome-ristorante.localhost/api/...`).

## Verifica Tenant

Utile per il frontend per verificare che il ristorante esista e ottenere le informazioni di base (es. per personalizzare la pagina di login).

**Endpoint:** `GET /api/check-tenant`

**Risposta di successo (200 OK):**
```json
{
  "messages": "Tenant trovato",
  "data": {
    "exists": true,
    "tenant_name": "Pizzeria Da Mario",
    "description": "La migliore pizza in città"
  }
}
```

---

## Login

Autentica l'utente e riceve i cookie HTTP-Only.

**Endpoint:** `POST /api/login`

**Body:**
```json
{
  "email": "mario@example.com",
  "password": "PasswordSicura123!"
}
```

**Risposta di successo (200 OK):**
Restituisce i dati dell'utente. I Token JWT vengono impostati direttamente negli header della risposta (`Set-Cookie`).

---

## Dati Utente Corrente (Me)

Ottiene il profilo dell'utente loggato (Richiede JWT).

**Endpoint:** `GET /api/me`

**Intestazioni Richiesta:** Il cookie `Authorization` viene inviato automaticamente dal browser.

---

## Logout

Invalida il refresh token sul DB e rimuove i cookie dal browser.

**Endpoint:** `GET /api/logout`