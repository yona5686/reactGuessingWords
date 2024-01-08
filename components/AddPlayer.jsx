import { picturesArr } from "../data/pictures";
import { observer } from "mobx-react-lite";

const AddPlayer = observer(({playerState}) => {

    const handleChange = (event) => {
        playerState.name = event.target.value;
    }

    return(
        <>  
            <div style = {{width: "33%", float: "left", padding: "10px"}}>
                <div style={{margin: "auto", textAlign: "center", padding: "20px"}}>        
                    <input type="text" name="name" onChange={handleChange} value = {playerState.name}></input>
                    <button onClick={() => playerState.randomPic()}>Roll picture</button>
                </div>

                <div style={{borderStyle: "solid", padding: "10px"}}>
                    <>
                        <h2>New player:</h2>

                        <h3><b>{playerState.name}</b></h3>
                        <img style={{width: "20%", height: "20%"}} src={picturesArr[playerState.picNum]}></img>
                        <button onClick={() => playerState.addPlayer(playerState.name, playerState.picNum)} disabled = {playerState.name == "" || playerState.picNum == null}>Save</button>
                    </>

                    <br/><br/><br/>
                    <h2>Ready to play:</h2>
                    {playerState.playersArr.map((x) => <>
                            {console.log(JSON.stringify(x))}
                            <h3><b>{x.name}</b></h3> 
                            <h4>Score: {x.points}</h4>
                            <img style={{width: "20%", height: "20%"}} src={picturesArr[x.picNum]}></img>
                            <button onClick={() => playerState.del(x)}>Delete</button>
                    
                        </>)}             
                </div>
            </div>
            
        </>
    )

})


export default AddPlayer;