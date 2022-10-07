import React, { useState } from 'react';
import AnswerButton from './AnswerButton'

const AnswerField = ({handleAnswer, setCurrentAnswer, handleQuestionFlow, toggleAnswering, answer, availablePoints, scorePoints, answerType}) => {

   
    return(
        <form onSubmit={(e) => handleAnswer(e, answer, availablePoints)} className='answer-field'>
            <input type="text" className="input-per60 mb-3" onChange={(e) => setCurrentAnswer(e.target.value)}></input>
            <AnswerButton/>
        </form>
    )
    
    
}

export default AnswerField

