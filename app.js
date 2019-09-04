const express = require('express');
const authRoutes = require('./routes/auth-routes');
const passportSetup = require('./config/passport-setup');
const apiRoutes = require('./routes/api-routes');
const app = express();
const db = require("./models");

const PORT = process.env.PORT || 8080;

//set up view engine
app.set('view engine', 'ejs');

//set up routes
app.use('/auth', authRoutes);
app.use('/api/', apiRoutes);

//create home route
app.get('/', (req, res) => {
    res.render('home')
});

db.sequelize.sync().then(function(){
    app.listen(PORT, () => {
        console.log('app is now listening on port' + PORT);
    });
});