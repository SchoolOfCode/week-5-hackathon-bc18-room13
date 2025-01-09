import express from "express";
import {
  getMovies,
  getMovieById,
  createMovie,
  updateMovieById,
  deleteMovieById,
} from "../controllers/movies.js";

const router = express.Router();

router.get("/", getMovies);
router.get("/:id", getMovieById);
router.post("/", createMovie);
router.patch("/:id", updateMovieById);
router.delete("/:id", deleteMovieById);

export default router;
