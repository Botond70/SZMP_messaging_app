# Rendszerterv

## A rendszerrel szemben támasztott általános követelmények

- A rendszer funkcióit csak bejelentkezett felhasználó használhatja.
- Webes felület React-tal
- Funkciókat Node.js-el
- Adattárolás Postgre adatbázison

## Az alkalmazásokkal szemben támasztott funkcionális követelmények

- Felhasználókezelés

## Funkcionális követelmények

### Felhasználó által elérhető funkciók

- Regisztráció
    - Felhasználó név és jelszó
    - Adatokat Node.js kezeli
    - Adatokat PostgreSQL tárolja

- Bejelentkezés
    - Belépés a fiókba felhasználó név és jelszó segitségével

- Felhasználói testreszabás
    - Profilkép beállitás, mmaximum 512x512 felbontású, jpg formátumú képet lehet megadni

    - Név változtatás

- Felhasználók közötti kapcsolat
    - Felhasználó keresés
        - Keresőbe név alapján
    - Másik felhasználó letiltása
        - A csevegés az illetővel megszűnik, ha volt és kitörli a barátlistáról.
    - Másik felhasználó barátnak jelölése
        - Csak barátként lehet csevegni egymással

- Felhasználók közötti kommunikáció
    - Beszélgetés csevegő ablakban
        - Kép küldése
        - Fájl küldése
            - Csak a fájl neve jelenik meg a tartalma nem
            - Lehetőség van a fájl letöltésére
        - Hangulatjel küldése

- Beállítások
    - Felület témája
        - Az alkalmazás felületének szinét, az előre megadottakból vagy egyedi szinekből
    - Betűméret állitás
    - Nyelv választás
        - Az előre definiált nyelvekből


## Felülettel szemben támasztott követelmények
### Log in:

- Sign up button
- username or email
- password
- Login button

### Sign up:
- name
- email
- birthday
- password + confirm 

### Main page:
- Top:
    - App name (left) + user picture (right)
- Left:
    - User profile
    - Friends
    - Notifications
    - Settings
    - Sign out
- Right + Middle:
    - Current chats

## Adatbázis terv
### Users table:
    - ID
    - name
    - email
    - birthday
    - pwd
### Message table:
    - ID 
    - senderID
    - recipientID
    - content
    - sentTime
### Friend table:
    - ID
    - sender
    - recipient
    - status
    - requested time 