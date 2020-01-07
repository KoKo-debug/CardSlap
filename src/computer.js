
export default class Computer {
    constructor(props) {
        this.comp1 = [];
        this.comp2 = [];
        this.comp3 = [];
        this.comp1.push({ name: "Computer 1" }, { pile: [] }, { turn: false });
        this.comp2.push({ name: "Computer 2" }, { pile: [] }, { turn: false });
        this.comp3.push({ name: "Computer 3" }, { pile: [] }, { turn: false });
        // this.comp1Func = this.comp1Func.bind(this);
        // setInterval(this.comp1Func(props), 2000);
    }

    // comp1Func(props) {
    //     debugger;
    //     if (this.comp) {
    //         return null;
    //     }
    // }

}