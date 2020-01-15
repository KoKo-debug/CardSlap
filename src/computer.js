import {} from './clearTimeout';


export default class Computer {
    constructor() {
        this.comp1 = [];
        this.comp2 = [];
        this.comp3 = [];
        this.comp1.push({ name: "Computer 1" }, { pile: [] }, { turn: false });
        this.comp2.push({ name: "Computer 2" }, { pile: [] }, { turn: false });
        this.comp3.push({ name: "Computer 3" }, { pile: [] }, { turn: false });

    }

    delayedFunctionPush(currentComp, mainPile) {
        let minTime = 2000;
        let maxTime = 2000;
        let rand_time = Math.floor(Math.random() * (maxTime - minTime) + minTime);

        if (currentComp === "comp1") {
            setTimeout(function () {

                let topCard = this.computer.comp1[1].pile.pop();
                this.PushAnimation("comp1", mainPile);
                this.mainPile.push(topCard);

                this.computer.comp1[2].turn = false;
                this.computer.comp2[2].turn = true;

                loadTopCards(this.players, [1]);
                clearTimeout();
                this.computerTurn();
                const comp1Container = document.getElementsByClassName("comp1-container");
                comp1Container[0].style.boxShadow = "none";

                this.cardCount();

            }.bind(this), rand_time);
        } else if (currentComp === "comp2") {
            setTimeout(function () {

                let topCard = this.computer.comp2[1].pile.pop();

                this.PushAnimation("comp2", mainPile);
                this.mainPile.push(topCard);

                this.computer.comp2[2].turn = false;
                this.computer.comp3[2].turn = true;

                loadTopCards(this.players, [2]);
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
                this.PushAnimation("comp3", mainPile);
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

    comp1Func(mainPile) {
        if (this.computer.comp1[1].pile.length === 0) {
            this.computer.comp1[2].turn = false;
            this.computer.comp2[2].turn = true;

            const comp1Container = document.getElementsByClassName("comp1-container");
            comp1Container[0].style.boxShadow = "none";

            this.computerTurn();
        } else {
            this.delayedFunctionPush("comp1", mainPile);
        }
    }


    computerTurn(mainPile) {
        if (this.computer.comp1[2].turn) {
            const comp1Container = document.getElementsByClassName("comp1-container");
            comp1Container[0].style.boxShadow = "0px 0px 31px 20px rgba(143,215,210,1)";
            this.comp1Func(mainPile);
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