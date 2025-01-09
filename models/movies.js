import { pool } from "../db/index.js";

//Get All ✅
export async function fetchAllMovies() {
  const result = await pool.query("SELECT * FROM movies");
  return result.rows;
}

//Get By Id ✅
export async function fetchMovieById(id) {
  const result = await pool.query("SELECT * FROM movies WHERE id = $1", [id]);
  return result.rows[0] || null;
}

//POST ✅
export async function insertMovie(movie_name, director_id, date_released) {
  const result = await pool.query(
    "INSERT INTO movies (movie_name, director_id, date_released) VALUES ($1, $2, $3) RETURNING *",
    [movie_name, director_id, date_released]
  );
  return result.rows[0];
}

//PATCH ✅
export async function modifyMovieById(id, movie_name, director_id, date_released) {
  const result = await pool.query(
    "UPDATE movies SET movie_name = $1, director_id = $2, date_released = $3 WHERE id = $4 RETURNING *",
    [movie_name, director_id, date_released, id]
  );
  return result.rows[0] || null;
}

//DELETE ✅
export async function removeMovieById(id) {
  const result = await pool.query(
    "DELETE FROM movies WHERE id = $1 RETURNING *",
    [id]
  );
  return result.rows[0] || null;
}