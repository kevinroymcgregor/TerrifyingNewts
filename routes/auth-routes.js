const router = require('express').Router();
const passport = require('passport');

// auth login
router.get('/login', (req, res) => {
    res.render('login', { user: req.user });
});

// auth logout
router.get('/logout', (req, res) => {
    // handle with passport
    res.send('logging out');
});

// auth with google+
router.get('/google', passport.authenticate('google', {
    scope: ['profile']
}));

// callback route for google to redirect to
router.get('/googe/redirect', passport.authenticate('google'), (req, res) => {
    req.user
    // console.log(user);
    // res.send('you reached the redirect URI');
    // res.sendFile(path.join(__dirname, "../public/Index.html"));
    res.redirect("/auth/login")
});

module.exports = router;