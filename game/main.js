import GameGrid from "./objects/grid.js"
import tick from "./objects/tick.js"
import DevUX from "./objects/UX/dev.js"

function setup(){
    let Game = new GameGrid(5,100,document.getElementById("canvas"),false,false,[0,"black"])//set up tiene que devolver una game grid
    return Game
}

function loop(Game,dT){

}

tick(setup,loop)