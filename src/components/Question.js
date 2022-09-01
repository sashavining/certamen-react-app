
import React, { useState } from 'react';
import MainQuestion from './MainQuestion'
import FollowUpQuestion from './FollowUpQuestion'


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

    const {mainQuestion, mainAnswer, firstFollowUpQuestion, firstFollowUpAnswer, secondFollowUpQuestion, secondFollowUpAnswer} = currentQuestion
    switch (questionState) {
        case 0:
            return (<MainQuestion setQuestionState={setQuestionState} question={mainQuestion} answer={mainAnswer} availablePoints = {10} setMessage={setMessage} scorePoints={scorePoints}/>)
        case 1:
            return (<FollowUpQuestion setQuestionState={setQuestionState} question={firstFollowUpQuestion} answer={firstFollowUpAnswer} availablePoints={5} setMessage={setMessage} scorePoints={scorePoints} />)
        case 2: 
            return (<FollowUpQuestion setQuestionState={setQuestionState} question={secondFollowUpQuestion} answer={secondFollowUpAnswer} availablePoints={5} setMessage={setMessage} nextQuestion={nextQuestion} scorePoints={scorePoints}/>)
        default:
            return (<></>)
    }
    
}

export default Question