import './styles/index.scss';
import Game from './game';

document.addEventListener("DOMContentLoaded", function() {
    const canvasEl = document.getElementById("canvas");
    canvasEl.width = 1000;
    canvasEl.height = 700;

    let game = new Game();

    console.log(game);


    const tapPlayerPile = document.getElementById("playerPile");
    tapPlayerPile.addEventListener("click", game.tapOwnPile());


    const tapMainPile = document.getElementById("mainPile");
    tapMainPile.addEventListener("click", game.tapMainPile());
});
