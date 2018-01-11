var games = [
	{
		gameId: 1,
		gameWinnerId: 1
	},
	{
		gameId: 2,
		gameWinnerId: 2
	},
	{
		gameId: 3,
		gameWinnerId: 6
	}
]

var players = [
	{
		playerId: 1,
		playerName: 'Collin',
		wins: 0
	},
	{
		playerId: 2,
		playerName: 'Taylor',
		wins: 0
	},
	{
		playerId: 3,
		playerName: 'Patrick',
		wins: 0
	},
	{
		playerId: 4,
		playerName: 'Julie',
		wins: 0
	},
	{
		playerId: 5,
		playerName: 'Debbie',
		wins: 0
	},
	{
		playerId: 6,
		playerName: 'David',
		wins: 0
	},
	{
		playerId: 7,
		playerName: 'Luke',
		wins: 0
	},
	{
		playerId: 8,
		playerName: 'Joey',
		wins: 0
	}
]

function smashThemUp(players, games) {
	for (var i = 0; i < games.length; i++) {
		for (var j = 0; j < players.length; j++) {
			if (games[i]['gameWinnerId'] === players[j]['playerId']) {
				players[j]['wins']++
			}
		}
	}
	return players
}

module.exports = {
	games,
	players,
	smashThemUp
}
