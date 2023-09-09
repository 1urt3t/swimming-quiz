import React from "react";
const Result = ({correct, resultAnswer}) => {
    return (
        <div className="Result">
            <div className="result-text">
                You answer on {correct}/6 questions
            </div>
            <div className="result-btn"><a href="/">Again</a></div>
            <div className="result-answers"><button onClick={resultAnswer}>kdsdjskdjk</button></div>
        </div>
    )
}
export default Result 