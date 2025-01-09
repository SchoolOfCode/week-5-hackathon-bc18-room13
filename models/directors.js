import { pool } from "../db/index.js";

export async function fetchAllDirectors() {
  const result = await pool.query("SELECT * FROM directors");
  return result.rows;
}

export async function fetchDirectorById(id) {
  const result = await pool.query("SELECT * FROM directors WHERE id = $1", [id]);
  return result.rows[0] || null;
}

export async function insertDirector(first_name, last_name) {
  const result = await pool.query(
    "INSERT INTO directors (first_name, last_name) VALUES ($1, $2) RETURNING *",
    [first_name, last_name]
  );
  return result.rows[0];
}

export async function modifyDirectorById(id, first_name, last_name) {
  const result = await pool.query(
    "UPDATE directors SET first_name = $1, last_name = $2 WHERE id = $3 RETURNING *",
    [first_name, last_name, id]
  );
  return result.rows[0] || null;
}

export async function removeDirectorById(id) {
  const result = await pool.query(
    "DELETE FROM directors WHERE id = $1 RETURNING *",
    [id]
  );
  return result.rows[0] || null;
}