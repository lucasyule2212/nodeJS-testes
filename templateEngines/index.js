const express = require("express");
const fs = require("fs");
const path = require("path");
const app = express();
//TEMPLATES ENGINES: MODO DE RENDERIZAR PÁGINAS ESTÁTICAS DIRETAMENTE DO BACKEND DA APLICAÇAO

let users = [
  {
    id: 1,
    name: "LuCas YuLe",
    phone: "(81) 22222-3333",
  },
  {
    id: 2,
    name: "Denya Louisa",
    phone: "(81) 44444-6666",
  },
  { id: 4, name: "Chico e Luna", phone: "(81) 11111-0000" },
];
app.set("views", path.join(__dirname, "views")); //setando o caminho para o EJS pegar as views

app.set("view engine", "ejs"); //setando o tipo de engine

app.get("/", (req, res) => {
  res.render("user", { users }); //método que renderiza a view escolhida, para o usuário
});

app.get("/about", (req, res) => {
    res.render("about"); //método que renderiza a view escolhida, para o usuário
  });

app.listen(3000, () => {
  console.log("SERVER RUNNING ON PORT 3000");
});
