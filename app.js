const express = require('express');
const authRoutes = require('./routes/auth-routes');
// const profileRoutes = require('./routes/profile-routes');
const passportSetup = require('./config/passport-setup');
const apiRoutes = require('./routes/api-routes');
const htmlRoutes = require('./routes/html-routes');

const PORT = process.env.PORT || 8080;

const app = express();

// set view engine
app.set('view engine', 'ejs');

// set up routes
app.use('/auth', authRoutes);
app.use('/api', apiRoutes);
app.use('/html', htmlRoutes);
app.use(express.static('public'));
// app.use('/profile', profileRoutes);


// create home route
app.get('/', (req, res) => {
    res.render('home');
});

app.listen(PORT, () => {
    console.log('app now listening for requests on port 8080');
});