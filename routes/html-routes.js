const router = require('express').Router();
const path = require("path");

router.get('/home', (req, res) => {
    res.sendFile(path.join(__dirname, "../public/Index.html"));
});

router.get('/reservations', (req, res) => {
    res.sendFile(path.join(__dirname, "../public/Reservations.html"));
});

module.exports = router;