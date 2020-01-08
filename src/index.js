import './styles/index.scss';
import Game from './game';

document.addEventListener("DOMContentLoaded", function() {
    const canvasEl = document.getElementById("canvas");
    canvasEl.width = 1000;
    canvasEl.height = 700;

    let game = new Game();
    game.startGame();

    
    const tapOwnPile = document.getElementById("playerPile");
    tapOwnPile.innerHTML = "Your pile : " + game.players[0][1].pile.length + " cards";
    
    tapOwnPile.addEventListener("click", game.tapOwnPile);


    const tapMainPile = document.getElementById("mainPile");
    tapMainPile.addEventListener("click", game.tapMainPile);

    
    const comp1Pile = document.getElementById("comp1Pile");
    comp1Pile.innerHTML = "Computer 1's pile : " + game.players[1][1].pile.length + " cards";
    
    const comp2Pile = document.getElementById("comp2Pile");
    comp2Pile.innerHTML = "Computer 2's pile : " + game.players[2][1].pile.length + " cards";
    
    const comp3Pile = document.getElementById("comp3Pile");
    comp3Pile.innerHTML = "Computer 3's pile : " + game.players[3][1].pile.length + " cards";
   
    console.log(game.mainPile);
});
