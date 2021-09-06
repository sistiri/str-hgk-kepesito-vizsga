### 2. feladat: Adatbázis (Mongoose séma) létrehozása. (10 pont)

**Ide tartozó tesztek forrása:**`controllers/school.test.js` és `school.integration.test.js`file.

Teszt futtató parancsok: `npm run test school.test.js` és `npm run test school.integration.test.js`

 A szerver oldalon kell dolgoznod, a kód egy része készen áll. A többi feladat:


- Pótold Mongoose modellt az `backend/src/models/school.model.js` fájlban.
- Frontenden a `models` mappában vannak a megfelelő model típusok
A mongoose Schema pontosan kövesse a frontend  megfelelő "school" modeljének a mintáját.
- _id értéke nem kötelező, figyelj arra, hogy mongoose modelben megfelelő típusosságot is adj tulajdonságoknak!
- A `backend/src/server.js` fájlban módosítsd a `/school` url -re érkező
kérések esetén a routert, hogy a service router szolgálja ki a kéréseket.

**Ellenőrzési lehetőség:**
- Ha nem indult újra a server, inditsd újra ekkor, ha kész a feladat. A `School` mongoose model ekkor már feltölti a server indításkor az adatbázist az iskolai entitásokkal is.
- A `Schools` linkre kattintva meg kell jelennie az iskoláknak.
- Az "edit ikon" rakattintva átírányít az oldal és megjelenik a `School-form` benne a  kitöltött iskolai adatokkal.

![School-list](./img/school_list.png "School list")


**Iskolai form megjelenése:**

![School form](./img/school_form.png "School form")