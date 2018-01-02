const express = require("express")
const cors = require("cors")
const app = express()
const bodyParser = require("body-parser")
const data = require("./Data/data")
const games = data.games
const players = data.players
const baseURL = "https://uno-who-won.herokuapp.com/"

app.use(cors())
app.use(bodyParser.json())

app.get("/scores.html", (request, response) => {
  response.json(players)
})

app.get("/games", (request, response) => {
  response.json(games)
})

app.post("/", (request, response) => {
  response.json('post worked')
})

app.listen(process.env.PORT || 3000, () => {
  console.log('listening on port 3000')
})

// fetch(baseURL)
//   .then(response => response.json())
//   .then(response => {
//     console.log(response)
//   })
//   .catch(err => console.log(err))
