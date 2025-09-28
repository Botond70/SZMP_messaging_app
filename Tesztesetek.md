# Tesztesetek

## Friend Routes Tesztesetek

| Teszteset ID | HTTP metódus | Endpoint | Várt eredmény | Leírás | Kapott eredmény |
| :--------: | ------------ | :-------------------------------: | ---------------------- | :-----------------------------------------------------: | ------------ |
| 1 | GET | `/friends/{userId}` | Sikeres lekérés  | Létező `userId`-val lekérjük a felhasználó barátait | 200 (Sikeres) |
| 2 | GET | `/friends/{userId}` | Nem létező felhasználó | Olyan `userId`-val, amely nincs az adatbázisban  | 404 (Sikertelen) |
| 3 | POST | `/friends/{sender}/{recipient}` | Sikeres létrehozás     | Létező `sender` és `recipient` ID | 201 (Sikeres) |
| 4 | POST | `/friends/{sender}/{recipient}` | Nem létező felhasználó | `sender` vagy `recipient` ID nem létezik    | 404 (Sikertelen) |
| 5 | POST | `/friends/{sender}/{recipient}` | Hiányzó kötelező mező  | `status` hiányzik | 400 (Sikertelen) |
| 6 | PUT | `/friends/{id}`     | Sikeres frissítés  | Létező barát ID, megfelelő body | 200  (Sikeres) |
| 7 | PUT | `/friends/{id}`     | Nem létező barát | Nem létező `id` | 404  (Sikertelen) |
| 8 | DELETE | `/friends/{id}`  | Sikeres törlés  | Létező barát ID  | 200  (Sikeres) |
| 9 | DELETE | `/friends/{id}` | Nem létező barát | Nem létező `id`  | 404  (Sikertelen) |



## Messages Routes Tesztesetek

| Teszteset ID | HTTP metódus | Endpoint | Várt eredmény  | Leírás | Kapott eredmény |
| -------- | ------------ | :--------------------: | ---------------------- | :-----------------------------------------------------: | ------------ |
| 1    | GET  | `/messages/{userId}` | Sikeres lekérés  | Létező `userId`-val lekérjük a felhasználó üzeneteit  | 200 (Sikeres)  |
| 2    | GET  | `/messages/{userId}` | Nem létező felhasználó | Olyan `userId`-val, amely nincs az adatbázisban       | 404 (Sikertelen)  |
| 3    | POST | `/messages/{id}` | Sikeres létrehozás  | Létező `id`, megfelelő body-val    | 201 (Sikeres)          |
| 4    | POST | `/messages/{id}` | Hiányzó kötelező mező | Pl. `senderID`, `recipientID` vagy `content` hiányzik | 400 (Sikertelen) |
| 5    | PUT  | `/messages/{id}` | Sikeres frissítés  | Létező üzenet ID, megfelelő body   | 200 (Sikeres) |
| 6    | PUT  | `/messages/{id}` | Nem létező üzenet  | Nem létező `id`    | 404  (Sikertelen) |
| 7    | PUT  | `/messages/{id}` | Hibás body  | Pl. érvénytelen `senderID` vagy `recipientID` | 400 (Sikertelen) |
| 8    | DELETE  | `/messages/{id}` | Sikeres törlés  | Létező üzenet ID  | 200  (Sikeres) |
| 9    | DELETE  | `/messages/{id}` | Nem létező üzenet | Nem létező `id` | 404  (Sikertelen) |


## Users Routes Tesztesetek

