import Computer from './computer';
import Player from './player';
import Cards from './cards';


export default class Game {
    constructor() {

        this.cards = new Cards();
        this.computer = new Computer();
        this.player = new Player();
        this.players = [this.player.player1, this.computer.comp1, this.computer.comp2, this.computer.comp3];
        this.mainPile = [];
        this.startGame();
    }
    
    chooseStartPlayer() {
        let rand_idx = Math.floor(Math.random() * this.players.length);
        return this.players[rand_idx][0].name;
    }
    
    startGame() {
        console.log(this.chooseStartPlayer()); 
        this.cards.clear(); 
        this.cards.generate_deck();
        this.cards.shuffle();
        while (this.cards.deck.length > 0) {
            for (let i = 0; i < this.players.length; i ++) {
                this.players[i][1].pile.push(this.cards.deal());
            }
        }
        console.log(this.cards.deck);
        console.log(this.players);
    }
    

    tapOwnPile() {
        let topCard = this.player.player1[1].pile.pop();
        this.mainPile.push(topCard);
    }

    double() {
        if (
            this.mainPile[-1] === undefined || 
            this.mainPile[-2] === undefined
        ) {
            return false;
        } else if (
            this.mainPile[-1].value === this.mainPile[-2].value
        ) {
            return true;
        } else {
            return false;
        }
    }

    sandwich() {
        if (
            this.mainPile[-1] === undefined ||
            this.mainPile[-3] === undefined
        ) {
            return false;
        } else if (
            this.mainPile[-1].value === this.mainPile[-3].value
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
        alert("You lose buddy");
        this.startGame();
    }

    tapMainPile() {
        console.log(this.player.player1.pile);
        if (this.goodSlap()) {
            this.player.player1.pile = this.mainPile.concat(this.player.player1[1].pile);
            this.mainPile = [];
        } else if (!this.goodSlap() && this.player.player1.pile.empty()){
            this.gameOver();
        } else {
            this.mainPile.unshift(this.player.player1.pile.pop());
        }
    }











}