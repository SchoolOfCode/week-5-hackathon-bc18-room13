import { pool } from "../index.js";

async function resetDatabase() {
  try {
    // Drop existing tables if they exist ✅
    await pool.query(`
      DROP TABLE IF EXISTS directors CASCADE;
      DROP TABLE IF EXISTS movies CASCADE;
    `);

    // Create the directors table ✅
    await pool.query(`
      CREATE TABLE directors (
        id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
        first_name VARCHAR(255) NOT NULL,
        last_name VARCHAR(255) NOT NULL
      );
    `);

    // Create the movies table with a foreign key to the directors table ✅
    await pool.query(`
      CREATE TABLE movies (
        id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
        movie_name VARCHAR(255) NOT NULL,
        date_released DATE,
        director_id INT REFERENCES directors(id)
      );
    `);
      
      //Seed the directors table  ✅
    await pool.query(`
        INSERT INTO directors (first_name, last_name)
        VALUES 
          ('Ridley', 'Scott'),
          ('George', 'Miller'),
          ('Francis', 'Lawrence'),
          ('Terry', 'Gilliam'),
          ('Denis', 'Villeneuve'),
          ('Alfonso', 'Cuaron');
      `);
  
      // Seed the movies table ✅
      await pool.query(`
        INSERT INTO movies (movie_name, date_released, director_id)
        VALUES 
          ('Blade Runner', '1982-06-25', 1),
          ('Mad Max: Fury Road', '2015-05-15', 2),
          ('The Hunger Games: Catching Fire', '2013-11-22', 3),
          ('Brazil', '1985-12-18', 4),
          ('Blade Runner 2049', '2017-10-06', 5),
          ('Children of Men', ' 2006-12-25', 6)
      `);
  
      console.log("Database reset successful");
    } catch (error) {
      console.error("Database reset failed: ", error);
    } finally {
      // End the pool
      await pool.end();
    }
  }
  
  await resetDatabase();