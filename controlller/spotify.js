const { default: axios } = require('axios')
const express = require('express')
const router = require('../routes/profile-routes')

exports.getSingleTrack = (req, res)=> {
    const config = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer BQAtrNLa6PqlJA-lSyV4dKtQEOXgxVihqpRRReDJMZWLe8vroHREisBcFMeU4we6GB5jkAIYWgzkZeLVlZP4j1KHTlx-J7wxffbRDDJX_DYb5hmCQMcjyL0D2WL0BDbKNVq9HRYOVWWFvtrQDcYIhh3TIPFX5CsbfDdMUh8RC42A8Ynqr7v0tLteHnqvZQowTQ'
        }
      }
    axios.get('https://api.spotify.com/v1/tracks/2JDsi7S0UmtGoyVPTda0ao', config).then(res => console.log(res.data)).catch(err=> console.log(err))
}

exports.getAlbum = (req, res)=> {
    const config = {
        headers: {
            'content-type': 'application/json',
            Authorization: 'Bearer BQDT6Xggb5RkEEayrgX1qy7J7J33DoSyD-CyOj8O9uR4Y67NvczSpJNhAYzxc_sNRizTMcMZ0AA_f9eR1xPGQTLx9sg5K3_xrLJPmGV6ktJcAHoj-oDbcruuQlMtQBM3hxYJCCyrn8hlb_VxoZo6DuoidA1kC2nv2q-c3460zHtkjHhlgUFJ-GRzIP67BbN58Q'
        }
    }
    axios.get('https://api.spotify.com/v1/albums/06l61IvDCVAeThVR8ajgxj', config).then(res => console.log(res.data.artists)).catch(err => console.log(err))
}

exports.getShows = (req, res)=> {
    const config = {
        headers: {
            'content-type': 'application/json',
            Authorization: 'Bearer BQAtrNLa6PqlJA-lSyV4dKtQEOXgxVihqpRRReDJMZWLe8vroHREisBcFMeU4we6GB5jkAIYWgzkZeLVlZP4j1KHTlx-J7wxffbRDDJX_DYb5hmCQMcjyL0D2WL0BDbKNVq9HRYOVWWFvtrQDcYIhh3TIPFX5CsbfDdMUh8RC42A8Ynqr7v0tLteHnqvZQowTQ'
        }
    }
    axios.get('https://api.spotify.com/v1/shows/3ptiw7nOKh5vsMoar79YGc', config).then(res => console.log(res.data)).catch(err => console.log(err))
}


exports.listShows = (req, res)=> {
    const config = {
        headers: {
            'content-type': 'application/json',
            Authorization: 'Bearer BQAtrNLa6PqlJA-lSyV4dKtQEOXgxVihqpRRReDJMZWLe8vroHREisBcFMeU4we6GB5jkAIYWgzkZeLVlZP4j1KHTlx-J7wxffbRDDJX_DYb5hmCQMcjyL0D2WL0BDbKNVq9HRYOVWWFvtrQDcYIhh3TIPFX5CsbfDdMUh8RC42A8Ynqr7v0tLteHnqvZQowTQ'
        }
    }
    axios.get('https://api.spotify.com/v1/me/shows', config).then(res => console.log(res)).catch(err => console.log(err.response))
}

exports.getUsersTrack = (req, res)=> {
    const config = {
        headers: {
            'content-type': 'application/json',
            Authorization: 'Bearer BQDuznQkyyanTwfgcKq4k6C_cj4vahisgAkWw9pJKzQgNgYgL2ubQesvihhpvvTqtBT89HzwwUTt_e-lNBJpEMYqWGGig3vcQIG33cUKLJ8Te7RECfzdFuwHC8Zui_biZk7RQPL19X91o5p1yawty_z_-6M1KP6USO7Ltp1S545Debaa3JxLXu0giZUHN4Ggfw'
        }
    }
    axios.get('https://api.spotify.com/v1/me/tracks', config).then(res => console.log(res)).catch(err => console.log(err.response))
}