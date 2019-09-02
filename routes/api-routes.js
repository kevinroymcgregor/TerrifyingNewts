const db = require("../models");
const router = require('express').Router();

// Routes
// =============================================================
router.get('/ships', (req, res) => {
  db.Ships.findAll({
     include: [db.Cruises]
  }).then(function (dbResult) {
    res.send(dbResult)
  });
});

router.get('/cruise', (req, res) => {
  db.Cruises.findAll({
     include: [db.Ships, db.Destinations]     
  }).then(function (dbResult) {
    res.send(dbResult)
  });
});
// // GET route for getting all of the posts
// router.get("/api/ships", function (req, res) {
//   // var query = {};
//   // if (req.query.author_id) {
//   //   query.AuthorId = req.query.author_id;
//   // }
//   // Here we add an "include" property to our options in our findAll query
//   // We set the value to an array of the models we want to include in a left outer join
//   // In this case, just db.Author
//   db.Ship.findAll({
//     //   where: query,
//     include: [db.Cruise]
//   }).then(function (dbShips) {
//     res.send('text')
//   });
// });

module.exports = router;