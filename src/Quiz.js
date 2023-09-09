import React, { useState } from "react";
import Start from "./components/Start";
import Game from "./components/Game";
import Result from "./components/Result";
import question from "./components/questions";
import Stats from "./components/Stats";

const Quiz = () => {
    let [step, setStep] = useState(false)
    const setStepZero = () => {
        setStep(0)
    }
    const questionStep = question[step]
    const [answerA, setAnswerA] = useState(null);
    const [correct, setCorrect] = useState(0);
    const [correctList, setCorrectList] = useState([])
    const [resultAn, setResultAnswer] = useState(0)

    const answerAFn = (index) => {
        setAnswerA(index)
    }
    const btnNext = () => {
        if(answerA === questionStep.correct) {
            setCorrect(correct+1)
            setCorrectList(correctList.concat(1))
        } else {
            setCorrectList(correctList.concat(0))
        }
        if (answerA != null) {
            setAnswerA(null)
            setStep(step + 1)
        }
    }
    const resultAnswer = () => {
        setResultAnswer(resultAn+1)
    }
    return (
        <div className="Quiz">
            {
            step === false ? <Start setStepZero={setStepZero}/> : step !== question.length ? <Game correctList={correctList}answerA={answerA} step={step} answerAFn={answerAFn} btnNext={btnNext} questionStep={questionStep}/> : resultAn == 1 ? <Stats/>:<Result correct={correct} resultAnswer={resultAnswer}/>
            }
        </div>
    )
}

export default Quiz