| Teszteset ID | HTTP metódus | Endpoint | Várt eredmény | Leírás | Kapott eredmény |
| -------- | ------------ | :-------------: | ---------------------- | :----------------------------------------------: | ------------ |
| 1    | GET  | `/users`      | Sikeres lekérés  | Lekérjük az összes felhasználót   | 200 (Sikeres) |
| 2    | GET  | `/users/{id}` | Sikeres lekérés  | Létező `id`-val lekérjük a felhasználót | 200 (Sikeres)  |
| 3    | GET  | `/users/{id}` | Nem létező felhasználó | Nem létező `id`-val próbáljuk lekérni | 404 (Sikertelen) |
| 4    | POST  | `/users`      | Sikeres létrehozás   | Érvényes body-val új felhasználót hozunk létre | 201  (Sikeres) |
| 5    | POST  | `/users`      | Hiányzó kötelező mező  | Pl. `name` vagy `password` hiányzik a body-ban | 400  (Sikertelen) |
| 6    | POST  | `/users`      | Már létező felhasználó  | A megadott `name` már létezik az adatbázisban | 401  (Sikertelen) |
| 7    | PUT   | `/users/{id}` | Sikeres frissítés   | Létező felhasználó ID, megfelelő body | 200  (Sikeres) |
| 8    | PUT   | `/users/{id}` | Nem létező felhasználó | Nem létező `id` | 404  (Sikertelen) |
| 9    | PUT   | `/users/{id}` | Hibás body  | Pl. érvénytelen `birthday` formátum  | 400  (Sikertelen) |
| 10    | DELETE  | `/users/{id}` | Sikeres törlés   | Létező felhasználó ID  | 200  (Sikeres) |
| 11   | DELETE  | `/users/{id}` | Nem létező felhasználó | Nem létező `id` | 404  (Sikertelen) |


## Login Page Tesztesetek

| Teszteset ID | HTML Element | Megadott érték | Várt eredmény | Leírás | Kapott eredmény |
| -------- | ------------ | :-------------: | ---------------------- | :----------------------------------------------: | ------------ |
| 1    | Felhasználónév input | 'Felhasználó' | Sikeres Bejelentkezés | Egy felhasználónevet adunk meg | Sikeres Bejelentkezés, helyes jelszó esetén |
| 2    | Felhasználónév input | '' | Sikertelen Bejelentkezés | Üres Felhasználónevet adunk meg | 'Minden mező kitöltése kötelező!' |
| 3    | Felhasználónév input | 'Nincs ilyesvalaki' | Sikertelen Bejelentkezés | Nem létező Felhasználónevet adunk meg | 'Hibás felhasználónév vagy jelszó!' |
| 4    | Jelszó input | 'Érvényes-jelszó' | Sikeres Bejelentkezés | Egy érvényes jelszót adunk meg | Sikeres Bejelentkezés, helyes felhasználónév, jelszó esetén|
| 5    | Jelszó input | '' | Sikertelen Bejelentkezés | Üres jelszavat adunk meg | 'Minden mező kitöltése kötelező!' |
| 6    | Jelszó input | 'Nem ez a jelszavam' | Sikertelen Bejelentkezés | A felhasználóhoz nem a megfelelő jelszót adjuk meg | 'Hibás felhasználónév vagy jelszó!' |


## Register Page Tesztesetek

| Teszteset ID | HTML Element | Megadott érték | Várt eredmény | Leírás | Kapott eredmény |
| -------- | ------------ | :-------------: | ---------------------- | :----------------------------------------------: | ------------ |
| 1    | Felhasználónév input | 'Felhasználó' | Sikeres Regisztráció | Egy felhasználónevet adunk meg | Sikeres Bejelentkezés, helyesen megadott jelszó, Dátum esetén |
| 2    | Felhasználónév input | '' | Sikertelen Regisztráció | Üres Felhasználónevet adunk meg | 'Minden mező kitöltése kötelező!' |
| 3    | Felhasználónév input | 'Van ilyesvalaki' | Sikertelen Regisztráció | Már létező Felhasználónevet adunk meg | 'Ez a Felhasználónév már foglalt!' |
| 4    | Jelszó input | 'Érvényes-jelszó' | Sikeres Regisztráció | Egy érvényes jelszót adunk meg | Sikeres Regisztráció, helyes felhasználónév, dátum esetén|
| 5    | Jelszó input | '' | Sikertelen Regisztráció | Üres jelszavat adunk meg | 'Minden mező kitöltése kötelező!' |
| 6    | Dátum input | '2004-01-26' | Sikeres Regisztráció | Érvényes Dátumot adunk meg | Sikeres Regisztráció, helyes felhasználónév, jelszó esetén |
| 7    | Dátum input | '' | Sikertelen Regisztráció | Üres Dátumot adunk meg | 'Minden mező kitöltése kötelező!' |
