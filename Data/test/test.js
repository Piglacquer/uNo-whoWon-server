const code = require("../data")
const assert = require("assert")

var players = [{
  playerId: 1,
  playerName: 'Collin',
  wins: 0,
  scoreThisGame: 0
}, {
  playerId: 2,
  playerName: 'Taylor',
  wins: 0,
  scoreThisGame: 0
}, {
  playerId: 3,
  playerName: 'Patrick',
  wins: 0,
  scoreThisGame: 0
}, {
  playerId: 4,
  playerName: 'Julie',
  wins: 0,
  scoreThisGame: 0
}, {
  playerId: 5,
  playerName: 'Debbie',
  wins: 0,
  scoreThisGame: 0
}, {
  playerId: 6,
  playerName: 'David',
  wins: 0,
  scoreThisGame: 0
}, {
  playerId: 7,
  playerName: 'Luke',
  wins: 0,
  scoreThisGame: 0
}, {
  playerId: 8,
  playerName: 'Joey',
  wins: 0,
  scoreThisGame: 0
}]

var games = [{
  gameId: 1,
  gameWinnerId: 1
}, {
  gameId: 2,
  gameWinnerId: 2
}, {
  gameId: 3,
  gameWinnerId: 6
}]

var result = [{
  playerId: 1,
  playerName: 'Collin',
  wins: 1,
  scoreThisGame: 0
}, {
  playerId: 2,
  playerName: 'Taylor',
  wins: 1,
  scoreThisGame: 0
}, {
  playerId: 3,
  playerName: 'Patrick',
  wins: 0,
  scoreThisGame: 0
}, {
  playerId: 4,
  playerName: 'Julie',
  wins: 0,
  scoreThisGame: 0
}, {
  playerId: 5,
  playerName: 'Debbie',
  wins: 0,
  scoreThisGame: 0
}, {
  playerId: 6,
  playerName: 'David',
  wins: 1,
  scoreThisGame: 0
}, {
  playerId: 7,
  playerName: 'Luke',
  wins: 0,
  scoreThisGame: 0
}, {
  playerId: 8,
  playerName: 'Joey',
  wins: 0,
  scoreThisGame: 0
}]

describe("#smashThemUp", () => {
  it("should add to the wins of player based on games", () => {
    assert.deepEqual(code.smashThemUp(players, games), result)
  })
})
