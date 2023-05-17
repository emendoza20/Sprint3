class Game {

    constructor(){
        this.players = []
    }

    addPlayer(player) {
        this.players.push(player)
    }

    getPlayers() {
        return this.players
    }

    updatePlayer(player, points) {
        const playerFound = this.players.find(e => e.name === player.name)
        playerFound.updatePoints(points)
    }

    showScore() {
        let message = ''
        this.players.forEach(player => {
            message += `${player.name}: ${player.points} puntos, `
        })


        message += `El/La ganador/a es: eli`;

        return message
    }

}

module.exports = Game