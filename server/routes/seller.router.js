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
  console.log(req.body);
  const skillName = req.body.skillName;
  const category = req.body.category;
  const price = req.body.price;
  const userId = req.body.userId;

  const queryText = `INSERT INTO "skills" (skill_name, category, price, user_id) VALUES ($1, $2, $3, $4) RETURNING id;`;
  pool
    .query(queryText, [skillName, category, price, userId])
    .then(() => res.sendStatus(201))
    .catch(() => res.sendStatus(500));
});

router.get('/seller/skills/:id', (req, res) => {
  const userId = req.params.userId;
  console.log('req.params', userId);
  const queryText = 'SELECT * FROM skills WHERE user_id = $1;';
  pool
    .query(queryText, [userId])
    .then((response) => {
      res.send(response.rows);
      console.log(response.rows);
    })
    .catch((err) => {
      console.log('Error completing get sellers query', err);
      res.sendStatus(500);
    });
});

// router.post('/seller/', (req, res) => {
//   const userId = req.body.userId;

//   const queryText = `INSERT INTO "sellers" (user_id) VALUES ($1);`;
//   pool
//     .query(queryText, [userId])
//     .then(() => res.sendStatus(201))
//     .catch(() => res.sendStatus(500));
// });

module.exports = router;
