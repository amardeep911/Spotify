const express = require('express')
const authRoutes = require('./routes/auth-routes.js')
const profileRoutes = require('./routes/profile-routes.js')
const spotifyRoutes = require('./routes/spotify-routes')
const app = express();
const cookieSession = require('cookie-session')
const passport = require('passport')
const passportSetup = require('./config/passport-setup')
const mongoose = require('mongoose')
let mongoKey = process.env.MONGOKEY;
let key = process.env.COOKIEKEY;

//views engine setup
app.set('view engine', 'ejs');
app.use(cookieSession({
    maxAge: 24*60*60*1000,
    keys: [key]
}))

//intialize passport
app.use(passport.initialize())
app.use(passport.session())

app.use('/auth', authRoutes)
app.use('/profile',profileRoutes)
app.use('/spotify',spotifyRoutes)
app.use('/', (req, res)=> {
    res.render('home', {user: req.user})

})


//connecting mongodb
mongoose.connect(mongoKey, ()=>{
    console.log('Connected to mongodb')
})
app.listen(8080, (()=> {
    console.log('Listening')
}))