import React, { useState } from 'react';
import AnswerButton from './AnswerButton'

const AnswerField = ({setQuestionState, toggleAnswering, answer, availablePoints, scorePoints}) => {
    const [currentAnswer, setCurrentAnswer] = useState('')

    const handleAnswer = (e) => {
        e.preventDefault()
        if (currentAnswer.toLowerCase() === answer.toLowerCase()) {
            scorePoints(availablePoints)
            toggleAnswering()
            setQuestionState(prevQuestionState => prevQuestionState + 1)
            // move to the follow up #1
        }
    }
    return(
        <form onSubmit={(e) => handleAnswer(e)}>
            <input type="text" onChange={(e) => setCurrentAnswer(e.target.value)}></input>
            <AnswerButton/>
        </form>
    )
    
    
}

export default AnswerField

