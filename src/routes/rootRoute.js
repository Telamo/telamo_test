const express = require('express')
const rootRoute = express.Router()

rootRoute.get('/home', (req, res) => {
    res.send('home')
})

module.exports = rootRoute