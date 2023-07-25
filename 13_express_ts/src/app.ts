// 1. - iniciando o projeto
// console.log("Express + TS");

//* 2. Iniciar express
import express, { Request, Response } from "express";

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  return res.send("Hello Express");
});

app.post("/api/product", (req, res) => {
  console.log(req.body);

  return res.send("Produto adicionado!");
});

app.all("/api/product/check", (req, res) => {
  switch (req.method) {
    case "POST":
      return res.send("Inseriu algum registro");

    case "GET":
      return res.send("Leu algum registro");

    default:
      return res.send("Não podemos realizar esta operação!");
  }
});

// typescript interfaces do express
app.get("/api/interfaces", (req: Request, res: Response) => {
  return res.send("Utilizando as interfaces do type script");
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Aplicação express + TS funcionando na porta ${PORT}`);
});
