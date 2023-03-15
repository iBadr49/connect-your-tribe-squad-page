import express from "express";

// Dit haalt de Api gegevens op
const url = "https://whois.fdnd.nl/api/v1/squad/";

// Creeren van een Express "app"
const app = express();

// Configureert hoe ik Express kan gebruiken
app.set("view engine", "ejs");
app.set("views", "./views");
app.use(express.static("public"));

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

/**
 * Wraps the fetch api and returns the response body parsed through json
 * @param {*} url the api endpoint to address
 * @returns the json response from the api endpoint
 */
async function fetchJson(url) {
  return await fetch(url)
    .then((response) => response.json())
    .catch((error) => error);
}
