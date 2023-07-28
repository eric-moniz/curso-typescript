require("dotenv").config();

import express from "express";
import config from "config";

const app = express();

// JSON middleware
app.use(express.json());

// DB
import db from "../config/db";

// Routes
import router from "./router";
// prefixo api
app.use("/api", router);

// app port
const port = config.get<number>("port");
app.listen(port, async () => {
  await db();

  console.log(`Aplicação está funcionando na porta: ${port}`);
});