import React from "react";
import question from "./questions";

const Game = ({ answerAFn , btnNext , questionStep , answerA , step}) => {
    return (
        <div className="Game">
            <div className="header">
                <div className="header-text">{questionStep.question}</div>
                <div className="header-text">{step + 1}/6</div>
            </div>
            <div className="answers">
                {questionStep.answers.map((item, index) => (
                    <div className={`answer ${answerA === index ? 'answer-active' : ''}`} key={index} onClick={() => answerAFn(index)}>
                        {item}
                    </div>
                ))}
            </div>
            <div className="btn-next">
                {
                    step != question.length-1 ? <button onClick={btnNext}>Next</button> : <button onClick={btnNext}>Finish</button>
                }
            </div>
        </div>
    );
};

export default Game;
