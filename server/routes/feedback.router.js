const express = require('express');
const router = express.Router();

const pool = require('../modules/pool');

// GET
router.get('/', (req, res) => {
  let queryText = 'SELECT * FROM "feedback" ORDER BY "date";';
  pool.query(queryText).then(result => {
    // Sends back the results in an object
    res.send(result.rows);
  })
  .catch(error => {
    console.log('error getting feedback', error);
    res.sendStatus(500);
  });
});

// POST
router.post('/',  (req, res) => {
  let newFeedback = req.body;
  console.log(`Adding feedback`, newFeedback);

  let queryText = `INSERT INTO "feedback" ("feeling", "understanding", "support", "comments")
                   VALUES ($1, $2, $3, $4);`;
  pool.query(queryText, [newFeedback.feelings, newFeedback.understanding, newFeedback.support, newFeedback.comments])
    .then(result => {
      res.sendStatus(201);
    })
    .catch(error => {
      console.log(`Error adding new feedback`, error);
      res.sendStatus(500);
    });
});

// DELETE
router.delete('/:id', (req, res) => {
  const idToDelete = req.params.id;

  const sqlText = `
    DELETE FROM "feedback"
      WHERE "id"=$1;
  `
  const sqlValues = [idToDelete]
  pool.query(sqlText, sqlValues)
    .then((dbRes) => {
      res.sendStatus(200);
    })
    .catch((dbErr) => {
      console.error('DELETE /:id fail:', dbErr);
      res.sendStatus(500); // 👈 don't leave the client hanging!
    })
})

module.exports = router;
