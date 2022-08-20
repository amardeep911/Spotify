const router  = require('express').Router();

const spotifyController = require('../controlller/spotify')

router.get('/singleTrack', spotifyController.getSingleTrack)
router.get('/album', spotifyController.getAlbum)
router.get('/Shows', spotifyController.getShows)
router.get('/listShows', spotifyController.getShows)
router.get('/userTrack', spotifyController.getUsersTrack)
router.get('/userArtist', spotifyController.getUsersArtist)

module.exports = router;