-- Required Base Questions
-- Add the SQL that does what is asked in each question.

-- 1. Select all movies with the 'Adventure' genre? Use the id.

SELECT * FROM "movies"
JOIN "movies_genres" ON "movies".id = "movies_genres".movie_id
JOIN "genres" ON "movies_genres".genre_id = "genres".id
WHERE "genres".name = 'Adventure';

-- 2. Get the count of movies that have each genre.  
--  Make sure you get back all the genres!

SELECT "genres".name AS "genre_name", COUNT("movies_genres".movie_id) AS "movie_count" FROM "movies_genres"
RIGHT JOIN "genres" ON "movies_genres".genre_id = "genres".id
GROUP BY "genres".name
ORDER BY "genres".name ASC;

Example Result:
---------------------------------
| genre_name    | movie_count   |
---------------------------------
| Adventure     | 4             |
---------------------------------
| Comedy        | 1             |
---------------------------------
| Drama         | 5             |
---------------------------------
| Disaster      | 0             |
---------------------------------



-- 3. Add the genre "Superhero" to "Star Wars".

INSERT INTO "movies_genres" ("movie_id", "genre_id")
VALUES ('10', '13');

-- 4. Remove the "Comedy" genre from "Titanic"

DELETE FROM "movies_genres" 
WHERE "movie_id" = 13 AND "genre_id" = 4;

-- Stretch

-- 1. How would you get all movies and all of their genres, but only one row per movie? (For example, on the list page we want to see all the movies and all of the movies' genres that apply)
-- There're a few ways to do this, research ARRAY_AGG or JSON_AGG

SELECT "movies".title AS "movie_title", ARRAY_AGG("genres".name) AS "genres" FROM "movies"
JOIN "movies_genres" ON "movies".id = "movies_genres".movie_id
JOIN "genres" ON "movies_genres".genre_id = "genres".id
GROUP BY "movies".title;

-- 2. Delete the movie "The Martian". It has associated genres data...
-- You may need to check out the ON DELETE CASCADE for the table columns...

ALTER TABLE "movies_genres"
DROP CONSTRAINT "movies_genres_movie_id_fkey",
ADD CONSTRAINT "movies_genres_movie_id_fkey" FOREIGN KEY ("movie_id") REFERENCES "movies"("id") 
ON DELETE CASCADE;

DELETE FROM "movies"
WHERE "title" = 'The Martian';
