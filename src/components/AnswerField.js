import React, { useState } from 'react';
import AnswerButton from './AnswerButton'

const AnswerField = ({handleAnswer, setCurrentAnswer, handleQuestionFlow, toggleAnswering, answer, availablePoints, scorePoints, answerType}) => {

    //  this should probably go in the question rather than the answer
   
    return(
        <form onSubmit={(e) => handleAnswer(e, answer, availablePoints)}>
            <input type="text" onChange={(e) => setCurrentAnswer(e.target.value)}></input>
            <AnswerButton/>
        </form>
    )
    
    
}

export default AnswerField

