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


### 3. feladat: Szerver oldali entitás kezelésének 3 rétegen keresztüli felépítése (10 pont)

**Ide tartozó tesztek forrása:** `controllers/classroom.test.js` és `classroom.integration.test.js`file

Teszt futtató parancsok: `npm run test classroom.test.js` és `npm run test classroom.integration.test.js`

- Pótold a backend -en a `backend/src/controllers/classroom` mappában hiányzó
service -t, routert, és controller -t.
- A validálásnak és a működési elvnek a többi controllerét kell követnie.
- A modellt készen kapod: `backend/src/models/classroom.model.js`.
- A `backend/src/server.js` fájlban módosítsd a `/classroom` url -re érkező
kérések esetén a routert, hogy a classroom router szolgálja ki a kéréseket.

Ellenőrzés: aktiváld az url-ben a kliens oldalon a Classroom-list komponenst a frontend oldalon (lásd routing.module és mellékelt kép). Ki kell listázódni az osztályoknak és módosíthatónak kell lenniük az `Update` gombra kattintva, vagy új osztály is elmenthető. (A lista frissül modósítás vagy mentés esetén)

**Ellenőrzési lehetőség:**

![Classroom list](./img/class_list.png "Classrooms")