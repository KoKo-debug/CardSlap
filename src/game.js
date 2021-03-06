import Computer from './computer';
import Player from './player';
import Cards from './cards';
import { removehands, loadTopCards, cardCount } from './display';
import { double, sandwich } from './rules';
import { clearTimeout } from './clearTimeout';

export default class Game {
    constructor() {

        this.cards = new Cards();
        this.computer = new Computer();
        this.player = new Player();
        this.players = [this.player.player1, this.computer.comp1, this.computer.comp2, this.computer.comp3];
        this.mainPile = [];
        this.tapMainPile = this.tapMainPile.bind(this);
        this.tapOwnPile = this.tapOwnPile.bind(this);
        this.resetGame = this.resetGame.bind(this);
        this.startGame = this.startGame.bind(this);
        
        this.comp1Func = this.comp1Func.bind(this);
        this.comp2Func = this.comp2Func.bind(this);
        this.comp3Func = this.comp3Func.bind(this);

        this.computerTurn = this.computerTurn.bind(this);
        
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
    }
    
    startGame() {
        this.resetGame();
        this.cards.clear(); 
        this.cards.generate_deck();
        this.cards.shuffle();
        this.chooseStartPlayer(); 
        while (this.cards.deck.length > 0) {
            for (let i = 0; i < this.players.length; i ++) {
                this.players[i][1].pile.push(this.cards.deal());
            }
        }
        this.removeMainPile();
        clearTimeout();
        loadTopCards(this.players);
        removehands();
        cardCount(this.players);
        this.computerTurn();
    }

    tapOwnPile() {
        if (this.player.player1[2].turn) {
            let topCard = this.player.player1[1].pile.pop();
            
            if (topCard === undefined) {
                this.gameOver();
            } else {
                this.PushAnimation("player");
                loadTopCards(this.players,[0]);
                clearTimeout();
                this.mainPile.push(topCard);
                this.computer.comp1[2].turn = true;

                cardCount(this.players);

                const playerContainer = document.getElementsByClassName("player-container");
                playerContainer[0].style.boxShadow = "none";
            }
    

            this.player.player1[2].turn = false;
            this.computer.comp1[2].turn = true;
            this.computerTurn();
        } else {
            return null;
        }
    }


    goodSlap() {
        if (double(this.mainPile) || sandwich(this.mainPile)) {
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

            const hand = document.getElementById("playerhand");
            hand.style.visibility = "visible";

            setTimeout(function() {
                this.player.player1[1].pile.unshift(...this.mainPile);
                this.mainPile = [];
    
                this.computer.comp1[2].turn = false;
                this.computer.comp2[2].turn = false;
                this.computer.comp3[2].turn = false;
                this.player.player1[2].turn = true;
    
                this.removeMainPile();
                clearTimeout();
                removehands();
                this.computerTurn();
                
                cardCount(this.players);

            }.bind(this),2000);


        } else if (!this.goodSlap() && this.player.player1[1].pile.length === 0 ){
            this.gameOver();
        } else {
            this.mainPile.unshift(this.player.player1[1].pile.pop());
            cardCount(this.players);
        }
    }

    delayedFunctionPush(currentComp) {
        let minTime = 2000;
        let maxTime = 2000;
        let rand_time = Math.floor(Math.random() * (maxTime - minTime) + minTime);
        
        if (currentComp === "comp1") {
            setTimeout(function () {

                let topCard = this.computer.comp1[1].pile.pop();
                this.PushAnimation("comp1");
                this.mainPile.push(topCard);

                this.computer.comp1[2].turn = false;
                this.computer.comp2[2].turn = true;
                
                loadTopCards(this.players,[1]);
                clearTimeout();
                this.computerTurn();
                const comp1Container = document.getElementsByClassName("comp1-container");
                comp1Container[0].style.boxShadow = "none";

                cardCount(this.players);

            }.bind(this), rand_time);
        } else if (currentComp === "comp2") {
            setTimeout(function () {

                let topCard = this.computer.comp2[1].pile.pop();
         
                this.PushAnimation("comp2");
                this.mainPile.push(topCard);

                this.computer.comp2[2].turn = false;
                this.computer.comp3[2].turn = true;
                
                loadTopCards(this.players,[2]);
                clearTimeout();
                this.computerTurn();
                const comp2Container = document.getElementsByClassName("comp2-container");
                comp2Container[0].style.boxShadow = "none";

                const comp2Pile = document.getElementById("comp2Pile");
                comp2Pile.innerHTML = this.players[2][1].pile.length + " cards";

            }.bind(this), rand_time);

        } else if (currentComp === "comp3") {
            setTimeout(function () {

                let topCard = this.computer.comp3[1].pile.pop();
                this.PushAnimation("comp3");
                this.mainPile.push(topCard);

                this.computer.comp3[2].turn = false;
                this.player.player1[2].turn = true;
                

                loadTopCards(this.players, [3]);
                clearTimeout();
                this.computerTurn();

                const comp3Container = document.getElementsByClassName("comp3-container");
                comp3Container[0].style.boxShadow = "none";

                const comp3Pile = document.getElementById("comp3Pile");
                comp3Pile.innerHTML = this.players[3][1].pile.length + " cards";

            }.bind(this), rand_time);
        }
    }

