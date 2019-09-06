const express = require('express');
const authRoutes = require('./routes/auth-routes');
const apiRoutes = require('./routes/api-routes');
const htmlRoutes = require('./routes/html-routes');

const app = express();

// set view engine
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'))

// set up routes
app.use('/auth', authRoutes);
app.use('/api', apiRoutes);
app.use('/html', htmlRoutes);

// create home route
app.get('/', (req, res) => {
    res.render('home');
});

app.listen(8080, () => {
    console.log('app now listening for requests on port 8080');
});