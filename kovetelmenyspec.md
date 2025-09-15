# Üzenetküldő applikáció követelményspecifikáció

## 1. Munkánk célja
A projektünk lényege egy üzenet küldő webes applikáció, mely gyors és hatékony üzenet és kép küldést biztosít felhasználóink számára.
Felhasználók saját igényre szabható fiókkal rendelkeznek ami lehetővéteszi személyiségüket bemutatását és személyes igények kielégítést.
Profilok keresésével barátaink és ismerőseinket megtalálhatjuk profil nevükkel és őket barátnak is jelölhetünk mellyel lehetőségünk nyílik a könnyű kapcsolattartásra.
A felhasználói kényelem érdekében betűméret állítható rossz látási viszonyok / látásizavarok okozta nehézségek esetén.
A kliensek számára egy letisztult és egyszerű felhasználói felületet biztosít és ezt saját kedvenc színeikkel fel is ruházhatják.
Magán szemnek szánt üzeneteket/képeket titkosítás révén biztonságban tudhatják.
Az applikáció legfontosabb szempontja az egyszerű, gyors és gördülékeny használat köré épül.

## 2. A megvalósítás eszközei
A projekt backendjét node.js fogja ellátni.
Frontend fejlesztését React és Material UI komponensek használatával gyorsítjuk fel,
mely segít a letisztult és egységes megjelenés biztosításában is.
Felhasználók a profiljuk személyre szabására több féle lehetőséget fogunk nyujtani mint például profilképek, üzenet és háttér szín választás (előre meghatározott palettából) és becenév adás mely teljes nevük mellett zárójelben jelenik meg.
Adatok tárolása egy Postgres adatbázisban fog történni mellyel a Node.js API fog kommunikálni, adatok tömörítve és titkosítva lesznek tárolva.

## 3. Jelenlegi üzleti folyamatok
### 3.1. A fizikális kommunikáció
 - 3.1.1. Amikor beszélünk valakivel, akkor helyben, időben ott kell lennünk vele személyesen és választ egyből kaphatunk.
### 3.2. A táv kommunikáció
 - 3.2.1. Levelezésnél, nem kell egy adott térben, időben jelen lenni akivel akarunk kommunikálni, viszont kell egy idő míg a levél megérkezik az illetőhöz.
 - 3.2.2. Válasznál, ugyan ezek a szempontok érvényesek.

## 4. Igényelt funkciók
### 4.1 Online felület
 - 4.1.1 bejelentkezés => felhasználónév és jelszó megasása
 - 4.1.2 regisztáció => tetszőleges név és egy erős jelszó beállítása
### 4.2 Felhasznáói testreszabás
 - 4.2.3 profilkép beállítás
 - 4.2.4 név változtatás
### 4.3 Felhasznáók közötti kapcsolat
 - 4.3.1 Két felhasználó megkeresheti egymást név alapján => barátnak jelölhet => barát elfogadás után kommunikációs csatorna létrehozása
 - 4.3.2 Opció egy nem kívánatos felhasználó letiltására
 - 4.3.3 Két felhasználó közös barátainak listázása
### 4.4 Felhasználók közötti kommunikáció
 - 4.4.1 szöveg alapján
 - 4.4.2 képek küldése és megjelnítése
 - 4.4.3 file-ok megosztása
 - 4.4.4 hangulatjelek küldése
### 4.5 Beállítások
 - 4.5.1 a felületi téma módosítása
 - 4.5.2 betűméret állítása
 - 4.5.3 nyelv kiválasztása


## 5. A rendszerre vonatkozó szabályok: A web felület szabványos eszközökkel készüljön, html/css/javascript. A képek jpeg és png formátumúak lehetnek.
A hangfileok mp3, Az üzenetek mérete pedig max 512 karakter, a hosszabb üzeneteket tördelve küldi el.

## 6. Követelménylista
K01 Egyszerű felépítés
K02 Felhasználóbarát megjelenés és használat
K03 Alacsony gépigény

## 7. Fogalomszótár
Kliens: Felhasználó eszköze, és az ahhoz tartozó megjelenítők, kommunikátorok, adatok összessége.
Szerver: A Kiszolgáló eszköze, és a Kliensekkel való kommunikáció, valamint a velük kapcsolatos adatokat tároló szerkezetek összessége.
Frontend: Minden olyan felület és kliens oldali eszköz, amivel a felhasználó találkozik, érintkezik.
Backend: Minden olyan szerver-oldali eszköz ami a Frontend által szolgáltatott kéréseket kiszolgálja, adatait tárolja, a kért adatot visszaadja.
Profil: Egy felhasználó leírása, Névvel, eléréssel, profilképpel ellátva.
API: (Application Programming Interface) A Frontend és a Backend közti kommunikációt biztosítja. Ezen keresztül folynak a Backend hívásai.
