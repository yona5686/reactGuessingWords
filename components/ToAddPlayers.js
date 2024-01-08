import { makeObservable, observable, computed, action, autorun } from "mobx";

export class ToAddPlayers {

    playersArr = [];
    name = "";
    picNum = null;

    constructor() {
        makeObservable(this, {
            playersArr: observable,
            name: observable,
            picNum: observable,
            addPlayer: action,
            randomPic: action,
            del: action

        });
    }

    addPlayer(name, picNum){
        this.playersArr.push({
            name:name,
            picNum:picNum,
            points:0
        });

        this.name = "";
        this.picNum = null;
    }

    randomPic(){
        this.picNum = Math.floor(Math.random() * 5);
    }

    del(player){
        this.playersArr = this.playersArr.filter((x) => x !== player)
    }

}