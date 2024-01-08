import { observer } from "mobx-react-lite";
import { useEffect, useRef } from "react";
import { wordsArr } from "../data/words";

const Game = observer(({playerState ,gameState}) => {

    let inter = useRef(null);

    useEffect(() => {
        if(gameState.gameStarted == true){
            gameState.word = wordsArr[Math.floor(Math.random() * wordsArr.length)];

            inter.current = setInterval(() => {
                let rnd = Math.floor(Math.random() * playerState.playersArr.length);
                randomLetter(rnd);
            }, 1000);
        }


    }, [gameState.gameStarted])

    function randomLetter(playerIndex){
        const alphabet = "abcdefghijklmnopqrstuvwxyz";
        let rnd = Math.floor(Math.random() * alphabet.length);

        while(gameState.guessedLetters.includes(alphabet[rnd])){
            const wordsLetters = gameState.word.split("");
            if (wordsLetters.every(letter => gameState.guessedLetters.includes(letter))) {
                clearInterval(inter.current);
                dealEndGame();
                return;
            }
            rnd = Math.floor(Math.random() * alphabet.length);
        }
        
        gameState.guessedLetters.push(alphabet[rnd]);

        if(gameState.word.includes(alphabet[rnd]))
            playerState.playersArr[playerIndex].points++;
    }

    function findWinner()
    {
        let max = -1;
        let winnerIndex = null;
        let isTie = false;

        playerState.playersArr.forEach((player, index) => {
            if (player.points > max) {
                max = player.points;
                winnerIndex = index;
                isTie = false;
            }
            else if (player.points === max) {
                isTie = true;
            }
        });

        if(isTie)
        {
            alert("Tie!!!");
        }
        else if(winnerIndex != null)
        {
            alert(playerState.playersArr[winnerIndex].name + " Has won!!!");
        }
    }

    function dealEndGame()
    {
        findWinner();

        playerState.playersArr.forEach(player => {
            player.points = 0;
        })

        gameState.gameStarted = false;
        gameState.guessedLetters = [];
        gameState.word = "";
    }

    return(
        <>  

            <center>
                <button onClick={() => {gameState.gameStarted = true}} disabled = {playerState.playersArr.length < 2 || playerState.playersArr.length > 5}>Start game</button>
                {gameState.word != null && <h1>{ gameState.word.split("").map((letter) => gameState.guessedLetters.includes(letter)? letter : "?" )}</h1>}
            </center>

        </>
    )

})


export default Game;