const express = require("express")
const cors = require("cors")
const app = express()
const bodyParser = require("body-parser")
const data = require("./Data/data")
const games = data.games
const players = data.players

app.use(cors())
app.use(bodyParser.json())

app.get("/", (request, response) => {
  response.json(players)
})

app.post("/", (request, response) => {
  response.json('post worked')
})

app.listen(process.env.PORT || 3000, () => {
  console.log('listening on port 3000')
})
