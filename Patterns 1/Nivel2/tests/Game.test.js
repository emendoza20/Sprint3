const Player = require("../src/Player");
const Game = require("../src/Game");

describe("Given a Game and two players", () => {
  describe("when i call to add players and get players", () => {
    test("then should return an array with the two players", () => {
      const game = new Game();
      const player1 = new Player("jose");
      const player2 = new Player("eli");

      game.addPlayer(player1);
      game.addPlayer(player2);
      const players = game.getPlayers();

      expect(players).toEqual([player1, player2]);
    });
  });

  describe("when we update players and ask to show score", () => {
    test("then should show points of each player and the player with max points", () => {
      const game = new Game();
      const player1 = new Player("jose");
      const player2 = new Player("eli");
      game.addPlayer(player1);
      game.addPlayer(player2);

      game.updatePlayer(player1, 12);
      game.updatePlayer(player2, 42);
      const score = game.showScore();

      const result = `jose: 12 puntos, eli: 42 puntos, El/La ganador/a es: eli`;
      expect(score).toBe(result);
    });
  });
});
