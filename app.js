const express = require('express');
const authRoutes = require('./routes/auth-routes');
require('./routes/api-routes');
const app = express();

const PORT = process.env.PORT || 8080;

//set up view engine
app.set('view engine', 'ejs');

//set up routes
app.use('/auth', authRoutes);

//create home route
app.get('/', (req, res) => {
    res.render('home')
});

app.listen(PORT,() => {
    console.log('app is now listening on port' + PORT);
});
