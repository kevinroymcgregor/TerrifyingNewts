const express = require('express');
const authRoutes = require('./routes/auth-routes');
// const profileRoutes = require('./routes/profile-routes');
const passportSetup = require('./config/passport-setup');
const apiRoutes = require('./routes/api-routes');
const htmlRoutes = require('./routes/html-routes');

const app = express();

// set view engine
app.set('view engine', 'ejs');

// set up routes
app.use('/auth', authRoutes);
// app.use('/profile', profileRoutes);

// create home route
app.get('/', (req, res) => {
    res.render('home');
});

app.listen(8080, () => {
    console.log('app now listening for requests on port 8080');
});