    PushAnimation(current) {
        if (current === "comp1") {

            let backCollection = document.getElementsByClassName("back1");
            let flipperCollection = document.getElementsByClassName("flipper1");
            let container = document.getElementsByClassName("flip-container1");
            let zIndex = this.mainPile.length;
       
            container[container.length - 1].style.zIndex = zIndex;
     
            for (let i = 0; i < flipperCollection.length; i++) {
                flipperCollection[i].style.transform = 'rotateX(-180deg)';
            }

            for (let i = 0; i < backCollection.length; i++) {
                backCollection[i].style.animationDelay = '0.3s';
                backCollection[i].style.animation = 'toBack 0.3s linear normal forwards';
            }

        } else if (current === "comp2") {
            let backCollection = document.getElementsByClassName("back2");
            let flipperCollection = document.getElementsByClassName("flipper2");
            let container = document.getElementsByClassName("flip-container2");
            let zIndex = this.mainPile.length;

  
            container[container.length - 1].style.zIndex = zIndex;

            for (let i = 0; i < flipperCollection.length; i++) {
                flipperCollection[i].style.transform = 'rotateX(180deg)';
            }

            for (let i = 0; i < backCollection.length; i++) {
                backCollection[i].style.animationDelay = '0.3s';
                backCollection[i].style.animation = 'toBack 0.3s linear normal forwards';
            }

        } else if (current === "comp3") {
            let backCollection = document.getElementsByClassName("back3");
            let flipperCollection = document.getElementsByClassName("flipper3");
            let container = document.getElementsByClassName("flip-container3");
            let zIndex = this.mainPile.length;
  
            container[container.length - 1].style.zIndex = zIndex;

            for (let i = 0; i < flipperCollection.length; i++) {
                flipperCollection[i].style.transform = 'rotateX(-180deg)';
            }

            for (let i = 0; i < backCollection.length; i++) {
                backCollection[i].style.animationDelay = '0.3s';
                backCollection[i].style.animation = 'toBack 0.3s linear normal forwards';
            }


        } else if (current === "player") {
            let backCollection = document.getElementsByClassName("back0");
            let flipperCollection = document.getElementsByClassName("flipper0");
            let container = document.getElementsByClassName("flip-container0");
            let zIndex = this.mainPile.length;

            container[container.length - 1].style.zIndex = zIndex;

            for (let i = 0; i < flipperCollection.length; i++) {
                flipperCollection[i].style.transform = 'rotateX(180deg)';
                
            }

            for (let i = 0; i < backCollection.length; i++) {
                backCollection[i].style.animationDelay = '0.3s';
                backCollection[i].style.animation = 'toBack 0.3s linear normal forwards';
            }
        }

    }

    removeMainPile() {
        let div1 = document.getElementsByClassName("flip-container0");
        let div2 = document.getElementsByClassName("flip-container1");
        let div3 = document.getElementsByClassName("flip-container2");
        let div4 = document.getElementsByClassName("flip-container3");

        while (div1.length > 0) {
            div1[0].parentNode.removeChild(div1[0]);
        }
        while (div2.length > 0) {
            div2[0].parentNode.removeChild(div2[0]);
        }
        while (div3.length > 0) {
            div3[0].parentNode.removeChild(div3[0]);
        }
        while (div4.length > 0) {
            div4[0].parentNode.removeChild(div4[0]);
        }

        loadTopCards(this.players);
    }

    comp1Func() {
        if (this.computer.comp1[1].pile.length === 0) {
            this.computer.comp1[2].turn = false;
            this.computer.comp2[2].turn = true;

            const comp1Container = document.getElementsByClassName("comp1-container");
            comp1Container[0].style.boxShadow = "none";

            this.computerTurn();
        } else {
          this.delayedFunctionPush("comp1");
      }
    }

