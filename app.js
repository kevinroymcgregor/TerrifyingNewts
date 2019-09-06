const express = require('express');
const authRoutes = require('./routes/auth-routes');
const passportSetup = require('./config/passport-setup');
const apiRoutes = require('./routes/api-routes');
const htmlRoutes = require('./routes/html-routes');
const app = express();
const db = require("./models");

const PORT = process.env.PORT || 8080;

//set up view engine
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'))

//set up routes
app.use('/auth', authRoutes);
app.use('/api', apiRoutes);
app.use('/html', htmlRoutes);

//create home route
app.get('/', (req, res) => {
    res.render('home')
});

db.sequelize.sync().then(function(){
    app.listen(PORT, () => {
        console.log('app is now listening on port' + PORT);
    });
});