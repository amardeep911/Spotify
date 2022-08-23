const { default: axios } = require('axios')
const express = require('express')
const router = require('../routes/profile-routes')
const fs = require('fs')

exports.getSingleTrack = (req, res)=> {
    fs.readFile('./.spoitfy-token', (err, token)=>{
        console.log(token)
        axios.get('https://api.spotify.com/v1/tracks/2JDsi7S0UmtGoyVPTda0ao', {
            headers:{
                'content-type': 'application/json',
                Authorization: `Bearer ${token}`
            }
        }).then(res=> console.log(res)).catch(
            function err(err){
                console.log(err)
                console.log('Error in fetching track')
                console.log(err.response.statusText)
                if(err.response.statusText === 'Unauthorized'){
                    fs.readFile('./refreshToken', "utf-8", (err, token)=>{
                        console.log(token)
                        if(err){
                            console.log(err)
                        }
                        const headers = {
                            headers: {
                                "Content-Type": "application/x-www-form-urlencoded",
                                Authorization: 'Basic M2IzZDI5ZDg4ZjZhNDkyZmEwNTBjMzU1OTQ0Y2FiMzE6MmRkMDY1ZGUxNDFjNDU1ZmJkZTBhOGZkNWVmMjlhNDk='
                            }
                        }
                        axios.post('https://accounts.spotify.com/api/token',null, {
                            params: {
                                grant_type: 'refresh_token',
                                refresh_token: `${token}`
                            },
                            headers: headers.headers
                        }).then((res)=> {
                            console.log(res)
                            const data = res.data.access_token;
                            fs.writeFile('./.spoitfy-token', data.toString(), (err)=> {
                                if(err){
                                    console.log('failed to write acesssToken'+ err)
                                }
                                axios.get('https://api.spotify.com/v1/tracks/2JDsi7S0UmtGoyVPTda0ao', {
                                    headers: {
                                        "Content-type": "application/json",
                                        Authorization : `Bearer $(res.data.access_token)`
                                    }
                                }).then((res)=> console.log(res)).catch((err)=> console.log('from here'+ err))
                            })
                        }).catch((err)=> {
                            console.log('No post was send'+ err)
                        })
                    }
                    )
                }
            }
            )
    })
    // const config = {
    //     headers: {
    //       'Content-Type': 'application/json',
    //       Authorization: 'Bearer BQDtEVtTgvZ7a3MmN1I_SlCNLWqXFtf-YyZws8gOhKQF-1Vi8p6iwkkgdlwRFWr6DcUVG9ryVfSzjGqjNrofk9GRSl8aeEkyRbj5ZXlebM0CWn5vhK_Tt6vmtQWAn7juOjBuNoh_tCbOoGvCflf1gANHxYnoJKThznvonUBS22F8DBFp4g1vNK9dy-HuL7XHlhcIXt2_Kk0RZR-OJBJ9EU5TtCfeK7ZKYIp3ZXbauEGHgLAj7BdWut78NQ'
    //     }
    //   }
    // axios.get('https://api.spotify.com/v1/tracks/2JDsi7S0UmtGoyVPTda0ao', config).then(res => console.log(res.data)).catch(err=> console.log(err))
}

exports.getAlbum = (req, res)=> {
    fs.readFile('./.spoitfy-token', (err, token)=>{
        console.log(token)
        axios.get('https://api.spotify.com/v1/albums/06l61IvDCVAeThVR8ajgxj', {
            headers:{
                'content-type': 'application/json',
                Authorization: `Bearer ${token}`
            }
        }).then(res=> console.log(res.data)).catch(
            function err(err){
                console.log(err)
                console.log('Error in fetching track')
                console.log(err.response.statusText)
                if(err.response.statusText === 'Unauthorized'){
                    fs.readFile('./refreshToken', "utf-8", (err, token)=>{
                        console.log(token)
                        if(err){
                            console.log(err)
                        }
                        const headers = {
                            headers: {
                                "Content-Type": "application/x-www-form-urlencoded",
                                Authorization: 'Basic M2IzZDI5ZDg4ZjZhNDkyZmEwNTBjMzU1OTQ0Y2FiMzE6MmRkMDY1ZGUxNDFjNDU1ZmJkZTBhOGZkNWVmMjlhNDk='
                            }
                        }
                        axios.post('https://accounts.spotify.com/api/token',null, {
                            params: {
                                grant_type: 'refresh_token',
                                refresh_token: `${token}`
                            },
                            headers: headers.headers
                        }).then((res)=> {
                            console.log(res)
                            const data = res.data.access_token;
                            fs.writeFile('./.spoitfy-token', data.toString(), (err)=> {
                                if(err){
                                    console.log('failed to write acesssToken'+ err)
                                }
                                axios.get('https://api.spotify.com/v1/tracks/2JDsi7S0UmtGoyVPTda0ao', {
                                    headers: {
                                        "Content-type": "application/json",
                                        Authorization : `Bearer $(res.data.access_token)`
                                    }
                                }).then((res)=> console.log(res)).catch((err)=> console.log('from here'+ err))
                            })
                        }).catch((err)=> {
                            console.log('No post was send'+ err)
                        })
                    }
                    )
                }
            }
            )
    })
}

