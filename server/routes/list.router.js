const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

// TODO - Add routes here...

//GET all records from table...
router.get('/', (req, res) => {
    // Get all the items from the shopping-list table
    const sqlText = `SELECT "id", "name", "quantity", "unit" FROM "shopping-list"`;
    pool.query(sqlText)
        .then((result) => {
            res.send(result.rows);
        })
        .catch((error) => {
            console.log(`Error making database query ${sqlText}`, error);
            res.sendStatus(500);
        });
});

// POST new record into the shopping-list table
router.post('/', (req, res) => {
   
    const sqlText = `INSERT INTO "shopping-list" 
                        ( "name", "quantity", "unit" ) 
                    VALUES 
                        ( $1, $2, $3 )
                    `;
    pool.query(sqlText, [ req.body.name, req.body.quantity, req.body.unit ])
        .then((result) => {
            res.sendStatus(201);
        })
        .catch((error) => {
            console.log(`Error making database query ${sqlText}`, error);
            res.sendStatus(500);
        });
});

// DELETE item from shopping-list
router.delete('/:id',  (req, res) => {
  
    console.log(`Deleting record with id:`, req.params.id);
  
    let queryText = `DELETE FROM "shopping-list" WHERE "id" = $1`;
    let params = [ req.params.id ];
    pool.query(queryText, params)
      .then(result => {
        res.sendStatus(200);
      })
      .catch(error => {
        console.log(`Error DELETING`, error);
        res.sendStatus(500);
      });
  });

// DELETE all * nukes table *
router.delete('/all',  (req, res) => {
  
    console.log(`Deleting all records`);
  
    let queryText = `DELETE FROM "shopping-list"`;
    pool.query(queryText, params)
      .then(result => {
        res.sendStatus(200);
      })
      .catch(error => {
        console.log(`Error DELETING`, error);
        res.sendStatus(500);
      });
  });

// POST new record into the shopping-list table
router.put('/:id', (req, res) => {
   
    const sqlText = `UPDATE "shopping-list" 
                    SET "bought" = true 
                    WHERE "id" = $1
                    `;
    pool.query(sqlText, [ req.params.id ])
        .then((result) => {
            res.sendStatus(201);
        })
        .catch((error) => {
            console.log(`Error making database query ${sqlText}`, error);
            res.sendStatus(500);
        });
});

router.put('/reset-all', (req, res) => {
   
    const sqlText = `UPDATE "shopping-list" 
                    SET "bought" = false 
                    `;
    pool.query(sqlText)
        .then((result) => {
            res.sendStatus(201);
        })
        .catch((error) => {
            console.log(`Error making database query ${sqlText}`, error);
            res.sendStatus(500);
        });
});

module.exports = router;