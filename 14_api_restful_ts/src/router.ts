import { Router, Request, Response } from "express";
import { createMovie } from "./controllers/movieControler";

const router = Router();

export default router
  .get("/test", (req: Request, res: Response) => {
    res.status(200);
  })
  .post("/movie", createMovie);
