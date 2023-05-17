const Player = require("../src/Player")

describe('Given a Player with updated points', () => {
    describe('when show player is requested ', () => {
        test('then should show a message with name and the points updated', () => {

            // given - arrange
            const player = new Player('jose')
            player.updatePoints(12)
    
            // when - act
            const message = player.showPlayer()

            // then - assertion
            expect(message).toBe('El nombre es, jose y tiene 12 puntos')
        })
    })
})