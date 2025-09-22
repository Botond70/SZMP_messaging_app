# Funkció specifikáció

## Technológiai architektúra

### 1. Frontend

- 1.1 Keretrendszer: React.js
- 1.2 Komponenskönyvtár: Material UI
- 1.3 Fejlesztési nyelvek: HTML, CSS, JavaScript.

### 2. Backend

- 2.1 Keretrendszer: Node.js, szerveroldali logika.
- 2.2 Adatbázis: PostgreSQL a felhasználói és üzenetadatok tárolására.
- 2.3 Adatbiztonság: Az adatbázisban tárolt információk tömörítve és titkosítva lesznek.

## Az alkamazás funkciói

### 1.1 Online felület

- 1.1.1 Ez lesz a React front end, amit a felhasználok fognak használni a regisztrációra.
bejelentkezésre, profil testreszabásra, más személy keresésére és annak bejelölésére, csevegésre és fájlok küldésére.

### 1.2 Regisztráció

- 1.2.1 A felhasználok tudnak regisztrálni fiókokat egy felhasználónév és jelszó használatával a rendszerbe, adataikat a Node.js backend kezeli le, és tárolja a PostgreSQL adatbázisban

### 1.3 Bejelentkezés

- 1.3.1 A felhasználok a regisztráció során megadott adataikkal  tudnak majd belépni a fiókjukba, jelszavaik titkosítva lesznel tárolva.

### 2.1 Felhasználói testreszabás

- 2.1.1 A felhasználók képesek lesznek majd profilképet beállitani és esetlegesen nevet változtatni. Profilképnek, egy maximum 512x512 felbontású, jpg formátumú képet lehet megadni.

### 3.1 Felhasználók közötti kapcsolat

- 3.1.1 A felhasználók képesek lesznek egymást megkeresni, letiltani és barátnak jelölni.

### 3.2 Név alapján való keresés

- 3.2.1 A felhasználók megkereshetik egymást név alapján úgy hogy a keresőbe beirják a másik fél nevét.

### 3.3 Letiltás

- 3.3.1 A felhasználó letud tiltani nem kivánatos felhasználókat, ilyenkor a csevegés az illetővel megszűnik, ha volt és kitörli a barátlistáról.

### 3.4 Barát hozzáadása

- 3.4.1 A felhasználók betudnak jelölni egy másik felhasználót barátnak, és csak ezután tudnak csevegni egymással.

### 4.1 Felhasználók közötti kommunikáció

- 4.1.1 A felhasználók a csevegő ablakban tudnak egymással beszélni szöveg alapján, ezen felül tudnak fájlokat és  hangulatjeleket küldeni.

### 4.2 Képek küldése

- 4.2.1 A csevegőablakban elküldött képek megjelenítve jelennek meg a felhasználók számára.

### 4.3 Fájlok küldése

- 4.3.1 A csevegőablakban van lehetőség fájlok küldésére, csak a fájl neve jelenik meg a tartalma nem, de lehetőség van a fájl letöltésére.

### 4.4 Hangulatjelek küldése

- 4.4.1 A csevegőablakban a felhasználók képesek a szövegükhöz hangulatjeleket tenni vagy simán küldeni egymásnak.

### 5.1 Beállítások

- 5.1.1 A felhasználók megváltoztathatják a felület sémáját, a szövegek betűméretét és nyelvet is válaszhatnak.

### 5.2 Felületi téma

- 5.2.1 A felhasználó megváltozhatja az alkalmazás felületének szinét, az előre megadottakból vagy egyedi szinekből.

### 5.3 betűméret

- 5.3.1 A felhasználó be tudja állitani a szöveg betűinek méretét.

### 5.4 Nyelv választás

- 5.4.1 A felhasználó tud majd az előre definiált nyelvekből választani.
