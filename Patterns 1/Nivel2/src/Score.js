class Score {
  constructor() {
    //if (Score.instance) {
    //return Score.instance;
    //}//
    if (typeof Score.instance === "object") {// creandi
      return Score.instance;
    }
    Score.instance = this;
    this.player = [];
    return this;
  }
  /*maxPoint() {
    let max = 0;
    let winner = null;

    this.player.forEach((player) => {
      if (player.puntos > max) {
        max = player.points;
        winner = player;
      }
    });
    return winner;
  }

  addPlayer(player1,player2){

    this.player.push(player1)
    this.player.push(player2)
  }*/
}
module.exports = Score;
