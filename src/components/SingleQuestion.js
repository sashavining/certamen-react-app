
import React, { useState } from 'react';
import BuzzButton from './BuzzButton'
import AnswerField from './AnswerField'

const SingleQuestion = ({nextQuestion, setQuestionState, question, answer, availablePoints, setMessage, scorePoints, questionType, handleQuestionFlow}) => {
    const [isAnswering, setIsAnswering] = useState(false)

    const toggleAnswering = () => {
        setIsAnswering(prevIsAnswering => !prevIsAnswering)
    }

    return(
        <>
            { questionType }
            <br />
            { question } 
            { answer }
            <br />
            <br />
            { !(isAnswering) && <BuzzButton toggleAnswering={toggleAnswering}/> }
            { (isAnswering) && <AnswerField answer={answer} setMessage={setMessage} scorePoints={scorePoints} availablePoints={availablePoints} setQuestionState={setQuestionState} toggleAnswering={toggleAnswering} answerType={questionType} handleQuestionFlow={handleQuestionFlow}/>}
        </>
    )
    
    
}

export default SingleQuestion

