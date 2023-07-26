// 1. - iniciando o projeto
// console.log("Express + TS");

//* 2. Iniciar express
import express, { NextFunction, Request, Response } from "express";

const app = express();

app.use(express.json());

// middleware para todas as rotas
function showPath(req: Request, res: Response, next: NextFunction) {
  console.log(req.path);
  next();
}
app.use(showPath);

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

// router parameters - rotas simples
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

// router parameters - rotas mais complexas
app.get("/api/product/:id/review/:reviewId", (req: Request, res: Response) => {
  const productId = req.params.id;
  const reviewId = req.params.reviewId;

  res.send(`Acessando a review ${reviewId} do produto ${productId}`);
});

// router handler
function getUser(req: Request, res: Response) {
  return res.send("O usuário foi encontrado!");
}

app.get("/api/user/:id", getUser);

// middlewares
function checkUser(req: Request, res: Response, next: NextFunction) {
  if (req.params.id === "1") {
    console.log("Pode seguir");
    next();
  } else {
    console.log("Acesso restrito!");
    res.sendStatus(401).json({
      msg: "Não autorizado",
    });
  }
}

app.get("/api/user/:id/access", checkUser, (req: Request, res: Response) => {
  res.json({
    msg: "Bem vindo a área administrativa!",
  });
});

// req e res com generics
app.get(
  "/api/user/:id/details/:name",
  (
    req: Request<{ id: string; name: string }>,
    res: Response<{ status: boolean }>
  ) => {
    console.log(`ID: ${req.params.id}`);
    console.log(`Name: ${req.params.name}`);

    return res.json({ status: true });
  }
);

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Aplicação express + TS funcionando na porta ${PORT}`);
});
