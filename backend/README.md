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


### 4. feladat: Összetett lekérdezés és entitás kezelés (10 pont)

Forrás mappa: `controllers/building`

**Ide tartozó tesztek forrása:** `controllers/building.test.js` és `building.integration.test.js`file

Teszt futtató parancsok: `npm run test building.test.js` és `npm run test building.integration.test.js`


1. adott egy `/building` nevű végpont a `server.js` file-ban, és egy "Building" model a `models` mappában.
2. a többi entitáshoz hasonlóan (3 réteg) tervezz meg és építs fel 2 végponton egy-egy összetett lekérdezést.
3. két metódust kell kezelnie a `building.routes.js` file-nak (put és get kérés). Kösd össze a `building.routes.js` file-t a `server.js` -ben lévő végponttal.
4. ha put kérés érkezik, akkor a `request body`-ból ki kell menteni egy "buildingId" és "className" tulajdonságot és továbbitani a megfelelő a service-nek.
5.  A `building.service.js` file-ban a "className" segítségével el kell mentenie egy új "classroom" entitást, és frissítenie kell a megfelelő épületet ("building" entitás) is egy művelet alatt. => elhelyezni az új "classroom" "id" értékét az épület entitás "classrooms" listájába.
(Az új "classroom"-nak meg kell jelennie szerver küldte listában, ha egy "get" kérés érkezne a `/classroom` végpontra. => lásd első kép)

6. A "building" entitás sikeres frissítése esetén a szerver küldje vissza a frissitett "building" entitást.
Meg kell jelennie az új classroom id-jának a "classrooms" nevű listájában (lásd második kép lejjebb)
7. Ha hiányos a "put" metódus body-ja, akkor küldjön egy "Badrequest" típusú http-error üzenetet 'Missing field' szöveggel
8. Ha "get" kérés érkezik a `/building` végpontra, akkor teljes "épület" listát küldje vissza, benne a populált classroom adatokkal. (lásd harmadik kép).
9. Használj Postman-t és az JEST teszteket ellenőrizni a megfelelő mükődést!
10. Pár vezető komment található az egyes file-okban.

**A mentett classroom ellenőrzése:**

![Classroom list](./img/handler_getClass.png "Classrooms")


**Put kérés visszaadja a frissitet épület objektumot, benne elmentetve az új Classroom id-já:**

![Classroom list](./img/handler_put.png "Classrooms")


**GET kérés a building végponton teljes populált listát ad vissza:**

![Classroom list](./img/handler_pop_list.png "Classrooms")

### 5. feladat api-dokumentáció és végpont tervezés a Swagger segítségével: (10 pont)

- A `backend/src/doc/swagger.yaml` fájlban dolgozz.
- A dokumentumban pótold a `/school` végpontra küldhető kérések dokumentációját. (A többi kéréshez hasonlóan) => lásd segédkép a `Student` végpontot illetően
- Készítsd el a kapcsolódó Mongoose modell alapján a `School` sémát is, és arra
hivatkozz az egyes url -eknél!
- Minden metódus és url variáció szerepeljen, tehát az egy entitás lekérése, az
összes lekérése, a létrehozás, frissítés és a törlés is. Tehát 5 végpontot
kell definiálnod. De az elvárt szerver választ elég csak a SIKERES művelet esetén dokumentálni (pl: 200 statusz esetén
- Ahol request body-t kér, ott pontosan legyenek feltüntetve a kötelező mezők.
- Ahol szükséges paraméter (pld: id), ott pedig azt is meg lehessen adni.

Tesztelési lehetőségként, hívd meg az 'api-docs' végpontot a szerveren, hogy ellenőrizhető legyen az, hogy az összes "school" végpont megfelelően lett dokumentálva..

**Segéd kép**

![Swagger doc](./img/school_api_doc.png "Swagger")