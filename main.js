import Game from "./Game.js";
import GameView from "./GameView.js"

// calling the Game and GameView module  
let game = new Game();
let gameView = new GameView(document.getElementById("app"));
// initating the Game and Gameview when we initiating the GameView by using we call the app in the html file

// we say onTileClick is when we touch the 9 box that are put the x and o put
gameView.onTileClick = function (i){
    game.makeMove(i)
    gameView.update(game);
}

// we say onRestartClick is when we touch the restart button this is the same with the above button
gameView.onRestartClick = function(){
    game = new Game();
    gameView.update(game)
}

gameView.update(game)