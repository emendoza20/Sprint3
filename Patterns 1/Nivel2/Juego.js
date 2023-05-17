import { Jugador } from "./Jugador.js";

class Juego {
  constructor(nombre) {
    this.nombre=nombre;
    this.jugadores = [];
  }

addJugadores(nombre) {

    let jugador= new Jugador(nombre)
    this.jugadores.push(jugador);// guardo los objetos en el array
     
    


  }
  




}

 
 
