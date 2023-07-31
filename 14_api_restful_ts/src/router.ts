import { Router, Request, Response } from "express";
import { createMovie } from "./controllers/movieControler";

// middleware de validação
import { validate } from "./middleware/handleValidation";

const router = Router();

export default router
  .get("/test", (req: Request, res: Response) => {
    res.status(200);
  })
  .post("/movie", validate, createMovie);
