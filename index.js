const express = require("express");
const app = express();

app.listen(3000, () => {
  console.log("Server ON en puerto 3000");
});

app.use(express.static("./assets"));

const usuarios = ["Jocelyn", "Juan", "Astrid", "Maria", "Ignacia", "Javier", "Brian"];

app.get("/abracadabra/usuarios", (req, res) => {
  res.send(JSON.stringify(usuarios));
});

app.use("/abracadabra/juego/:usuario", (req, res, next) => {
  const { usuario } = req.params;

  if (usuarios.usuarios.find((u) => u === usuario)) {
    next();
  } else {
    res.sendFile(__dirname + "/assets/who.jpeg");
  }
});

app.get("/abracadabra/juego/:usuario", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.use("/abracadabra/conejo/:n", (req, res, next) => {
  const conejo = Math.floor(Math.random() * (5 - 1)) + 1;
  const { n } = req.params;

  if (conejo == n) {
    res.sendFile(__dirname + "/assets/conejito.jpg");
  } else {
    res.sendFile(__dirname + "/assets/voldemort.jpg");
  }
});

app.get("*", (req, res) => {
  res.send("<center><h1>Esta página no existe...</h1></center>");
});
