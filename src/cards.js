
export default class Cards {
    constructor() {
        this.deck = [];
        this.dealt_cards = [];
    }


    generate_deck() {
        let card = (suit, value) => {
            this.name = value + ' of ' + suit;
            this.suit = suit;
            this.value = value;

            return {name: this.name, suit: this.suit, value: this.value};
        };

        let values = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King', 'Ace'];
        let suits = ['Clubs', 'Diamonds', 'Spades', 'Hearts'];
    
        for (let i = 0; i < suits.length; i++) {
            for (let j = 0; j < values.length; j++) {
                this.deck.push(card(suits[i], values[j]));
            }
        }
    }


    shuffle() {
        let current_idx = this.deck.length;
        let temp_val;
        let  rand_idx;

        while (current_idx !== 0) {
            rand_idx = Math.floor(Math.random() * current_idx);
            current_idx -= 1;
            temp_val = this.deck[current_idx];
            this.deck[current_idx] = this.deck[rand_idx];
            this.deck[rand_idx] = temp_val;
        }
    }

    deal() {
        let dealt_card = this.deck.shift();
        this.dealt_cards.push(dealt_card);
        return dealt_card;
    }

    clear() {
        this.deck = [];
    }

    print_deck() {
        if (this.deck.length === 0) {
            console.log("the deck length is 0");
        } else {
            for (let i = 0; i < this.deck.length;i++) {
                console.log(this.deck[i]);
            }
        }
    }
    
}
