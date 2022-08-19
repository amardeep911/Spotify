const passport = require('passport')

const router = require('express').Router();

router.get('/login' ,(req,res)=> {
    res.render('login')
})

router.get('/logout',(req,res)=> {
    req.logout();
    res.redirect('/')
} )
router.get(
    '/spotify',
    passport.authenticate('spotify')
  );

router.get('/spotify/redirect',passport.authenticate('spotify', {
    scope: ['user-read-email', 'user-read-private','user-read-recently-played','user-top-read','user-follow-read','user-library-read','playlist-read-private','user-follow-read'],
    showDialog:true
}) ,(req,res)=>{
    res.redirect('/profile')

}
)

router.get('/', (req, res)=> {
    
    res.render('home')
})

module.exports = router;