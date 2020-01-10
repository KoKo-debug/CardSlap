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

            let suit;
            let color;

            if (card.suit === "Hearts") {
                suit = '\&#9829';
                color = "red";
            } else if (card.suit === "Diamonds") {
                suit = `\&#9830`;
                color = "red";
            } else if (card.suit === "Clubs") {
                suit = `\&#9827`;
                color = "black"
            } else if (card.suit === "Spades") {
                suit = `\&#9824`;
                color = "black";
            }

            if (idx === 0) {
                let div1 = document.createElement("div");
                div1.className="vertical flip-container0";

                let div2 = document.createElement("div");
                div2.className="flipper0";

                let div3 = document.createElement("div");
                div3.className="front0";

                let div4 = document.createElement("div");
                div4.className="back0";

                let valueDiv = document.createElement("div");
                valueDiv.className = "value";

                let suitDiv = document.createElement("div");
                suitDiv.className = "suit";

                let valueDiv2 = document.createElement("div");
                valueDiv2.className = "value2";

                let ValueContent = card.value;
                let SuitContent = suit;


                valueDiv.innerHTML = ValueContent;
                suitDiv.innerHTML = SuitContent;
                valueDiv2.innerHTML = ValueContent;

                valueDiv.style.textAlign = "left";
                valueDiv.style.fontSize = "35px";
                valueDiv.style.color = color;
                valueDiv.style.fontWeight = "900";
                valueDiv.style.marginTop = "5px";
                valueDiv.style.marginLeft = "10px";

                suitDiv.style.marginTop = "14px";
                suitDiv.style.fontSize = "70px";
                suitDiv.style.color = color;

                // valueDiv2.style.transform = "rotate(-180deg)";
                // valueDiv2.style.marginTop = "11px";
                // valueDiv2.style.marginRight = "10px";
                // valueDiv2.style.fontSize = "35px";
                // valueDiv2.style.fontWeight = "900";
                // valueDiv2.style.textAlign = "left";
                // valueDiv2.style.color = color;

                let imgContainer = document.createElement("div");
                imgContainer.className = "img-container";

                let img1 = document.createElement("img");
                img1.className="backCardV";
                img1.src = "src/images//cardBack.jpg";
                
                cardTable.appendChild(div1);
                div1.appendChild(div2);
                div2.appendChild(div3);
                div2.appendChild(div4);
                div4.appendChild(valueDiv);
                div4.appendChild(suitDiv);
                // div4.appendChild(valueDiv2);
                div3.appendChild(imgContainer);
                imgContainer.appendChild(img1);

                
            } else if (idx === 1) {
                let div1 = document.createElement("div");
                div1.className = "horizontal flip-container1";

                let div2 = document.createElement("div");
                div2.className = "flipper1";

                let div3 = document.createElement("div");
                div3.className = "front1";

                let div4 = document.createElement("div");
                div4.className = "back1";


                let valueDiv = document.createElement("div");
                valueDiv.className = "value";

                let suitDiv = document.createElement("div");
                suitDiv.className = "suit";

                let valueDiv2 = document.createElement("div");
                valueDiv2.className = "value2";

                
                let ValueContent = card.value;
                let SuitContent = suit;
                
                valueDiv.innerHTML = ValueContent;
                suitDiv.innerHTML = SuitContent;
                valueDiv2.innerHTML = ValueContent;

                valueDiv.style.textAlign = "left";
                valueDiv.style.fontSize = "35px";
                valueDiv.style.color = color;
                valueDiv.style.fontWeight = "900";
                valueDiv.style.marginTop = "5px";
                valueDiv.style.marginLeft = "10px";

                suitDiv.style.marginTop = "14px";
                suitDiv.style.fontSize = "70px";
                suitDiv.style.color = color;

                // valueDiv2.style.transform = "rotate(-180deg)";
                // valueDiv2.style.marginTop = "11px";
                // valueDiv2.style.marginRight = "10px";
                // valueDiv2.style.fontSize = "35px";
                // valueDiv2.style.fontWeight = "900";
                // valueDiv2.style.textAlign = "left";
                // valueDiv2.style.color = color;

                let imgContainer = document.createElement("div");
                imgContainer.className = "img-container";

                let img1 = document.createElement("img");
                img1.className = "backCardH";
                img1.src = "src/images//cardBack.jpg";

                cardTable.appendChild(div1);
                div1.appendChild(div2);
                div2.appendChild(div3);
                div2.appendChild(div4);
                div4.appendChild(valueDiv);
                div4.appendChild(suitDiv);
                // div4.appendChild(valueDiv2);
                div3.appendChild(imgContainer);
                imgContainer.appendChild(img1);
            } else if (idx === 2) {
                let div1 = document.createElement("div");
                div1.className = "vertical flip-container2";

                let div2 = document.createElement("div");
                div2.className = "flipper2";

                let div3 = document.createElement("div");
                div3.className = "front2";

                let div4 = document.createElement("div");
                div4.className = "back2";

                let valueDiv = document.createElement("div");
                valueDiv.className = "value";

                let suitDiv = document.createElement("div");
                suitDiv.className = "suit";

                let valueDiv2 = document.createElement("div");
                valueDiv2.className = "value2";


                let ValueContent = card.value;
                let SuitContent = suit;

                valueDiv.innerHTML = ValueContent;
                suitDiv.innerHTML = SuitContent;
                valueDiv2.innerHTML = ValueContent;

                valueDiv.style.textAlign = "left";
                valueDiv.style.fontSize = "35px";
                valueDiv.style.color = color;
                valueDiv.style.fontWeight = "900";
                valueDiv.style.marginTop = "5px";
                valueDiv.style.marginLeft = "10px";

                suitDiv.style.marginTop = "14px";
                suitDiv.style.fontSize = "70px";
                suitDiv.style.color = color;

                // valueDiv2.style.transform = "rotate(-180deg)";
                // valueDiv2.style.marginTop = "11px";
                // valueDiv2.style.marginRight = "10px";
                // valueDiv2.style.fontSize = "35px";
                // valueDiv2.style.fontWeight = "900";
                // valueDiv2.style.textAlign = "left";
                // valueDiv2.style.color = color;
                
                let imgContainer = document.createElement("div");
                imgContainer.className = "img-container";

                let img1 = document.createElement("img");
                img1.className = "backCardV";
                img1.src = "src/images//cardBack.jpg";

                cardTable.appendChild(div1);
                div1.appendChild(div2);
                div2.appendChild(div3);
                div2.appendChild(div4);
                div4.appendChild(valueDiv);
                div4.appendChild(suitDiv);
                // div4.appendChild(valueDiv2);
                div3.appendChild(imgContainer);
                imgContainer.appendChild(img1);
            } else if (idx === 3) {
                let div1 = document.createElement("div");
                div1.className = "horizontal flip-container3";

                let div2 = document.createElement("div");
                div2.className = "flipper3";

                let div3 = document.createElement("div");
                div3.className = "front3";

                let div4 = document.createElement("div");
                div4.className = "back3";

                let valueDiv = document.createElement("div");
                valueDiv.className = "value";

                let suitDiv = document.createElement("div");
                suitDiv.className = "suit";

                let valueDiv2 = document.createElement("div");
                valueDiv2.className = "value2";

                let ValueContent = card.value;
                let SuitContent = suit;

                valueDiv.innerHTML = ValueContent;
                suitDiv.innerHTML = SuitContent;

                valueDiv2.innerHTML = ValueContent;

                valueDiv.style.textAlign = "left";
                valueDiv.style.fontSize = "35px";
                valueDiv.style.color = color;
                valueDiv.style.fontWeight = "900";
                valueDiv.style.marginTop = "5px";
                valueDiv.style.marginLeft = "10px";

                suitDiv.style.marginTop = "14px";
                suitDiv.style.fontSize = "70px";
                suitDiv.style.color = color;

                // valueDiv2.style.transform = "rotate(-180deg)";
                // valueDiv2.style.marginTop = "11px";
                // valueDiv2.style.marginRight = "10px";
                // valueDiv2.style.fontSize = "35px";
                // valueDiv2.style.fontWeight = "900";
                // valueDiv2.style.textAlign = "left";
                // valueDiv2.style.color = color;


                let imgContainer = document.createElement("div");
                imgContainer.className = "img-container";

                let img1 = document.createElement("img");
                img1.className = "backCardH";
                img1.src = "src/images//cardBack.jpg";

                cardTable.appendChild(div1);
                div1.appendChild(div2);
                div2.appendChild(div3);
                div2.appendChild(div4);
                div4.appendChild(valueDiv);
                div4.appendChild(suitDiv);
                // div4.appendChild(valueDiv2);
                div3.appendChild(imgContainer);
                imgContainer.appendChild(img1);
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

                const playerInfo = document.getElementById("playerInfoContainer");
                playerInfo.innerHTML = "You have " + this.players[0][1].pile.length + " cards";
                
                const playerContainer = document.getElementsByClassName("player-container");
                playerContainer[0].style.boxShadow = "none";
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
                this.clearTimeout();
                this.removehands();
                this.computerTurn();
    
                const playerInfo = document.getElementById("playerInfoContainer");
                playerInfo.innerHTML = "You have " + this.players[0][1].pile.length + " cards";

            }.bind(this),2000);


        } else if (!this.goodSlap() && this.player.player1[1].pile.length === 0 ){
            this.gameOver();
        } else {
            this.mainPile.unshift(this.player.player1[1].pile.pop());
            const playerInfo = document.getElementById("playerInfoContainer");
            playerInfo.innerHTML = "You have " + this.players[0][1].pile.length + " cards";
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
                const comp1Container = document.getElementsByClassName("comp1-container");
                comp1Container[0].style.boxShadow = "none";

                const comp1Pile = document.getElementById("comp1Pile");
                comp1Pile.innerHTML = this.players[1][1].pile.length + " cards";

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
                this.display.render(this.mainPile, this.players);

                this.computer.comp3[2].turn = false;
                this.player.player1[2].turn = true;
                

                this.loadTopCards([3]);
                this.clearTimeout();
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

        this.loadTopCards();
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
      this.display.render(this.mainPile, this.players);
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
        this.display.render(this.mainPile, this.players);
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
        this.display.render(this.mainPile, this.players);
    }

    removehands() {
        const hand0 = document.getElementById("playerhand");
        const hand1 = document.getElementById("comphand1");
        const hand2 = document.getElementById("comphand2");
        const hand3 = document.getElementById("comphand3");
        
        hand0.style.visibility = "hidden";
        hand1.style.visibility = "hidden";
        hand2.style.visibility = "hidden";
        hand3.style.visibility = "hidden";

        const playerContainer = document.getElementsByClassName("player-container");
        const comp1Container = document.getElementsByClassName("comp1-container");
        const comp2Container = document.getElementsByClassName("comp2-container");
        const comp3Container = document.getElementsByClassName("comp3-container");
        
        playerContainer[0].style.boxShadow = "none";
        comp1Container[0].style.boxShadow = "none";
        comp2Container[0].style.boxShadow = "none";
        comp3Container[0].style.boxShadow = "none";
        
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
    
                    this.clearTimeout();
                    this.removehands();
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
                    
                    this.clearTimeout();
                    this.removehands();
                    this.computerTurn();
    
                    const comp2Pile = document.getElementById("comp2Pile");
                    comp2Pile.innerHTML = this.players[2][1].pile.length + " cards";

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

                    this.clearTimeout();
                    this.removehands();
                    this.computerTurn();

                    const comp3Pile = document.getElementById("comp3Pile");
                    comp3Pile.innerHTML = this.players[3][1].pile.length + " cards";

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