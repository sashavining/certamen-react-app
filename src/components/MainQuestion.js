
import React, { useState } from 'react';
import BuzzButton from './BuzzButton'
import AnswerField from './AnswerField'

const MainQuestion = ({setQuestionState, question, answer, availablePoints, setMessage, scorePoints}) => {
    const [isAnswering, setIsAnswering] = useState(false)

    const toggleAnswering = () => {
        setIsAnswering(prevIsAnswering => !prevIsAnswering)
    }

    return(
        <>
            { question }
            { answer }
            <br />
            <br />
            { !(isAnswering) && <BuzzButton toggleAnswering={toggleAnswering}/> }
            { (isAnswering) && <AnswerField answer={answer} setMessage={setMessage} scorePoints={scorePoints} availablePoints={availablePoints} setQuestionState={setQuestionState} toggleAnswering={toggleAnswering}/>}
        </>
    )
    
    
}

export default MainQuestion

