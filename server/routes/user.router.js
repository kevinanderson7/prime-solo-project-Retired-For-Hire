const express = require('express');
const {
  rejectUnauthenticated,
} = require('../modules/authentication-middleware');
const encryptLib = require('../modules/encryption');
const pool = require('../modules/pool');
const userStrategy = require('../strategies/user.strategy');

const router = express.Router();

// Handles Ajax request for user information if user is authenticated
router.get('/', rejectUnauthenticated, (req, res) => {
  // Send back user object from the session (previously queried from the database)
  res.send(req.user);
});

// router.get('/update/:id', rejectUnauthenticated, (req, res) => {
//   const userId = req.params.id;
//   console.log('req.params', userId);
//   const queryText = `SELECT * FROM user WHERE id = $1;`;
//   pool
//     .query(queryText, [userId])
//     .then((response) => {
//       res.send(response.rows);
//     })
//     .catch((err) => {
//       console.log('Error completing getUser query', err);
//       res.sendStatus(500);
//     });
// });

// Handles POST request with new user data
// The only thing different from this and every other post we've seen
// is that the password gets encrypted before being inserted
router.post('/register', (req, res, next) => {
  const username = req.body.username;
  const password = encryptLib.encryptPassword(req.body.password);
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const email = req.body.email;
  const avatar = req.body.avatar;

  const queryText =
    'INSERT INTO "user" (username, password, first_name, last_name, email_address, avatar) VALUES ($1, $2, $3, $4, $5, $6) RETURNING id';
  pool
    .query(queryText, [username, password, firstName, lastName, email, avatar])
    .then(() => res.sendStatus(201))
    .catch(() => res.sendStatus(500));
});

// Handles login form authenticate/login POST
// userStrategy.authenticate('local') is middleware that we run on this route
// this middleware will run our POST if successful
// this middleware will send a 404 if not successful
router.post('/login', userStrategy.authenticate('local'), (req, res) => {
  res.sendStatus(200);
});

// clear all server session information about this user
router.post('/logout', (req, res) => {
  // Use passport's built-in method to log out the user
  req.logout();
  res.sendStatus(200);
});

// router.post('/seller/skills', (req, res) => {
//   const skillName = req.body.skillName;
//   const category = req.body.category;
//   const price = req.body.price;

//   const queryText = `INSERT INTO "skills" (skill_name, category, price) VALUES ($1, $2, $3) RETURNING id;`;
//   pool
//     .query(queryText, [skillName, category, price])
//     .then(() => res.sendStatus(201))
//     .catch(() => res.sendStatus(500));
// });

// router.post('/seller/', (req, res) => {
//   const userId = req.body.userId;

//   const queryText = `INSERT INTO "sellers" (user_id) VALUES ($1);`;
//   pool
//     .query(queryText, [userId])
//     .then(() => res.sendStatus(201))
//     .catch(() => res.sendStatus(500));
// });
router.put('/profile/:id', (req, res) => {
  const userData = req.body;
  console.log(userData);
  const userId = req.params.id;
  const queryText = `UPDATE "user" SET first_name = $1, last_name = $2, email_address = $3
   WHERE id = $4;`;

  pool
    .query(queryText, [
      userData.firstName,
      userData.lastName,
      userData.email,
      userId,
    ])
    .then((response) => {
      res.send(response.rows);
      res.status(200);
    })
    .catch((err) => {
      console.log('PUT error:', err);
      res.status(500);
      res.send(err);
    });
});

module.exports = router;
