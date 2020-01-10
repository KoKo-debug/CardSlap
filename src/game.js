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
        console.log(this.players);
        this.loadTopCards();
        this.computerTurn();
    }
    

    loadTopCards(playerIdx = [0, 1, 2, 3]) {
        let topCards = [];
        playerIdx.forEach(i => {
            let pile = this.players[i][1].pile;
            let topCard = pile[pile.length -1 ] || "blank";
            topCards[i] = topCard;
        });
    
        topCards.forEach((card, idx) => {
            const cardTable = document.getElementById("cardTable");

            if (idx === 0) {
                let div1 = document.createElement("div");
                div1.className="vertical flip-container0";

                let div2 = document.createElement("div");
                div2.className="flipper0";

                let div3 = document.createElement("div");
                div3.className="front0";

                let div4 = document.createElement("div");
                div4.className="back0";
                
                let div4Content = card.name;
    
                div4.innerHTML = div4Content;

                let img1 = document.createElement("img");
                img1.className="backCardV";
                img1.src = "src/images//cardBack.jpg";
                
                cardTable.appendChild(div1);
                div1.appendChild(div2);
                div2.appendChild(div3);
                div2.appendChild(div4);
                div3.appendChild(img1);

                
            } else if (idx === 1) {
                let div1 = document.createElement("div");
                div1.className = "horizontal flip-container1";

                let div2 = document.createElement("div");
                div2.className = "flipper1";

                let div3 = document.createElement("div");
                div3.className = "front1";

                let div4 = document.createElement("div");
                div4.className = "back1";

                let div4Content = card.name;

                div4.innerHTML = div4Content;

                let img1 = document.createElement("img");
                img1.className = "backCardH";
                img1.src = "src/images//cardBack.jpg";

                cardTable.appendChild(div1);
                div1.appendChild(div2);
                div2.appendChild(div3);
                div2.appendChild(div4);
                div3.appendChild(img1);
            } else if (idx === 2) {
                let div1 = document.createElement("div");
                div1.className = "vertical flip-container2";

                let div2 = document.createElement("div");
                div2.className = "flipper2";

                let div3 = document.createElement("div");
                div3.className = "front2";

                let div4 = document.createElement("div");
                div4.className = "back2";

                let div4Content = card.name;

                div4.innerHTML = div4Content;

                let img1 = document.createElement("img");
                img1.className = "backCardV";
                img1.src = "src/images//cardBack.jpg";

                cardTable.appendChild(div1);
                div1.appendChild(div2);
                div2.appendChild(div3);
                div2.appendChild(div4);
                div3.appendChild(img1);
            } else if (idx === 3) {
                let div1 = document.createElement("div");
                div1.className = "horizontal flip-container3";

                let div2 = document.createElement("div");
                div2.className = "flipper3";

                let div3 = document.createElement("div");
                div3.className = "front3";

                let div4 = document.createElement("div");
                div4.className = "back3";

                let div4Content = card.name;

                div4.innerHTML = div4Content;

                let img1 = document.createElement("img");
                img1.className = "backCardH";
                img1.src = "src/images//cardBack.jpg";

                cardTable.appendChild(div1);
                div1.appendChild(div2);
                div2.appendChild(div3);
                div2.appendChild(div4);
                div3.appendChild(img1);
            }
        });
    }

    tapOwnPile() {
        if (this.player.player1[2].turn) {
            let topCard = this.player.player1[1].pile.pop();
            
            if (topCard === undefined) {
                this.gameOver();
            } else {
                this.PushAnimation("player");
                this.loadTopCards([0]);
                this.clearTimeout();
                this.mainPile.push(topCard);
                this.computer.comp1[2].turn = true;
            }
    
            this.display.render(this.mainPile, this.players);

            this.player.player1[2].turn = false;
            this.computer.comp1[2].turn = true;
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

            this.computer.comp1[2].turn = false;
            this.computer.comp2[2].turn = false;
            this.computer.comp3[2].turn = false;
            this.player.player1[2].turn = true;

            this.removeMainPile();
            this.clearTimeout();
            this.computerTurn();

        } else if (!this.goodSlap() && this.player.player1[1].pile.length === 0 ){
            this.gameOver();
        } else {
            this.mainPile.unshift(this.player.player1[1].pile.pop());
        }

        this.display.render(this.mainPile, this.players);
    }


    clearTimeout() {
        let id = window.setTimeout(function() {}, 0);

        while (id--) {
            window.clearTimeout(id);
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
                this.display.render(this.mainPile, this.players);

                this.computer.comp1[2].turn = false;
                this.computer.comp2[2].turn = true;
                
                this.loadTopCards([1]);
                this.clearTimeout();
                this.computerTurn();

            }.bind(this), rand_time);
        } else if (currentComp === "comp2") {
            setTimeout(function () {

                let topCard = this.computer.comp2[1].pile.pop();
         
                this.PushAnimation("comp2");
                this.mainPile.push(topCard);
                this.display.render(this.mainPile, this.players);

                this.computer.comp2[2].turn = false;
                this.computer.comp3[2].turn = true;
                
                this.loadTopCards([2]);
                this.clearTimeout();
                this.computerTurn();

            }.bind(this), rand_time);

        } else if (currentComp === "comp3") {
            setTimeout(function () {

                let topCard = this.computer.comp3[1].pile.pop();
                this.PushAnimation("comp3");
                this.mainPile.push(topCard);
                this.display.render(this.mainPile, this.players);

                this.computer.comp3[2].turn = false;
                this.player.player1[2].turn = true;
                

                this.loadTopCards([3]);
                this.clearTimeout();
                this.computerTurn();

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
                flipperCollection[i].style.transform = 'rotateX(180deg)';
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
                flipperCollection[i].style.transform = 'rotateX(-180deg)';
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
                flipperCollection[i].style.transform = 'rotateX(180deg)';
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

        this.loadTopCards();
    }

    comp1Func() {
        if (this.computer.comp1[1].pile.length === 0) {
            this.computer.comp1[2].turn = false;
            this.computer.comp2[2].turn = true;
            this.computerTurn();
        } else {
          this.delayedFunctionPush("comp1");
      }
      this.display.render(this.mainPile, this.players);
    }

    comp2Func() {
        if (this.computer.comp2[1].pile.length === 0) {
            this.computer.comp2[2].turn = false;
            this.computer.comp3[2].turn = true;
            this.computerTurn();
        } else {
            this.delayedFunctionPush("comp2");
        }
        this.display.render(this.mainPile, this.players);
    }

    comp3Func() {
        if (this.computer.comp3[1].pile.length === 0) {
            this.computer.comp3[2].turn = false;
            this.player.player1[2].turn = true;
            this.computerTurn();
        } else {
            this.delayedFunctionPush("comp3");
        }
        this.display.render(this.mainPile, this.players);
    }


    allCompTake() {
        if (this.goodSlap()) {
            this.clearTimeout();
        }


        let minTime = 1000;
        let maxTime = 2000;
        let rand_time;

        rand_time = Math.floor(Math.random() * (maxTime - minTime) + minTime);
        setTimeout(function () {
            if (this.goodSlap()) {
                this.computer.comp1[1].pile.unshift(...this.mainPile);
                this.mainPile = [];

                this.computer.comp1[2].turn = true;
                this.computer.comp2[2].turn = false;
                this.computer.comp3[2].turn = false;
                this.player.player1[2].turn = false;

                this.removeMainPile();
                this.clearTimeout();
                this.computerTurn();
            }
        }.bind(this), rand_time);

        rand_time = Math.floor(Math.random() * (maxTime - minTime) + minTime);
        setTimeout(function () {
            if (this.goodSlap()) {
                this.computer.comp2[1].pile.unshift(...this.mainPile);
                this.mainPile = [];

                this.computer.comp1[2].turn = false;
                this.computer.comp2[2].turn = true;
                this.computer.comp3[2].turn = false;
                this.player.player1[2].turn = false;
                
                this.removeMainPile();
                this.clearTimeout();
                this.computerTurn();
            }
        }.bind(this), rand_time);

        rand_time = Math.floor(Math.random() * (maxTime - minTime) + minTime);
        setTimeout(function () {
            if (this.goodSlap()) {
                this.computer.comp3[1].pile.unshift(...this.mainPile);
                this.mainPile = [];

                this.computer.comp1[2].turn = false;
                this.computer.comp2[2].turn = false;
                this.computer.comp3[2].turn = true;
                this.player.player1[2].turn = false;

                this.removeMainPile();
                this.clearTimeout();
                this.computerTurn();
            }
        }.bind(this), rand_time);
    }


    computerTurn() {
        if (this.computer.comp1[2].turn) {
            console.log("computer 1's turn");
            console.log(this.mainPile);

            this.comp1Func();
            this.allCompTake();

        } else if (this.computer.comp2[2].turn) {

            console.log("computer 2's turn");
            console.log(this.mainPile);
            this.comp2Func();
            this.allCompTake();

        } else if (this.computer.comp3[2].turn) {

            console.log("computer 3's turn");
            console.log(this.mainPile);
            this.comp3Func();
            this.allCompTake();

        } else {
            console.log("its your turn");
            console.log(this.player.player1);
            console.log(this.mainPile);
            this.allCompTake();
        }

    }

}