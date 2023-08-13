import React from "react";
const Result = ({correct}) => {
    return (
        <div className="Result">
            <div className="result-text">
                You answer on {correct}/4 questions
            </div>
            <div className="result-btn"><a href="/">Again</a></div>
        </div>
    )
}
export default Result