import {State} from "./classes/state.js"

const score = document.querySelector("#score") as HTMLLabelElement;
const states = document.getElementsByClassName("state") as HTMLCollectionOf<HTMLElement>;
let allStates: State[] = [];
let copyOfStates: State[] = [];

for(const ele of states){
    let state = new State(ele.getAttribute("id")!, ele);
    allStates.push(state);
    copyOfStates.push(state);
}

console.log(allStates);
let userScore = 0;
let index = Math.floor(Math.random()*(allStates.length));
let firstState = allStates[index];
const start = document.querySelector("#start") as HTMLButtonElement;
start.addEventListener("click", starting);

function starting() {
    start.disabled = true;
    score.innerText = "Score is "+userScore;   
    firstState.highlight();
}

const guess = document.querySelector("#checkguess") as HTMLButtonElement;
const giveup = document.querySelector("#giveup") as HTMLButtonElement;
const restart = document.querySelector("#restart") as HTMLButtonElement;
restart.disabled = true;
const stateGuess = document.querySelector("#state") as HTMLInputElement;
guess.addEventListener("click", guessing);

function guessing() {
    
    if(stateGuess.value === firstState.name && userScore < 50){
        firstState.markDone();
        copyOfStates.splice(index, 1);
        if(copyOfStates.length === 0){
            if(userScore === 50){
                score.innerText = "You guessed them all!";
            }
            else{
                score.innerText = "Final Score: "+userScore;
                guess.disabled = true;
                giveup.disabled = true;
                restart.disabled = false;
            }
        }
        else{
            index = Math.floor(Math.random()*(copyOfStates.length));
            firstState = copyOfStates[index];
            firstState.highlight();
            userScore++;
            score.innerText = "Score is "+userScore;
        }
    }
}


giveup.addEventListener("click", nextState);
function nextState(){
        firstState.revert();
        copyOfStates.splice(index, 1);
        if(copyOfStates.length === 0){
            score.innerText = "Final Score: "+userScore;
            guess.disabled = true;
            giveup.disabled = true;
            restart.disabled = false;
        }
        else{
        index = Math.floor(Math.random()*(copyOfStates.length));
        firstState = copyOfStates[index];
        firstState.highlight();
        }
    }

restart.addEventListener("click", restarting);
function restarting(){
    for(const eachState of allStates){
        eachState.revert();
    }
    giveup.disabled = false;
    guess.disabled = false;
    restart.disabled = true;
    userScore = 0;
    score.innerText = "Score is "+userScore;
    for(const state of allStates){
        copyOfStates.push(state);
    }
    index = Math.floor(Math.random()*(allStates.length));
    firstState = allStates[index];
    firstState.highlight();
}
        
    
