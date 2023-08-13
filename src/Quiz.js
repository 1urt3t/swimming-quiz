import React, { useState } from "react";
import Start from "./components/Start";
import Game from "./components/Game";
import Result from "./components/Result";
import question from "./components/questions";

const Quiz = () => {
    let [step, setStep] = useState(false)
    const setStepZero = () => {
        setStep(0)
    }
    const questionStep = question[step]
    const [answerA, setAnswerA] = useState(null);
    const [correct, setCorrect] = useState(0);

    const answerAFn = (index) => {
        setAnswerA(index)
    }
    const btnNext = () => {
        if(answerA === questionStep.correct) {
            setCorrect(correct+1)
        }
        if (answerA != null) {
            setAnswerA(null)
            setStep(step + 1)
        }
    }
    return (
        <div className="Quiz">
            {
                step === false ? <Start setStepZero={setStepZero}/> : step !== question.length ? <Game answerA={answerA} step={step} answerAFn={answerAFn} btnNext={btnNext} questionStep={questionStep}/> : <Result correct={correct}/>
            }
        </div>
    )
}

export default Quiz