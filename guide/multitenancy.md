# Architettura Multi-tenant

La **Restaurant API** utilizza un'architettura multi-tenant basata sul pacchetto `stancl/tenancy`. Questo significa che il sistema gestisce più clienti (ristoranti) utilizzando una singola istanza dell'applicazione, ma mantenendo i dati rigorosamente isolati.

## Come funziona?

Il sistema è diviso in due macro-aree:

1. **Dominio Centrale (`api.php`)**: Gestisce la registrazione dei nuovi ristoranti. Quando un ristorante si registra, l'applicazione:
   - Crea un record nel database centrale.
   - Genera un **nuovo database fisico** separato solo per quel cliente.
   - Assegna un sottodominio dinamico (es. `nome-ristorante.localhost`).
   - Esegue le migrazioni e popola i dati di base (Seeders) nel nuovo DB.

2. **Dominio Tenant (`tenant.php`)**: Una volta che l'utente naviga sul sottodominio del ristorante, dei *Middleware* speciali (`InitializeTenancyByDomain` e `PreventAccessFromCentralDomains`) intercettano la richiesta e "switchano" la connessione Laravel verso il database specifico di quel ristorante.

## Ciclo di vita della creazione

Ecco cosa succede dietro le quinte quando viene chiamato l'endpoint di creazione tenant:

1. Viene calcolato uno *slug* univoco dal nome del ristorante.
2. Viene creato il tenant e ad esso viene associato il dominio.
3. Il sistema entra nel DB del tenant tramite `$tenant->run(...)`.
4. Vengono installati i ruoli base (es. `admin`).
5. Viene creato l'account proprietario (admin_user) all'interno del DB del tenant.