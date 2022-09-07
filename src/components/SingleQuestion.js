
import React, { useEffect, useState } from 'react';
import BuzzButton from './BuzzButton'
import AnswerField from './AnswerField'
import Timer from './Timer'

const SingleQuestion = ({nextQuestion, setQuestionState, question, answer, availablePoints, setMessage, scorePoints, questionType, handleQuestionFlow}) => {
    const [isAnswering, setIsAnswering] = useState(false)
    const [currentAnswer, setCurrentAnswer] = useState('')


    const toggleAnswering = () => {
        setIsAnswering(prevIsAnswering => !prevIsAnswering)
    }

    const handleAnswer = (e) => {
        if (e) {
            e.preventDefault()
        }
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
    // this is not how you do this. but how do you do it?

    return(
        <>
            <Timer duration={10} handleTimerEnd={handleQuestionFlow} handleAnswer={handleAnswer} />
            { questionType }
            <br />
            { question } 
            { answer }
            <br />
            <br />
            { !(isAnswering) && <BuzzButton toggleAnswering={toggleAnswering}/> }
            { (isAnswering) &&  <AnswerField answer={answer} setMessage={setMessage} scorePoints={scorePoints} availablePoints={availablePoints} setQuestionState={setQuestionState} toggleAnswering={toggleAnswering} answerType={questionType} handleQuestionFlow={handleQuestionFlow} setCurrentAnswer={setCurrentAnswer} handleAnswer={handleAnswer}/>}
        </>
    )
    
    
}

export default SingleQuestion

