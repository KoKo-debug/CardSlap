
export default class Computer {
    constructor() {
        this.comp1 = [];
        this.comp2 = [];
        this.comp3 = [];
        this.comp1.push({ name: "Computer 1" }, { pile: [] }, { turn: false });
        this.comp2.push({ name: "Computer 2" }, { pile: [] }, { turn: false });
        this.comp3.push({ name: "Computer 3" }, { pile: [] }, { turn: false });

    }
}