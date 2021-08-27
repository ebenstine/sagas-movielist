const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')

router.get('/:id', (req, res) => {
  // Add query to get all genres
  let queryText= `SELECT "movies".id, "movies".title, "movies".poster, "movies".description,
                  string_agg("genres".name, ',') AS genre FROM "movies"
                  JOIN "movies_genres" ON "movies".id = "movies_genres".movie_id
                  JOIN "genres" ON "genres".id = "movies_genres".genre_id
                  WHERE "movies".id = $1
                  GROUP BY 1;`;
                
  pool.query(queryText, [req.params.id])
  .then((result) => {
    console.log("result rows:", result.rows);
    res.send(result.rows)
  })
  .catch((error) => {
    console.log('something went wrong!', error);
    res.sendStatus(500)
  })
});

module.exports = router;