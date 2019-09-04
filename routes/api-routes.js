const db = require("../models");
const router = require('express').Router();

// Routes
// =============================================================
router.get('/ships', (req, res) => {
  db.Ships.findAll({
    //  include: [db.Cruises]
  }).then(function (dbResult) {
    res.send(dbResult)
  });
});

router.get('/destinations', (req, res) => {
  db.Destinations.findAll({
  }).then(function (dbResult) {
    res.send(dbResult)
  });
});

router.get('/cruises/:id?', (req, res) => {
  if (req.params.id) {
    db.Cruises.findAll({
      include: [db.Ships,
      { model: db.Destinations, as: 'depart_id_fk' },
      { model: db.Destinations, as: 'dest_id_fk' }],
      where: { id: req.params.id }
    }).then(function (dbResult) {
      res.send(dbResult)
    })
  }
  else {
    db.Cruises.findAll({}).then(function (dbResult) {
      res.send(dbResult)
    })
  }
});

module.exports = router;