# Autenticazione & Sicurezza

L'API utilizza il protocollo **JWT (JSON Web Token)** per l'autenticazione, ma adotta un approccio altamente sicuro basato su **Cookie HTTP-Only**.

## Il flusso di Login

Quando un utente effettua il login sul dominio del proprio ristorante:
1. Il sistema verifica le credenziali all'interno del database del tenant.
2. Vengono generati due token:
   - **Access Token (JWT)**: Ha una validità breve (15 minuti). Contiene l'ID dell'utente e l'ID del suo ruolo.
   - **Refresh Token**: Generato tramite `Str::random(60)` e salvato nel database. Ha una validità lunga (7 giorni).
3. **Sicurezza Cookie**: Invece di inviare i token nel corpo della risposta JSON (dove sarebbero vulnerabili agli script XSS del frontend), l'API li imposta automaticamente nei cookie del browser:
   - `Authorization` (Access Token)
   - `Refresh` (Refresh Token)

Entrambi i cookie sono impostati come `HTTP-Only`, `Secure` (se in HTTPS) e gestiti in modo trasparente dal browser per le chiamate successive.

## Il Middleware JWT

Le rotte protette (come la gestione utenti o menu) passano attraverso il `JwtMiddleware`. Questo componente:
- Legge l'Access Token dai cookie.
- Se è valido, fa passare la richiesta.
- Se è **scaduto**, utilizza automaticamente il Refresh Token per generarne uno nuovo senza che l'utente debba rifare il login, offrendo un'esperienza utente fluida.

## Protezione delle Rotte (RBAC)
Ogni rotta protetta utilizza un middleware specifico per i permessi, ad esempio `->middleware("permission:edit_categories")`. Questo assicura che solo lo staff autorizzato possa eseguire specifiche azioni (es. un cameriere può vedere le categorie, ma non modificarle).