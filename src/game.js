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


        // setInterval(this.delayedFunction, 1000);
        // setInterval(this.comp1Func, 4000);
        // setInterval(this.computerTurn, 1000);
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
        this.players[rand_idx][2].turn = true;
        console.log(this.players[rand_idx][0].name);
    }
    
    startGame() {
        this.resetGame();
        this.display.render(this.mainPile, this.players);
        this.cards.clear(); 
        this.cards.generate_deck();
        this.cards.shuffle();
        this.chooseStartPlayer(); 
        while (this.cards.deck.length > 0) {
            for (let i = 0; i < this.players.length; i ++) {
                this.players[i][1].pile.push(this.cards.deal());
            }
        }
        this.computerTurn();
    }
    

    tapOwnPile() {
        if (this.player.player1[2].turn) {
            let topCard = this.player.player1[1].pile.pop();
            
            if (topCard === undefined) {
                this.gameOver();
            } else {
                this.mainPile.push(topCard);
                this.computer.comp1[2].turn = true;
            }
    
            this.display.render(this.mainPile, this.players);
            this.computerTurn();
        } else {
            return null;
        }
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


    delayedFunctionTake(currentComp) {
        let minTime = 3000;
        let maxTime = 5000;
        let rand_time = Math.floor(Math.random() * (maxTime - minTime) + minTime);

        if (currentComp === "comp1") {
            setTimeout(function () {
                console.log("this is from delayed take function");
                this.computer.comp1[1].pile.unshift(...this.mainPile);
                this.mainPile = [];
                this.display.render(this.mainPile, this.players);
            }.bind(this), rand_time);

        }
    }

    delayedFunctionPush(currentComp) {
        let minTime = 3000;
        let maxTime = 5000;
        let rand_time = Math.floor(Math.random() * (maxTime - minTime) + minTime);

        if (currentComp === "comp1") {
            setTimeout(function () {
                console.log("this is from delayed push function");
                let topCard = this.computer.comp1[1].pile.pop();
                this.mainPile.push(topCard);
                this.display.render(this.mainPile, this.players);

                this.computer.comp1[2].turn = false;
                this.computer.comp2[2].turn = true;
                this.computerTurn();

            }.bind(this), rand_time);
        }
    }

    comp1Func() {
        if (this.computer.comp1[1].pile.length === 0) {
            return null;
        } else if (this.goodSlap()) {
            this.delayedFunctionTake("comp1");
      } else {
          this.delayedFunctionPush("comp1");
      }

      this.display.render(this.mainPile, this.players);
      
    }

    computerTurn() {
        if (this.computer.comp1[2].turn) {
            console.log("computer 1's turn");

            this.comp1Func();

        } else if (this.computer.comp2[2].turn) {

            console.log("computer 2's turn");
            this.computer.comp2[2].turn = false;
            this.computer.comp3[2].turn = true;
            this.computerTurn();

        } else if (this.computer.comp3[2].turn) {

            console.log("computer 3's turn");
            this.computer.comp3[2].turn = false;
            this.player.player1[2].turn = true;
            this.computerTurn();
        } else {
            return null;
        }

    }

}