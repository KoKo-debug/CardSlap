

export default class Display {

    showMainCard(card) {
        let span = document.createElement("span");
        span.innerHTML = "<br />" + card.name;
        document.getElementById("mainPile").appendChild(span);
    }


    render(mainPile, players) {

        const tapMainPile = document.getElementById("mainPile");
        tapMainPile.innerHTML = "Main pile : " + mainPile.length + " cards";

        if (mainPile.length > 0) {
            this.showMainCard(mainPile.slice(-1)[0]);
        }

        const tapOwnPile = document.getElementById("playerPile");
        tapOwnPile.innerHTML = "Your pile : " + players[0][1].pile.length + "cards";
        
        const comp1Pile = document.getElementById("comp1Pile");
        comp1Pile.innerHTML = "Computer 1's pile : " + players[1][1].pile.length + " cards";
      
        const comp2Pile = document.getElementById("comp2Pile");
        comp2Pile.innerHTML = "Computer 2's pile : " + players[2][1].pile.length + " cards";
      
        const comp3Pile = document.getElementById("comp3Pile");
        comp3Pile.innerHTML = "Computer 3's pile : " + players[3][1].pile.length + " cards";

    }
}