const express = require('express')
const cors = require('cors')
const app = express()
const bodyParser = require('body-parser')
const data = require('./Data/data')
let games = data.games
const players = data.players

app.use(cors())
app.use(bodyParser.json())

app.get('/scores.html', (request, response) => {
	response.json(players)
})

app.get('/games', (request, response) => {
	response.json(games)
})

app.post('/games', (request, response) => {
	games.push(request.body)
	response.json('post worked')
})

app.listen(process.env.PORT || 3000)
