import AddPlayer from "../components/AddPlayer";
import Game from "../components/Game";
import { ToAddPlayers } from "../components/ToAddPlayers";
import { ToDoGame } from "../components/ToDoGame";

export default function App(){

    //const [playersArrIndex, setPlayersArrIndex] = useState([])

    const playerStateIndex = new ToAddPlayers();
    const gameStateIndex = new ToDoGame();

    return(
        <>
            <AddPlayer playerState = {playerStateIndex}/>
            <Game playerState = {playerStateIndex} gameState = {gameStateIndex}/>
            
        </>
    )
}