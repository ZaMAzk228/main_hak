import React, { useState } from "react";
import { quizzz } from "./questions";

function FirstQ() {
    const [ activeQuestion, setActiveQuestion ] = useState(0);
    const [ selectedAnswer, setSelectedAnswer] = useState('')
    const [ Result, setResult] = useState({
        score: 0,
        correctAnswer: 0,
        wrongAnswer: 0
    })

    const { questions } = quizzz
    const { question, choices } = questions[activeQuestion]

    const onClickNext = () => {
        setActiveQuestion((prev) => prev+1)
        setResult ((prev) =>
            selectedAnswer
            ?{
                ...prev,
                score: prev.score + 5,
                correctAnswer: prev.correctAnswer +1
            }
            :{...prev, wrongAnswer: prev.wrongAnswer + 1}
        ) 
    }

    const onAnswerSelected = (answer) => {
        if (answer === selectedAnswer){
            setSelectedAnswer(true)
            console.log('right')
        } else { 
            setSelectedAnswer(false)
            console.log('wrong')
        }
    }

    return(
    <div>
        <div className="container">
            <div className="main_2">
                <h1 className=""> Вопрос: </h1>
                <h2>{question}</h2>
                <ul>
                    {choices.map((answer) =>(
                        <li className="elm" onClick={() => onAnswerSelected(answer)} key={answer}>
                            {answer}
                        </li>
                    ))}
                </ul>
                <button onClick={onClickNext}>Следующий вопрос</button>
            </div>
        </div>
    </div>
    );
}

export default FirstQ;