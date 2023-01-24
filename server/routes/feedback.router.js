const express = require('express');
const router = express.Router();

const pool = require('../modules/pool');

// GET
router.get('/', (req, res) => {
  let sqlQuery = `
  SELECT * from "feedback"
  ORDER BY "date" DESC
  `;
  pool.query(sqlQuery)
  .then((dbRes) => {
      res.send(dbRes);
  })
  .catch((dbErr) => {
      console.log('Error in GET ROUTE', dbErr)
      res.sendStatus(500);
  })
})

// POST
router.post('/', (req, res) => {
  let feeling = req.body.feeling;
  let understanding = req.body.understanding;
  let support = req.body.support;
  let comments = req.body.comments;
  let sqlQuery = `
  INSERT INTO "feedback"
  ("feeling", "understanding", "support", "comments")
  VALUES ($1, $2, $3, $4)
  `;
  let sqlValues = [feeling, understanding, support, comments];
  pool.query(sqlQuery, sqlValues)
  .then((dbRes) => {
      res.sendStatus(201);
  }) 
  .catch((dbErr) => {
      console.log('Error in POST ROUTE', dbErr);
      res.sendStatus(500);
  })
}) 

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
