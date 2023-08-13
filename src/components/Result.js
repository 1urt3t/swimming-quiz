import React from "react";
const Result = ({correct}) => {
    return (
        <div className="Result">
            <div className="result-text">
                You answer on {correct}/6 questions
            </div>
            <div className="result-btn"><a href="https://1urt3t.github.io/swimming-quiz/">Again</a></div>
        </div>
    )
}
export default Result