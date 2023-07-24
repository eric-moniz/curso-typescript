// 1. - iniciando o projeto
// console.log("Express + TS");

//* 2. Iniciar express
import express from "express";

const app = express();

app.get("/", (req, res) => {
  return res.send("Hello Express");
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Aplicação express + TS funcionando na porta ${PORT}`);
});
