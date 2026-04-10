# API Centrale

L'API centrale gestisce il ciclo di vita dei tenant e dei domini.

## Creazione Nuovo Tenant
Permette di registrare un nuovo ristorante, creare il suo database e l'utente amministratore iniziale.

- **Endpoint**: `POST /api/create-tenant`
- **Controller**: `App\Http\Controllers\Central\TenantController@store`

### Parametri Body (JSON)
| Campo | Tipo | Descrizione |
| :--- | :--- | :--- |
| `name` | string | Nome del ristorante (usato per generare il dominio). |
| `description` | string | Breve descrizione del ristorante. |
| `admin_name` | string | Nome dell'amministratore del tenant. |
| `admin_surname` | string | Cognome dell'amministratore del tenant. |
| `admin_email` | string | Email per l'accesso al tenant. |
| `admin_password` | string | Password per l'accesso al tenant. |

### Flusso di Esecuzione
1. **Generazione Dominio**: Viene creato uno slug univoco (es: `nome-ristorante.localhost`).
2. **Creazione Database**: Viene generato un nuovo database fisico.
3. **Seeding**: Vengono popolati i dati di base (ruoli e permessi standard) nel nuovo DB.
4. **Admin Setup**: Viene creato l'utente amministratore collegato al ruolo `admin`.