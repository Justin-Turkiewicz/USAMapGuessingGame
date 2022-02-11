export class State{
    constructor(readonly name: string, public circle: HTMLElement){}

    highlight(){
        this.circle.style.background = "yellow";
    }
    markDone(){
        this.circle.style.background = "blue";
    }
    revert(){
        this.circle.style.background = "red";
    }
}