exports.getShows = (req, res)=> {
    fs.readFile('./.spoitfy-token', (err, token)=>{
        console.log(token)
        axios.get('https://api.spotify.com/v1/shows/3ptiw7nOKh5vsMoar79YGc', {
            headers:{
                'content-type': 'application/json',
                Authorization: `Bearer ${token}`
            }
        }).then(res=> console.log(res.data.items)).catch(
            function err(err){
                console.log(err)
                console.log('Error in fetching track')
                console.log(err.response.statusText)
                if(err.response.statusText === 'Unauthorized'){
                    fs.readFile('./refreshToken', "utf-8", (err, token)=>{
                        console.log(token)
                        if(err){
                            console.log(err)
                        }
                        const headers = {
                            headers: {
                                "Content-Type": "application/x-www-form-urlencoded",
                                Authorization: 'Basic M2IzZDI5ZDg4ZjZhNDkyZmEwNTBjMzU1OTQ0Y2FiMzE6MmRkMDY1ZGUxNDFjNDU1ZmJkZTBhOGZkNWVmMjlhNDk='
                            }
                        }
                        axios.post('https://accounts.spotify.com/api/token',null, {
                            params: {
                                grant_type: 'refresh_token',
                                refresh_token: `${token}`
                            },
                            headers: headers.headers
                        }).then((res)=> {
                            console.log(res)
                            const data = res.data.access_token;
                            fs.writeFile('./.spoitfy-token', data.toString(), (err)=> {
                                if(err){
                                    console.log('failed to write acesssToken'+ err)
                                }
                                axios.get('https://api.spotify.com/v1/tracks/2JDsi7S0UmtGoyVPTda0ao', {
                                    headers: {
                                        "Content-type": "application/json",
                                        Authorization : `Bearer $(res.data.access_token)`
                                    }
                                }).then((res)=> console.log(res)).catch((err)=> console.log('from here'+ err))
                            })
                        }).catch((err)=> {
                            console.log('No post was send'+ err)
                        })
                    }
                    )
                }
            }
            )
    })
}


exports.listShows = (req, res)=> {
    fs.readFile('./.spoitfy-token', (err, token)=>{
        console.log(token)
        axios.get('https://api.spotify.com/v1/me/shows', {
            headers:{
                'content-type': 'application/json',
                Authorization: `Bearer ${token}`
            }
        }).then(res=> console.log(res.data.items)).catch(
            function err(err){
                console.log(err)
                console.log('Error in fetching track')
                console.log(err.response.statusText)
                if(err.response.statusText === 'Unauthorized'){
                    fs.readFile('./refreshToken', "utf-8", (err, token)=>{
                        console.log(token)
                        if(err){
                            console.log(err)
                        }
                        const headers = {
                            headers: {
                                "Content-Type": "application/x-www-form-urlencoded",
                                Authorization: 'Basic M2IzZDI5ZDg4ZjZhNDkyZmEwNTBjMzU1OTQ0Y2FiMzE6MmRkMDY1ZGUxNDFjNDU1ZmJkZTBhOGZkNWVmMjlhNDk='
                            }
                        }
                        axios.post('https://accounts.spotify.com/api/token',null, {
                            params: {
                                grant_type: 'refresh_token',
                                refresh_token: `${token}`
                            },
                            headers: headers.headers
                        }).then((res)=> {
                            console.log(res)
                            const data = res.data.access_token;
                            fs.writeFile('./.spoitfy-token', data.toString(), (err)=> {
                                if(err){
                                    console.log('failed to write acesssToken'+ err)
                                }
                                axios.get('https://api.spotify.com/v1/tracks/2JDsi7S0UmtGoyVPTda0ao', {
                                    headers: {
                                        "Content-type": "application/json",
                                        Authorization : `Bearer $(res.data.access_token)`
                                    }
                                }).then((res)=> console.log(res)).catch((err)=> console.log('from here'+ err))
                            })
                        }).catch((err)=> {
                            console.log('No post was send'+ err)
                        })
                    }
                    )
                }
            }
            )
    })
}

