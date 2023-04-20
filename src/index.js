
const express = require('express')
const port = 8000
const rootRoute = require('./routes/rootroute')
const app = express()

app.use(express.json())
app.listen(port, () => {
    console.log('App listening on port: ' + port)
})

app.use('/api', rootRoute)