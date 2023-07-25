// 1. - iniciando o projeto
// console.log("Express + TS");

//* 2. Iniciar express
import express from "express";

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  return res.send("Hello Express");
});

app.post("/api/product", (req, res) => {
  console.log(req.body);

  return res.send("Produto adicionado!");
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Aplicação express + TS funcionando na porta ${PORT}`);
});