exports.getUsersTrack = (req, res)=> {
    fs.readFile('./.spoitfy-token', (err, token)=>{
        console.log(token)
        axios.get('https://api.spotify.com/v1/me/tracks', {
            headers:{
                'content-type': 'application/json',
                Authorization: `Bearer ${token}`
            }
        }).then(res=> console.log(res.data.items)).catch(
            function err(err){
                console.log(err)
                console.log('Error in fetching track')
                console.log(err.response.statusText)
                if(err.response.statusText === 'Unauthorized'){
                    fs.readFile('./refreshToken', "utf-8", (err, token)=>{
                        console.log(token)
                        if(err){
                            console.log(err)
                        }
                        const headers = {
                            headers: {
                                "Content-Type": "application/x-www-form-urlencoded",
                                Authorization: 'Basic M2IzZDI5ZDg4ZjZhNDkyZmEwNTBjMzU1OTQ0Y2FiMzE6MmRkMDY1ZGUxNDFjNDU1ZmJkZTBhOGZkNWVmMjlhNDk='
                            }
                        }
                        axios.post('https://accounts.spotify.com/api/token',null, {
                            params: {
                                grant_type: 'refresh_token',
                                refresh_token: `${token}`
                            },
                            headers: headers.headers
                        }).then((res)=> {
                            console.log(res)
                            const data = res.data.access_token;
                            fs.writeFile('./.spoitfy-token', data.toString(), (err)=> {
                                if(err){
                                    console.log('failed to write acesssToken'+ err)
                                }
                                axios.get('https://api.spotify.com/v1/tracks/2JDsi7S0UmtGoyVPTda0ao', {
                                    headers: {
                                        "Content-type": "application/json",
                                        Authorization : `Bearer $(res.data.access_token)`
                                    }
                                }).then((res)=> console.log(res)).catch((err)=> console.log('from here'+ err))
                            })
                        }).catch((err)=> {
                            console.log('No post was send'+ err)
                        })
                    }
                    )
                }
            }
            )
    })
}

exports.getUsersArtist = (req, res)=> {
    fs.readFile('./.spoitfy-token', (err, token)=>{
        console.log(token)
        axios.get('https://api.spotify.com/v1/me/top/artists', {
            headers:{
                'content-type': 'application/json',
                Authorization: `Bearer ${token}`
            }
        }).then(res=> console.log(res.data.items)).catch(
            function err(err){
                console.log(err)
                console.log('Error in fetching track')
                console.log(err.response.statusText)
                if(err.response.statusText === 'Unauthorized'){
                    fs.readFile('./refreshToken', "utf-8", (err, token)=>{
                        console.log(token)
                        if(err){
                            console.log(err)
                        }
                        const headers = {
                            headers: {
                                "Content-Type": "application/x-www-form-urlencoded",
                                Authorization: 'Basic M2IzZDI5ZDg4ZjZhNDkyZmEwNTBjMzU1OTQ0Y2FiMzE6MmRkMDY1ZGUxNDFjNDU1ZmJkZTBhOGZkNWVmMjlhNDk='
                            }
                        }
                        axios.post('https://accounts.spotify.com/api/token',null, {
                            params: {
                                grant_type: 'refresh_token',
                                refresh_token: `${token}`
                            },
                            headers: headers.headers
                        }).then((res)=> {
                            console.log(res)
                            const data = res.data.access_token;
                            fs.writeFile('./.spoitfy-token', data.toString(), (err)=> {
                                if(err){
                                    console.log('failed to write acesssToken'+ err)
                                }
                                axios.get('https://api.spotify.com/v1/tracks/2JDsi7S0UmtGoyVPTda0ao', {
                                    headers: {
                                        "Content-type": "application/json",
                                        Authorization : `Bearer $(res.data.access_token)`
                                    }
                                }).then((res)=> console.log(res)).catch((err)=> console.log('from here'+ err))
                            })
                        }).catch((err)=> {
                            console.log('No post was send'+ err)
                        })
                    }
                    )
                }
            }
            )
    })
}

exports.getRefreshToken = (req,res) => {
    const headers = {
        headers: {
            "content-type": "application/x-www-form-urlencoded",
            Authorization: 'Bearer BQCwt-wXZcoaVhZPbJfAc0sd_X991E_n8f185vcIJD2DJ4yh-Qxm2nzWxMRoC4FtuidxMRzucxJ9f8kQRk19VPKqG8jWrAwpKk5Y1p-36Bbk4X71FtKLJ0so2CDF3o0poPmcRicYN1SQpLi0Zq6IQUTNUVRFVvMrJ8SdG-qisLtyNV7miKItC_mg0xmTFy-lmJswY1I4kpEeErHnoqOJiVC-pejURfxd2J52HmP0IfnV76V-0nJQqex73'
        }
    }
    axios.post('https://accounts.spotify.com/api/token',null, {
        params: {
            grant_type: 'refresh_token',
            refresh_token: `AQAGAl7Hy-7SMUU-VSjRMf4gFFz0h6DN8sJSKpm4YyNGTBnLEhKMeDxJ4mIKIdewuEAAUacIHaUdsxcVRS24YRfzE2EQYQVP-vjrGyjWEB7b_hIeVt-0su-CVyGYZligPRY`
        },
        headers: headers.headers
    }).then((res)=> {
        const data = res.data;
        console.log(data)
    }).catch((err)=> {
        console.log('No post was send'+ err)
    })
}
