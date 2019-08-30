const passport = ('passport');
const GoogleStrategey = ('passport-google-oauth20');

passport.use(
    new GoogleStrategey({
        //options for google strat
    }), () => {
        //passport callback function
    });
