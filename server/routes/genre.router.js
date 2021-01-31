const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')

router.get('/', (req, res) => {
  const query = `SELECT * FROM "genres" ORDER BY "name"`;
  pool.query(query)
    .then(result => {
      res.send(result.rows);
    })
    .catch(error => {
      console.error(error);
      res.sendStatus(500)
    });
});

module.exports = router;