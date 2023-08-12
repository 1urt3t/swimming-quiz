import React from "react";
import Start from "./components/Start";
import Game from "./components/Game";
import qestions from './components/questions'

const Quiz = () => {
    return (
        <div className="Quiz">
            {/* <Start/> */}
            <Game/>
        </div>
    )
}
export default Quiz