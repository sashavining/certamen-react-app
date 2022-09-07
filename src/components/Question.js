
import React, { useState } from 'react';
import SingleQuestion from './SingleQuestion'


const Question = ({id, currentQuestion, nextQuestion, scorePoints}) => {


    // 0 represents main question being asked (+ timer)
    // 0 represents main question being answered (+ timer)
    // 0 represents displaying main question answer (timer paused)
    // 1 represents follow up 1 question being asked (+ timer)
    // 1 represents follow up 1 question being answered (+ timer)
    // 1 represents displaying follow up 1 question answer (timer paused)
    // 2 represents follow up 2 question being asked (+ timer)
    // 2 represents follow up 2 question being answered (+ timer)
    // 2 represents displaying follow up 2 question answer (timer paused)

    const [questionState, setQuestionState] = useState(0);
    const [message, setMessage] = useState('');

    const handleQuestionFlow = (isAnsweredCorrectly) => {
        if (isAnsweredCorrectly && questionState < 2) {
            setQuestionState(prevQuestionState => prevQuestionState + 1)
        } else if (isAnsweredCorrectly) {
            nextQuestion()
            setQuestionState(0)
        } else if ((!isAnsweredCorrectly) && (questionState === 0 || questionState === 2)) {
            nextQuestion()
            setQuestionState(0)
        } else if ((!isAnsweredCorrectly) && (questionState === 1)) {
            setQuestionState(2)
        }
    }

    const {mainQuestion, mainAnswer, firstFollowUpQuestion, firstFollowUpAnswer, secondFollowUpQuestion, secondFollowUpAnswer} = currentQuestion
    switch (questionState) {

        case 0:
            return (<SingleQuestion setQuestionState={setQuestionState} question={mainQuestion} answer={mainAnswer} availablePoints = {10} setMessage={setMessage} scorePoints={scorePoints} questionType="main" handleQuestionFlow={handleQuestionFlow}/>)
        case 1:
            return (<SingleQuestion setQuestionState={setQuestionState} question={firstFollowUpQuestion} answer={firstFollowUpAnswer} availablePoints={5} setMessage={setMessage} scorePoints={scorePoints} questionType="followUpOne" handleQuestionFlow={handleQuestionFlow}/>)
        case 2: 
            return (<SingleQuestion setQuestionState={setQuestionState} question={secondFollowUpQuestion} answer={secondFollowUpAnswer} availablePoints={5} setMessage={setMessage} nextQuestion={nextQuestion} scorePoints={scorePoints} questionType="followUpTwo" handleQuestionFlow={handleQuestionFlow}/>)
        case 3:
            return ("u lose")
        default:
            return (<>Deeeefault!</>)
    }
    
}

export default Question