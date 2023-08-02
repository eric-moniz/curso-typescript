import { Router, Request, Response } from "express";
import { createMovie, deleteMovieById, findMovieById, getAllMovies, updateMovie } from "./controllers/movieControler";

// middleware(s) de validação
import { validate } from "./middleware/handleValidation";
import { movieCreateValidation } from "./middleware/movieValidation";

const router = Router();

export default router
  .get("/test", (req: Request, res: Response) => {
    res.status(200);
  })
  .post("/movie", movieCreateValidation(), validate, createMovie)
  .get('/movie/:id', findMovieById)
  .get('/movie', getAllMovies)
  .delete('/movie/:id', deleteMovieById)
  .patch('/movie/:id', movieCreateValidation(), validate, updateMovie)
