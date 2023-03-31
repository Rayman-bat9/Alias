import React, { useState } from "react";
import MyButton from "../UI/MyButton";
import Teams from "./Teams"
import Timer from "./Timer";


const GameBoard = () => {
    const [teamsReady, setTeamsReady] = useState(false);

    const handleReady = () => {
        setTeamsReady(true);
    }

    return(
        <div className="game">
            <Teams teamsReadyStatus={teamsReady}/>
            {teamsReady ?
            <div>
                <Timer/>
            </div>:
            <div className="ready-button">
                <MyButton onClick={() => handleReady()}>Ready</MyButton>
            </div>
            }
        </div>
    )
}

export default GameBoard;