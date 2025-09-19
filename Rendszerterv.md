# Rendszerterv

## A rendszerrel szemben támasztott általános követelmények

- A rendszer funkcióit csak bejelentkezett felhasználó használhatja.
- Webes felület React-tal
- Funkciókat Node.js-el
- Adattárolás PostgreSQL adatbázison

## Az alkalmazásokkal szemben támasztott funkcionális követelmények

- Felhasználókezelés
- Üzenetküldés lebonyolítása
- Kommunikációs felület kiszolgálása

## Funkcionális követelmények

### Felhasználó által elérhető funkciók

- Regisztráció
    - Felhasználó név és jelszó
    - Adatokat Node.js kezeli
    - Adatokat PostgreSQL tárolja

- Bejelentkezés
    - Belépés a fiókba felhasználó név és jelszó segitségével

- Felhasználói testreszabás
    - Profilkép beállitás, maximum 512x512 felbontású, jpg formátumú képet lehet megadni

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
### Bejelentkezés:

- Regisztráció gomb
- Felhasználónév vagy jelszó
- Jelszó
- Bejelentkezés gomb

### Regisztráció:
- Név
- Email
- Születésnap
- Jelszó + jelszó megerősitése

### Fő oldal:
- Fenti rész:
    - Applikáció neve (bal oldalt) + felhasználó profilképe (jobb oldalt)
- Bal oldali rész:
    - Felhasználó profilja
    - Barátok
    - Értesitések
    - Beállitások
    - Kijelentkezés
- Jobb oldali és középső rész:
    - Jelenlegi csevegések

## Adatbázis terv
### Felhasználók tábla:
    - ID
    - name
    - email
    - birthday
    - pwd
### Üzenet tábla:
    - ID 
    - senderID
    - recipientID
    - content
    - sentTime
### Barát tábla:
    - ID
    - sender
    - recipient
    - status
    - requested time 