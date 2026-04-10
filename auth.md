# Autenticazione e Sicurezza

Il sistema utilizza JSON Web Tokens (JWT) per gestire le sessioni in modo stateless e sicuro.

## Flusso JWT
I token non vengono restituiti nel corpo della risposta JSON, ma vengono impostati come **Cookie HTTP-Only** dal server per prevenire attacchi XSS.

### Login
- **Endpoint**: `POST /api/login`
- **Controller**: `App\Http\Controllers\Tenant\Auth\AuthController@login`

**Risposta**:
Oltre ai dati utente, il server imposta:
- Cookie `Authorization`: Access Token (scadenza 15 min).
- Cookie `Refresh`: Token di rinnovo (scadenza 7 giorni).

### Logout
- **Endpoint**: `GET /api/logout`
- **Azione**: Revoca il Refresh Token dal database e cancella i cookie dal browser.

## Middleware JWT
Il `JwtMiddleware` si occupa di:
1. Verificare la validità dell'Access Token nei cookie.
2. Se scaduto, tentare il rinnovo automatico tramite il Refresh Token.
3. Se entrambi sono invalidi, restituire `401 Unauthorized`.