# Ruoli e Permessi

L'API permette di gestire i ruoli (es. Admin, Cameriere) e assegnare loro specifici permessi in base alle necessità del ristorante.

## Lista Ruoli (con permessi)
Ritorna la lista dei ruoli, caricando in automatico anche i permessi associati ad essi grazie al metodo `with()`.

**Endpoint:** `GET /api/roles`  
**Permesso:** `view_roles`

---

## Crea, Mostra, Aggiorna, Elimina Ruolo
Operazioni CRUD standard disponibili su:
- `POST /api/roles` (Crea)
- `GET /api/roles/{id}` (Mostra singolo)
- `PUT /api/roles/{id}` (Aggiorna nome)
- `DELETE /api/roles/{id}` (Elimina)

---

## Assegnazione Permessi a un Ruolo
Endpoint fondamentale per sincronizzare (`sync`) i permessi di un ruolo. I permessi non inclusi nell'array verranno revocati.

**Endpoint:** `PUT /api/roles/{id}/permissions`  
**Permesso richiesto:** `edit_roles`

**Body:**
Il body richiede un array di ID numerici che rappresentano i permessi.
```json
{
  "permission_ids": [1, 2, 5, 8]
}
```

**Risposta di successo (200 OK):**
```json
{
  "message": "Permissions updated correctly",
  "data": {
    "id": 2,
    "name": "Cameriere",
    "permissions": [
      { "id": 1, "name": "view_categories" },
      { "id": 2, "name": "view_orders" }
    ]
  }
}
```