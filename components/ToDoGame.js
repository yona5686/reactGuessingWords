import { makeObservable, observable, computed, action, autorun } from "mobx";

export class ToDoGame {

    word = "";
    gameStarted = false;
    guessedLetters = [];

 

    constructor() {
        makeObservable(this, {
            word:observable,
            gameStarted:observable,
            guessedLetters:observable,

        });
    }

}