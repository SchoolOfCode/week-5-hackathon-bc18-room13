import {
  fetchAllMovies,
  fetchMovieById,
  insertMovie,
  modifyMovieById,
  removeMovieById,
} from "../models/movies.js";

export async function getMovies(req, res) {
  try {
    const movies = await fetchAllMovies();
    res.status(200).json({ status: "success", data: movies });
  } catch (error) {
    res.status(500).json({ status: "error", message: error.message });
  }
}

export async function getMovieById(req, res) {
  try {
    const id = req.params.id;
    const movie = await fetchMovieById(id);
    if (!movie) {
      return res
        .status(404)
        .json({ status: "fail", message: "Movie not found" });
    }
    res.status(200).json({ status: "success", data: movie });
  } catch (error) {
    res.status(500).json({ status: "error", message: error.message });
  }
}

export async function createMovie(req, res) {
  try {
    const { movie_name, director_id, date_released } = req.body;
    if (!movie_name || !director_id || !date_released) {
      return res
        .status(400)
        .json({ status: "fail", message: "Missing required fields" });
    }
    const movie = await insertMovie(movie_name, director_id, date_released);
    res.status(201).json({ status: "success", data: movie });
  } catch (error) {
    res.status(500).json({ status: "error", message: error.message });
  }
}

export async function updateMovieById(req, res) {
  try {
    const id = req.params.id;
    const { movie_name, director_id, date_released } = req.body;
    if (!movie_name || !director_id || !date_released) {
      return res
        .status(400)
        .json({ status: "fail", message: "Missing required fields" });
    }
    const movie = await modifyMovieById(
      id,
      movie_name,
      director_id,
      date_released
    );
    if (!movie) {
      return res
        .status(404)
        .json({ status: "fail", message: "Movie not found" });
    }
    res.status(200).json({ status: "success", data: movie });
  } catch (error) {
    res.status(500).json({ status: "error", message: error.message });
  }
}

export async function deleteMovieById(req, res) {
  try {
    const id = req.params.id;
    const movie = await removeMovieById(id);
    if (!movie) {
      return res
        .status(404)
        .json({ status: "fail", message: "Movie not found" });
    }
    res.status(204).send(); // 204 No Content
  } catch (error) {
    res.status(500).json({ status: "error", message: error.message });
  }
}
