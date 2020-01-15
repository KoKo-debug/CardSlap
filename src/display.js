

export default class Display {

    constructor() {

        this.loadTopCards = this.loadTopCards.bind(this);
    }



    createElement(num, card, suit) {

        let orientation;
        if (num === 0 || num === 2) {
            orientation = "vertical";
        } else {
            orientation = "horizontal";
        }

        let div1 = document.createElement("div");
        div1.className = `${orientation} flip-container${num}`;

        let div2 = document.createElement("div");
        div2.className = `flipper${num}`;

        let div3 = document.createElement("div");
        div3.className = `front${num}`;

        let div4 = document.createElement("div");
        div4.className = `back${num}`;

        let valueDiv = document.createElement("div");
        valueDiv.className = "value";

        let suitDiv = document.createElement("div");
        suitDiv.className = "suit";

        let ValueContent = card.value;
        let SuitContent = suit;


        valueDiv.innerHTML = ValueContent;
        suitDiv.innerHTML = SuitContent;

        return ({div1, div2, div3, div4, valueDiv, suitDiv});
    }

    appendElements(cardTable, div1, div2, div3, div4, valueDiv, suitDiv, imgContainer, img1) {
        cardTable.appendChild(div1);
        div1.appendChild(div2);
        div2.appendChild(div3);
        div2.appendChild(div4);
        div4.appendChild(valueDiv);
        div4.appendChild(suitDiv);
        div3.appendChild(imgContainer);
        imgContainer.appendChild(img1);
    }

    loadTopCards(players, playerIdx = [0, 1, 2, 3]) {
        let topCards = [];
        playerIdx.forEach(i => {
            let pile = players[i][1].pile;
            let topCard = pile[pile.length - 1] || "blank";
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
                color = "black";
            } else if (card.suit === "Spades") {
                suit = `\&#9824`;
                color = "black";
            }

            if (idx === 0) {

                let divArray = this.createElement(idx, card, suit);
 
                let div1 = divArray.div1;
                let div2 = divArray.div2;
                let div3 = divArray.div3;
                let div4 = divArray.div4;
                let valueDiv = divArray.valueDiv;
                let suitDiv = divArray.suitDiv;

                valueDiv.style.textAlign = "left";
                valueDiv.style.fontSize = "35px";
                valueDiv.style.color = color;
                valueDiv.style.fontWeight = "900";
                valueDiv.style.marginTop = "5px";
                valueDiv.style.marginLeft = "10px";

                suitDiv.style.marginTop = "14px";
                suitDiv.style.fontSize = "70px";
                suitDiv.style.color = color;

                let imgContainer = document.createElement("div");
                imgContainer.className = "img-container";

                let img1 = document.createElement("img");
                img1.className = "backCardV";
                img1.src = "src/images//cardBack.jpg";

                this.appendElements(cardTable, div1, div2, div3, div4, valueDiv, suitDiv, imgContainer, img1);

            } else if (idx === 1) {
                let divArray = this.createElement(idx, card, suit);

                let div1 = divArray.div1;
                let div2 = divArray.div2;
                let div3 = divArray.div3;
                let div4 = divArray.div4;
                let valueDiv = divArray.valueDiv;
                let suitDiv = divArray.suitDiv;

                valueDiv.style.textAlign = "left";
                valueDiv.style.fontSize = "35px";
                valueDiv.style.color = color;
                valueDiv.style.fontWeight = "900";
                valueDiv.style.marginTop = "5px";
                valueDiv.style.marginLeft = "10px";

                suitDiv.style.marginTop = "14px";
                suitDiv.style.fontSize = "70px";
                suitDiv.style.color = color;

                let imgContainer = document.createElement("div");
                imgContainer.className = "img-container";

                let img1 = document.createElement("img");
                img1.className = "backCardH";
                img1.src = "src/images//cardBack.jpg";

                this.appendElements(cardTable, div1, div2, div3, div4, valueDiv, suitDiv, imgContainer, img1);
           
            } else if (idx === 2) {
                let divArray = this.createElement(idx, card, suit);

                let div1 = divArray.div1;
                let div2 = divArray.div2;
                let div3 = divArray.div3;
                let div4 = divArray.div4;
                let valueDiv = divArray.valueDiv;
                let suitDiv = divArray.suitDiv;

                valueDiv.style.textAlign = "left";
                valueDiv.style.fontSize = "35px";
                valueDiv.style.color = color;
                valueDiv.style.fontWeight = "900";
                valueDiv.style.marginTop = "5px";
                valueDiv.style.marginLeft = "10px";

                suitDiv.style.marginTop = "14px";
                suitDiv.style.fontSize = "70px";
                suitDiv.style.color = color;


                let imgContainer = document.createElement("div");
                imgContainer.className = "img-container";

                let img1 = document.createElement("img");
                img1.className = "backCardV";
                img1.src = "src/images//cardBack.jpg";

                this.appendElements(cardTable, div1, div2, div3, div4, valueDiv, suitDiv, imgContainer, img1);
            
            } else if (idx === 3) {
                let divArray = this.createElement(idx, card, suit);

                let div1 = divArray.div1;
                let div2 = divArray.div2;
                let div3 = divArray.div3;
                let div4 = divArray.div4;
                let valueDiv = divArray.valueDiv;
                let suitDiv = divArray.suitDiv;

                valueDiv.style.textAlign = "left";
                valueDiv.style.fontSize = "35px";
                valueDiv.style.color = color;
                valueDiv.style.fontWeight = "900";
                valueDiv.style.marginTop = "5px";
                valueDiv.style.marginLeft = "10px";

                suitDiv.style.marginTop = "14px";
                suitDiv.style.fontSize = "70px";
                suitDiv.style.color = color;

                let imgContainer = document.createElement("div");
                imgContainer.className = "img-container";

                let img1 = document.createElement("img");
                img1.className = "backCardH";
                img1.src = "src/images//cardBack.jpg";

                this.appendElements(cardTable, div1, div2, div3, div4, valueDiv, suitDiv, imgContainer, img1);
            }
        });
    }


    render(mainPile, players) {

    }
}