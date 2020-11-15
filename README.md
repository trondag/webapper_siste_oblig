# webapper_siste_oblig
Dette er den siste obligatoriske oppgaven i faget webapplikasjoner.
Prosjektet inneholder en mappe for webapplikasjonen, og en mappe for APIet.
Webapplikasjonen inneholder også 5 tester
## Hvordan kjøre dette?
<i>NB! Du er nødt til å ha mongoDB installert for at APIet skal fungere!</i><br>
<i>Connection string: mongodb://localhost:27017/poll-api</i>
1. Kjøre webapplikasjonen
```
cd siste-oblig-app
npm start
```
Da skal webapplikasjonen kjøre og du kan starte et nytt terminalvindu og starte APIet også.<br>
2. Kjøre API
```
cd siste-oblig-api
npm start
```
Nå skal du kunne benytte webapplikasjonen på http://localhost:3000
## Bruk av applikasjonen
For å bruke polls er du nødt til å lage en bruker først. Registrer deg, så logg inn.
Etter at det er gjort, skal du kunne lage polls. Du kan også se på polls, men jeg har ikke laget noen back-end funksjonalitet for besvaring av polls.
## Tester
Jeg har laget et par tester. Til det har jeg brukt rammeverket @Testing-library som shippes med create-react-app som jeg også har brukt. 
På den måten slapp jeg å bruke tid på config.
Kjør testene slik:
```
cd siste-oblig-app
npm test
```
Kan også kjøres med coverage
```
npm test -- --coverage
```
