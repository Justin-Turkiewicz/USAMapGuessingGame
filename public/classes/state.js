export class State {
    constructor(name, circle) {
        this.name = name;
        this.circle = circle;
    }
    highlight() {
        this.circle.style.background = "yellow";
    }
    markDone() {
        this.circle.style.background = "blue";
    }
    revert() {
        this.circle.style.background = "red";
    }
}
