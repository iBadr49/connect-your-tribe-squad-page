# Dynamische Squadpage

<img width="100%" alt="image" src="https://user-images.githubusercontent.com/112857932/223997626-e6bb1273-1bf1-4393-8b5e-40e37107fe3a.png">


## 📚 Inhoudsopgave

- [Beschrijving](#beschrijving)
- [Kenmerken](#kenmerken)
- [Installatie](#installatie)
- [Bronnen](#bronnen)
- [Licentie](#licentie)

## Beschrijving
**Opdracht:** <br>
- Ontwerp en maak met een team een squad page met Node en data uit de whois.fdnd.nl API. <br>
In Semester II zijn wij bezig geweest met het gebruik maken van Api's. Mijn squadpage biedt een overzicht van alle studenten van mijn squad. Binnen de pagina kan je op een bepaalde student klikken en meer info over de student lezen, 90% van wat je ziet is uit de Api gehaald.

🌐 - Bekijk Mijn Squadpage: https://cute-tan-kit.cyclic.app

## Kenmerken
Ik heb gebruik gemaakt van ``` node.js ``` | ``` Express ``` | ``` Ejs ``` | ``` JavaScript ``` ..
- **Node.js** is een omgeving waarmee ontwikkelaars snelle en schaalbare webtoepassingen kunnen bouwen met behulp van JavaScript, zorgt ook dat de code op serverside loopt inplaats van clientside.
```nodejs
// Maakt een path/route voor de index
app.get("/", (request, response) => {
  console.log(request.query.squad);
  let slug = request.query.squad || "squad-a-2022";
});

// Configureert op welke Poort express zal openen
app.set("port", process.env.PORT || 1000);
app.listen(app.get("port"), function () {
  console.log(`Application started on http://localhost:${app.get("port")}`);
});
```
- **Express** is een framework voor node.js en maakt het eenvoudiger voor ontwikkelaars om webapplicaties te maken met Node.js. 

```node
import express from "express";

// Creeren van een Express "app"
const app = express();

// Configureert hoe ik Express kan gebruiken
app.set("view engine", "ejs");
app.set("views", "./views");
app.use(express.static("public"));

```

- **Ejs** staat voor Embedded JavaScript en zorgt dat functies van Js in het html kunnen geschreven worden.

```js
<!-- Hier komen de members -->
    <% squad.members.forEach(member => { %>

    <article data-id="<%= member.id %>" class="id-card-trigger">
      <!-- Als de gebruiker geen avatar heeft dan komt de placeholder inplaats -->
      <% if (member.avatar) { %>
      <img src="<%= member.avatar %>" alt="De avatar van <%= member.name %>" />
      <% }else{ %>
      <img src="/placeholder.jpg" alt="Placeholder avatar" />
      <% } %>
```

- **Javascript** is een programmeertaal die voornamelijk wordt gebruikt voor het ontwikkelen van webtoepassingen en -sites
```js
// Deze code is voor mijn INFO pop-Up
const allTriggers = document.querySelectorAll('.id-card-trigger')

console.log(allTriggers);

allTriggers.forEach((trigger) => {
    console.log(trigger)
    trigger.addEventListener('click', () => {
        const dataId = trigger.dataset.id
        const card = document.getElementById(dataId)
        // card.classList.add('active')
        card.showModal();

        const close_buttons = document.querySelectorAll(".close");
        close_buttons.forEach((close) => {
            close.addEventListener("click", () => {
                card.close()
            }); 
        })

    })
})
```


## Installatie
Ga eerst naar ``` nodejs.org ``` en installeer de Node ontwikkelomgeving. Voor dit project heb ik gebruik gemaakt van 18.14.0 LTS, download de benodigde bestanden en doorloop het installatieproces. Daarna open Visual Studio Code - terminal en installeer Node doormiddel van het commando ``` npm innit ```, voer hierna ``` npm install ``` uit, om de pagina te open start je een server op door middel van ``` npm start ``` en als de server weer gesloten moet worden kan je ``` control + c / ^c ``` gebruiken op mac.


## Bronnen

https://expressjs.com/en/4x/api.html <br>
https://ejs.co/ <br>
https://www.npmjs.com/package/dotenv <br>
https://whois.fdnd.nl/docs/squad#slug <br>

## Licentie

![GNU GPL V3](https://www.gnu.org/graphics/gplv3-127x51.png)

This work is licensed under [GNU GPLv3](./LICENSE).
