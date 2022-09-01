import React, { useState } from 'react';
import AnswerButton from './AnswerButton'

const AnswerField = ({handleQuestionFlow, toggleAnswering, answer, availablePoints, scorePoints, answerType}) => {
    const [currentAnswer, setCurrentAnswer] = useState('')

    //  this should probably go in the question rather than the answer
    const handleAnswer = (e) => {
        e.preventDefault()
        if (currentAnswer.toLowerCase() === answer.toLowerCase()) {
            scorePoints(availablePoints)
            handleQuestionFlow(true)
            toggleAnswering()
            // setQuestionState(prevQuestionState => prevQuestionState + 1)
        } else {
            handleQuestionFlow(false)
            toggleAnswering()
        }
    }
    return(
        <form onSubmit={(e) => handleAnswer(e)}>
            {answerType}
            <input type="text" onChange={(e) => setCurrentAnswer(e.target.value)}></input>
            <AnswerButton/>
        </form>
    )
    
    
}

export default AnswerField

