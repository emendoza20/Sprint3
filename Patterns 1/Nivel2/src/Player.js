class Player {

  constructor(name) {
    this.name = name;
    this.points = 0;
  }

  updatePoints(points) {
    this.points = points;
  }

  showPlayer(){
    return `El nombre es, ${this.name} y tiene ${this.points} puntos`
  }
}

module.exports = Player





