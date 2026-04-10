# Esempi Pratici d'Uso

Ecco alcuni esempi di integrazione tramite `cURL` per testare velocemente l'API.

## 1. Registrazione di un nuovo Ristorante (Dominio Centrale)

Questa chiamata avviene sul dominio principale (es. `http://api.centrale.localhost`).

```bash
curl -X POST [http://api.centrale.localhost/api/create-tenant](http://api.centrale.localhost/api/create-tenant) \
-H "Content-Type: application/json" \
-H "Accept: application/json" \
-d '{
    "name": "Sushi Zen",
    "description": "Ristorante Giapponese",
    "admin_name": "Akira",
    "admin_surname": "Toriyama",
    "admin_email": "akira@sushizen.com",
    "admin_password": "super_secret_password"
}'
```

## 2. Login Staff (Sottodominio Ristorante)

Questa chiamata va effettuata sul sottodominio appena generato. Il server risponderà settando i cookie `Authorization` e `Refresh`.

```bash
curl -c cookies.txt -X POST [http://sushi-zen.localhost/api/login](http://sushi-zen.localhost/api/login) \
-H "Content-Type: application/json" \
-H "Accept: application/json" \
-d '{
    "email": "akira@sushizen.com",
    "password": "super_secret_password"
}'
```

## 3. Creazione di una Categoria Menu (Autenticato)

Dopo aver effettuato il login (e avendo i cookie salvati, in questo caso in `cookies.txt`), possiamo effettuare una chiamata protetta dal JWT:

```bash
curl -b cookies.txt -X POST [http://sushi-zen.localhost/api/categories](http://sushi-zen.localhost/api/categories) \
-H "Content-Type: application/json" \
-H "Accept: application/json" \
-d '{
    "name": "Nigiri",
    "description": "Fettine di pesce crudo su polpette di riso"
}'
```