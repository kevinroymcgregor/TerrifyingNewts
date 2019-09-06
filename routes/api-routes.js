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

router.get('/reservations', (req, res) => {
  db.Reservations.findAll({
  }).then(function (dbResult) {
    res.send(dbResult)
  });
});


router.post('/reservations', (req, res) => {
  const cruise = req.body.cruise;
  const passenger = req.body.passenger;
  db.Reservations.create({
    cruise_id: cruise,
    passenger_id: passenger
  })
    .then(function (dbRes) {
      res.json(dbRes);
    });
  // console.log(cruise);
  // console.log(passenger);
  // res.json(req.body)
});

module.exports = router;