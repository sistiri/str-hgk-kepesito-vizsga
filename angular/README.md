### 1. feladat: Angular form készítés és navigáció (10 pont)

**Készíts egy template vagy reaktiv űrlapot, aminek a segítségével módisítani lehet egy már elmentett tanuló adatait. A szerver oldali rész készen van**


A "students" linkre kattintva megjelenik a tanulók listája. Az edit ikonra kattintva átírányit az oldal a student-form oldalra.

**Ide tartozó teszt futtató parancs:** `ng test --include='**/student-form/*.spec.ts'`

A `student-form` komponens file-jaiban kell dolgoznod.
FONTOS: válaszd ki, hogy melyik form típussal akarsz dolgozni. A form tulajdonságai/controllerek elnevezései kövessék az `input` mezők "id" elnevezéseit (lásd később).
Előre bírtunk két változót, amiből választhatsz. A másik változó maradjon benne érintetlenül:

- form: NgForm; => jelöld meg a HTML form elemedet '#form' referenciával
- reactForm: FormGroup; => reactive Form használata.

**Feladat előírásai:**

1.  A komponensnek azonosítani kell az url-ben meglévő id-alapján a tanulót és ki kell töltenie a beviteli mezőket a tanuló megfelelő adataival. (Használd fel a `student-http.service` megfelelő metódusát lekérdezni az adatokat)  => ActivatedRoute és a `snapshot params`, vagy feliratkozás segítségével
2. Jelöld meg a form elemet egy id="studentForm" tulajdonsággal. A kötelező form elemek:
- egy `INPUT` mező a "firstName" kezelésére (id-ja is ilyen nevet kapjon!). Típusa: "text", hozzátartozó `LABEL` elem, belső szöveges tartalma: "FirstName:"
- egy `INPUT` mező a "lastName" kezelésére (id-ja is ilyen nevet kapjon!). Típusa: "text", hozzátartozó `LABEL` elem, belső szöveges tartalma: "LastName:"
- egy `INPUT` mező a "email" kezelésére (id-ja is ilyen nevet kapjon!). Típusa: "email", hozzátartozó `LABEL` elem, belső szöveges tartalma: "Email:" **figyelj arra, hogy a label 'for' attributuma a megfelelő input mezőre mutasson!**
- egy `BUTTON` elem. Belső szövege tartalma: "Save changes". Id jelölő => "save-button"
- használd a megfelelő bootsrap class-t az említett INPUT, BUTTON ("primary" klassz szinnel) és LABEL elemek megjelölésére. Tovább CSS és stílus kikötés nincs a feladatban.
3. A beviteli mezőknek csak akkor lehetnek érvényesek, ha van bevitt tetszőleges adat bennünk. Csak az alap validáció elég. (Nem kell hibaüzenetet megjeleníteni)
4. A gomb csak akkor lehet kattintható ha minden mező érvényes.
5. Mentéskor meg kell hívódnia a "saveStudent" metódusnak. (paraméterként kapja meg a `ngForm` hivatkozást "template Form" használatakor, `FormGroup` használatakor nem kell paraméter)
6. A metódus használja fel a `student-http.service` update metódusát, hogy frissüljön az adat.
7. Sikeres http hívás után irányítson át az oldal a student-list komponensre. Meg kell jelennie benne a változtatásoknak. Segítségül egy kép a form megjelenésére:

![Angular form](./img/student_form.png "Angular form")


# Angular

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.1.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
