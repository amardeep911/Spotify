const passport = require('passport')
require("dotenv").config();
const User = require('../model/user-model')
let clientId = process.env.CLIENTID;
let clientSecret = process.env.CLIENTSECRET;
console.log(clientId)
console.log(clientSecret)
const SpotifyStrategy = require('passport-spotify').Strategy;

passport.serializeUser(( user, done)=>{
  done(null,user.id)
})
passport.deserializeUser(( id, done)=>{
  User.findById(id).then((user)=> {
      done(null,user);
  })
  
})


passport.use(
    new SpotifyStrategy(
      {
        callbackURL: '/auth/spotify/redirect',
        clientID: clientId,
        clientSecret: clientSecret
      },(acessToken, refreshToken, profile,done)=> {
        console.log(acessToken)
        User.findOne({
          spotifyId: profile.id
        }).then((currentUser)=> {
          if(currentUser){
           console.log('user is'+ currentUser)
           done(null, currentUser)
          }
          else{
            new User({
              username: profile.displayName,
              spotifyId: profile.id
            }).then((newUser)=> {
              console.log('newUser is' + newUser)
              done(null, newUser)
            })
          }
        })
      })
)