# Gestione Categorie

Permette di gestire le categorie del menu (es. Antipasti, Primi, Pizze, Bevande). **Richiedono Autenticazione JWT.**

## Lista Categorie
Ritorna tutte le categorie registrate nel DB del tenant.

**Endpoint:** `GET /api/categories`  
**Permesso richiesto:** `view_categories`

**Risposta (200 OK):**
```json
{
  "data": [
    {
      "id": 1,
      "name": "Primi Piatti",
      "description": "Piatti a base di pasta"
    }
  ]
}
```

---

## Crea Categoria
**Endpoint:** `POST /api/categories`  
**Permesso richiesto:** `edit_categories`

**Body:**
```json
{
  "name": "Pizze Classiche",
  "description": "Pizze della tradizione napoletana"
}
```

---

## Aggiorna Categoria
**Endpoint:** `PUT /api/categories/{id}`  
**Permesso richiesto:** `edit_categories`

---

## Elimina Categoria
**Endpoint:** `DELETE /api/categories/{id}`  
**Permesso richiesto:** `edit_categories`