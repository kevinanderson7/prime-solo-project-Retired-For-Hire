const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

router.get('/', (req, res) => {});

router.put('/avatar/:id', (req, res) => {
  console.log(req.body.imageUrl);
  const imageUrl = req.body.imageUrl;
  const imageId = req.params.id;
  const queryText = `UPDATE "user" SET avatar = $1 
  WHERE id = $2;`;

  pool
    .query(queryText, [imageUrl, imageId])

    .then((response) => {
      res.send(response.rows);
      res.status(200);
    })
    .catch((err) => {
      console.log('PUT avatar error:', err);
      res.status(500);
      res.send(err);
    });
});

module.exports = router;
