const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

router.get('/seller', (req, res) => {
  const queryText = 'SELECT * FROM sellers';
  pool
    .query(queryText)
    .then((response) => {
      res.send(response.rows);
    })
    .catch((err) => {
      console.log('Error completing get sellers query', err);
      res.sendStatus(500);
    });
});

router.post('/seller/skills', (req, res) => {
  const skillName = req.body.skillName;
  const category = req.body.category;
  const price = req.body.price;

  const queryText = `INSERT INTO "skills" (skill_name, category, price) VALUES ($1, $2, $3) RETURNING id;`;
  pool
    .query(queryText, [skillName, category, price])
    .then(() => res.sendStatus(201))
    .catch(() => res.sendStatus(500));
});

router.post('/seller/', (req, res) => {
  const userId = req.body.userId;

  const queryText = `INSERT INTO "sellers" (user_id) VALUES ($1);`;
  pool
    .query(queryText, [userId])
    .then(() => res.sendStatus(201))
    .catch(() => res.sendStatus(500));
});

module.exports = router;
