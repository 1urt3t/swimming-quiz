import React from "react";

const Start = ({ setStepZero }) => {
    return (
        <div className="Start">
            <div className="start-text">
                <div className="start-header">Swimming quiz</div>
                <div className="start-desk">Welcome to a short swimming quiz</div>
            </div>
            <div className="start-btn"><button onClick={setStepZero}>Start</button></div>
        </div>
    )
}
export default Start