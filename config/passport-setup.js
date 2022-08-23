const passport = require('passport')
const fs = require('fs');
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
        fs.writeFile('./.spoitfy-token', acessToken, (err)=> {
          if (err) throw new Error('Failed to write AcessToken'+ err)
        })
        fs.writeFile('./refreshToken', refreshToken, (err)=> {
          if (err) throw new Error('Failed to write RefreshToken'+ err)
        })
        
        
        console.log(acessToken)
        console.log(refreshToken)
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