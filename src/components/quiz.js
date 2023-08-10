import React, { useState } from "react";

const questions = [
    {
        title: 'Сколько стилей в плавание?',
        answers: ['3', '2', '4'],
        correct: 2
    },
    {
        title: 'Какой самый быстрый стиль?',
        answers: ['Брасс', 'Кроль', 'Бат'],
        correct: 1
    },
    {
        title: 'Какой самый медленный стиль?',
        answers: ['Брасс', 'Кроль', 'Бат'],
        correct: 0
    }
]

function Result({correct}) {
    return (
        <div className="result">
            <h2>Вы отгадали {correct} раза из {questions.length}</h2>
            <a href="/"><button>Попробовать снова</button></a>
        </div>
    )
}
function Game({ question , onClickAnswer }) {
    return (
        <div className="game">
            <h2>{question.title}</h2>
            <div className="questions">
                {
                    question.answers.map((text ,index) => (
                    <div key={text} onClick={() => onClickAnswer(index)}>{text}</div>
                    ))
                }
            </div>
        </div>
    )
}

const Quiz = () => {
    const [step, setStep] = useState(0);
    const [correct, setCorrect] = useState(0)
    const question = questions[step]

    const onClickAnswer = (index) => {
        setStep(step + 1)
        if (index == question.correct) {
            setCorrect(correct + 1)
        }
    }

    return (
        <div className="quiz">
            {
                step != questions.length ? (<Game question={question} onClickAnswer={onClickAnswer}/>) : (<Result correct={correct}/>)
            }
            
        </div>
        
    )
}
export default Quiz