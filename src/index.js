import './styles/index.scss';
import Game from './game';

document.addEventListener("DOMContentLoaded", function() {

    let game = new Game();
    game.startGame();

    
    const tapOwnPile = document.getElementById("playerPile");
    tapOwnPile.addEventListener("click", game.tapOwnPile);
    
    
    const tapMainPile = document.getElementById("mainPile");
    tapMainPile.addEventListener("click", game.tapMainPile);
    
    const restartButton = document.getElementById("restartButton");
    restartButton.addEventListener("click", game.startGame);

    const playerInfo = document.getElementById("playerInfoContainer");
    playerInfo.innerHTML = "You have " + game.players[0][1].pile.length + " cards";

    const comp1Pile = document.getElementById("comp1Pile");
    comp1Pile.innerHTML = game.players[1][1].pile.length + " cards";
   
    const comp2Pile = document.getElementById("comp2Pile");
    comp2Pile.innerHTML = game.players[2][1].pile.length + " cards";
   
    const comp3Pile = document.getElementById("comp3Pile");
    comp3Pile.innerHTML = game.players[3][1].pile.length + " cards";


});