    comp2Func() {
        if (this.computer.comp2[1].pile.length === 0) {
            this.computer.comp2[2].turn = false;
            this.computer.comp3[2].turn = true;

            const comp2Container = document.getElementsByClassName("comp2-container");
            comp2Container[0].style.boxShadow = "none";
    
            this.computerTurn();
        } else {
            this.delayedFunctionPush("comp2");
        }
    }

    comp3Func() {
        if (this.computer.comp3[1].pile.length === 0) {
            this.computer.comp3[2].turn = false;
            this.player.player1[2].turn = true;

            const comp3Container = document.getElementsByClassName("comp3-container");
            comp3Container[0].style.boxShadow = "none";

            this.computerTurn();
        } else {
            this.delayedFunctionPush("comp3");
        }
    }

    allCompTake() {
        if (this.goodSlap()) {
            clearTimeout();
        }


        let minTime = 1000;
        let maxTime = 2000;
        let rand_time;

        rand_time = Math.floor(Math.random() * (maxTime - minTime) + minTime);
        setTimeout(function () {
            if (this.goodSlap()) {
                this.player.player1[2].turn = false;

                const hand = document.getElementById("comphand1");
                hand.style.visibility = "visible";
                
                setTimeout(function() {
                    this.computer.comp1[1].pile.unshift(...this.mainPile);
                    this.mainPile = [];
                    this.removeMainPile();
    
                    this.computer.comp1[2].turn = true;
                    this.computer.comp2[2].turn = false;
                    this.computer.comp3[2].turn = false;
                    this.player.player1[2].turn = false;
    
                    clearTimeout();
                    removehands();
                    this.computerTurn();
    
                    const comp1Pile = document.getElementById("comp1Pile");
                    comp1Pile.innerHTML = this.players[1][1].pile.length + " cards";
    
                }.bind(this),2000);
            }
        }.bind(this), rand_time);

        rand_time = Math.floor(Math.random() * (maxTime - minTime) + minTime);
        setTimeout(function () {
            if (this.goodSlap()) {
                this.player.player1[2].turn = false;

                const hand = document.getElementById("comphand2");
                hand.style.visibility = "visible";

                setTimeout(function() {
                    this.computer.comp2[1].pile.unshift(...this.mainPile);
                    this.mainPile = [];
                    this.removeMainPile();
    
                    this.computer.comp1[2].turn = false;
                    this.computer.comp2[2].turn = true;
                    this.computer.comp3[2].turn = false;
                    this.player.player1[2].turn = false;
                    
                    clearTimeout();
                    removehands();
                    this.computerTurn();
    
                    cardCount(this.players);

                }.bind(this),2000);
            }
        }.bind(this), rand_time);

        rand_time = Math.floor(Math.random() * (maxTime - minTime) + minTime);
        setTimeout(function () {
            if (this.goodSlap()) {
                this.player.player1[2].turn = false;

                const hand = document.getElementById("comphand3");
                hand.style.visibility = "visible";
                

                setTimeout(function() {
                    this.computer.comp3[1].pile.unshift(...this.mainPile);
                    this.mainPile = [];
                    this.removeMainPile();
                    
                    this.computer.comp1[2].turn = false;
                    this.computer.comp2[2].turn = false;
                    this.computer.comp3[2].turn = true;
                    this.player.player1[2].turn = false;

                    clearTimeout();
                    removehands();
                    this.computerTurn();

                    cardCount(this.players);

                }.bind(this), 2000);
            
            }
        }.bind(this), rand_time);
    }


    computerTurn() {
        if (this.computer.comp1[2].turn) {
            const comp1Container = document.getElementsByClassName("comp1-container");
            comp1Container[0].style.boxShadow = "0px 0px 31px 20px rgba(143,215,210,1)";
            this.comp1Func();
            this.allCompTake();

        } else if (this.computer.comp2[2].turn) {
            const comp2Container = document.getElementsByClassName("comp2-container");
            comp2Container[0].style.boxShadow = "0px 0px 31px 20px rgba(143,215,210,1)";
            this.comp2Func();
            this.allCompTake();

        } else if (this.computer.comp3[2].turn) {
            const comp3Container = document.getElementsByClassName("comp3-container");
            comp3Container[0].style.boxShadow = "0px 0px 31px 20px rgba(143,215,210,1)";
            this.comp3Func();
            this.allCompTake();
   
        } else {
            const playerContainer = document.getElementsByClassName("player-container");
            playerContainer[0].style.boxShadow = "0px 0px 31px 20px rgba(143,215,210,1)";
            this.allCompTake();
        }

    }

}