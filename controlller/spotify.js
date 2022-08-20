const { default: axios } = require('axios')
const express = require('express')
const router = require('../routes/profile-routes')

exports.getSingleTrack = (req, res)=> {
    const config = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer BQDtEVtTgvZ7a3MmN1I_SlCNLWqXFtf-YyZws8gOhKQF-1Vi8p6iwkkgdlwRFWr6DcUVG9ryVfSzjGqjNrofk9GRSl8aeEkyRbj5ZXlebM0CWn5vhK_Tt6vmtQWAn7juOjBuNoh_tCbOoGvCflf1gANHxYnoJKThznvonUBS22F8DBFp4g1vNK9dy-HuL7XHlhcIXt2_Kk0RZR-OJBJ9EU5TtCfeK7ZKYIp3ZXbauEGHgLAj7BdWut78NQ'
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
    axios.get('https://api.spotify.com/v1/shows/3ptiw7nOKh5vsMoar79YGc', config).then(res => console.log(res.data.items)).catch(err => console.log(err))
}


exports.listShows = (req, res)=> {
    const config = {
        headers: {
            'content-type': 'application/json',
            Authorization: 'Bearer BQAtrNLa6PqlJA-lSyV4dKtQEOXgxVihqpRRReDJMZWLe8vroHREisBcFMeU4we6GB5jkAIYWgzkZeLVlZP4j1KHTlx-J7wxffbRDDJX_DYb5hmCQMcjyL0D2WL0BDbKNVq9HRYOVWWFvtrQDcYIhh3TIPFX5CsbfDdMUh8RC42A8Ynqr7v0tLteHnqvZQowTQ'
        }
    }
    axios.get('https://api.spotify.com/v1/me/shows', config).then(res => console.log(res.data.items)).catch(err => console.log(err.response))
}

exports.getUsersTrack = (req, res)=> {
    const config = {
        headers: {
            'content-type': 'application/json',
            Authorization: 'Bearer BQDtEVtTgvZ7a3MmN1I_SlCNLWqXFtf-YyZws8gOhKQF-1Vi8p6iwkkgdlwRFWr6DcUVG9ryVfSzjGqjNrofk9GRSl8aeEkyRbj5ZXlebM0CWn5vhK_Tt6vmtQWAn7juOjBuNoh_tCbOoGvCflf1gANHxYnoJKThznvonUBS22F8DBFp4g1vNK9dy-HuL7XHlhcIXt2_Kk0RZR-OJBJ9EU5TtCfeK7ZKYIp3ZXbauEGHgLAj7BdWut78NQ'
        }
    }
    axios.get('https://api.spotify.com/v1/me/tracks', config).then(res => console.log(res.data.items)).catch(err => console.log(err.response))
}

exports.getUsersArtist = (req, res)=> {
    const config = {
        headers: {
            'content-type': 'application/json',
            Authorization: 'Bearer BQDtEVtTgvZ7a3MmN1I_SlCNLWqXFtf-YyZws8gOhKQF-1Vi8p6iwkkgdlwRFWr6DcUVG9ryVfSzjGqjNrofk9GRSl8aeEkyRbj5ZXlebM0CWn5vhK_Tt6vmtQWAn7juOjBuNoh_tCbOoGvCflf1gANHxYnoJKThznvonUBS22F8DBFp4g1vNK9dy-HuL7XHlhcIXt2_Kk0RZR-OJBJ9EU5TtCfeK7ZKYIp3ZXbauEGHgLAj7BdWut78NQ'
        }
    }
    axios.get('https://api.spotify.com/v1/me/top/artists', config).then(res => console.log(res.data.items)).catch(err => console.log(err.response))
}