import Computer from './computer';
import Player from './player';
import Cards from './cards';
import Display from './display';

export default class Game {
    constructor() {

        this.cards = new Cards();
        this.computer = new Computer();
        this.player = new Player();
        this.display = new Display();
        this.players = [this.player.player1, this.computer.comp1, this.computer.comp2, this.computer.comp3];
        this.mainPile = [];
        this.tapMainPile = this.tapMainPile.bind(this);
        this.tapOwnPile = this.tapOwnPile.bind(this);
        this.resetGame = this.resetGame.bind(this);


        this.comp1Func = this.comp1Func.bind(this);
        this.computerTurn = this.computerTurn.bind(this);

        setInterval(this.comp1Func, 4000);
        setInterval(this.computerTurn, 1000);
    }
    
    resetGame() {
        this.cards = new Cards();
        this.computer = new Computer();
        this.player = new Player();
        this.players = [this.player.player1, this.computer.comp1, this.computer.comp2, this.computer.comp3];
        this.mainPile = [];
    }


    chooseStartPlayer() {
        let rand_idx = Math.floor(Math.random() * this.players.length);
        return this.players[rand_idx][0].name;
    }
    
    startGame() {
        console.log(this.chooseStartPlayer()); 
        this.resetGame();
        this.display.render(this.mainPile, this.players);
        this.cards.clear(); 
        this.cards.generate_deck();
        this.cards.shuffle();
        while (this.cards.deck.length > 0) {
            for (let i = 0; i < this.players.length; i ++) {
                this.players[i][1].pile.push(this.cards.deal());
            }
        }
    }
    

    tapOwnPile() {
        let topCard = this.player.player1[1].pile.pop();
        
        if (topCard === undefined) {
            this.gameOver();
        } else {
            this.mainPile.push(topCard);
        }

        this.display.render(this.mainPile, this.players);
    }


    double() {
        if (
            this.mainPile.slice(-2)[1] === undefined
        ) {
            return false;
        } else if (
            this.mainPile.slice(-2)[0].value === this.mainPile.slice(-2)[1].value
        ) {
            return true;
        } else {
            return false;
        }
    }

    sandwich() {
        if (
            this.mainPile.slice(-3)[2] === undefined
        ) {
            return false;
        } else if (
            this.mainPile.slice(-3)[0].value === this.mainPile.slice(-3)[2].value
        ) {
            return true;
        } else {
            return false;
        }

    }

    goodSlap() {
        if (this.double() || this.sandwich()) {
            return true;
        } else {
            return false;
        }
    }

    gameOver() {
        alert("You ran out of cards, would you like to start another game?");
        this.startGame();
    }

    tapMainPile() {
        if (this.goodSlap()) {
            this.player.player1[1].pile.unshift(...this.mainPile);
            this.mainPile = [];
        } else if (!this.goodSlap() && this.player.player1[1].pile.length === 0 ){
            this.gameOver();
        } else {
            this.mainPile.unshift(this.player.player1[1].pile.pop());
        }

        this.display.render(this.mainPile, this.players);
    }

    comp1Func() {
        if (this.computer.comp1[1].pile.length === 0) {
            return null;
        } else if (this.goodSlap()) {
          this.computer.comp1[1].pile.unshift(...this.mainPile);
          this.mainPile = [];
      }

      this.display.render(this.mainPile, this.players);
    }

    computerTurn() {
        return null;
    }

}