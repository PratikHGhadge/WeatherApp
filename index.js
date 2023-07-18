const express = require("express");
const hbs = require("hbs");
const path = require("path");

const app = express();
const port = 8000;
const staticFolder = path.join(__dirname, 'public');

app.use(express.static(staticFolder));
console.log(staticFolder)

// Set the view engine to use Handlebars
app.set("view engine", "hbs");

// Define the path to the views directory
app.set("views", path.join(__dirname, "/templetes/views"));
console.log(path.join(__dirname, "/templetes/views"));

// Configure partials directory (optional)
hbs.registerPartials(path.join(__dirname, "/templetes/partials"));
console.log(path.join(__dirname, "/templetes/partials"));

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/about", (req, res) => {
  res.render("about");
});


app.get("/weather", (req, res) => {
  res.render("weather");
});


app.get("*", (req, res) => {
  res.render("errorpage");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
