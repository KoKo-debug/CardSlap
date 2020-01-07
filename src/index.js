import './styles/index.scss';
import Game from './game';

document.addEventListener("DOMContentLoaded", function() {
    const canvasEl = document.getElementById("canvas");
    canvasEl.width = 1000;
    canvasEl.height = 700;

    let game = new Game();
    game.startGame();
    console.log(game);

    
    const tapOwnPile = document.getElementById("playerPile");
    tapOwnPile.innerHTML = "Your pile " + game.players[0][1].pile.length;
    
    tapOwnPile.addEventListener("click", game.tapOwnPile);


    const tapMainPile = document.getElementById("mainPile");
    tapMainPile.addEventListener("click", game.tapMainPile);

    
    const comp1Pile = document.getElementById("comp1Pile");
    comp1Pile.innerHTML = "Computer 1's pile " + game.players[1][1].pile.length;
   
    console.log(game.mainPile);
});
