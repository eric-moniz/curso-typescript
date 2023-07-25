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

// enviando JSON
app.get("/api/json", (req: Request, res: Response) => {
  return res.json({
    name: "Shirt",
    price: 30.0,
    color: "Blue",
    sizes: ["P", "M", "G"],
  });
});

// router parameters
app.get("/api/product/:id", (req: Request, res: Response) => {
  const id = req.params.id;
  console.log(req.params);

  switch (id) {
    case "1":
      return res.json({
        id: 1,
        name: "Boné",
        price: 10,
      });

    case "2":
      return res.json({
        id: 2,
        name: "Bermuda",
        price: 19.99,
      });

    default:
      return res.json({
        erro: "Produto não encontrado!",
      });
  }

  return res.send(`Parâmetros enviados foram: ${req.params}`);
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Aplicação express + TS funcionando na porta ${PORT}`);
});
