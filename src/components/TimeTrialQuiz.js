import ReactDOM from 'react-dom'
import { useQuery } from '@apollo/client'
import React, { useState } from 'react';
import {TIME_TRIAL_QUESTION_SET_BY_TOPIC} from '../queries'
import TimeTrialQuestion from './TimeTrialQuestion'


const TimeTrialQuiz = ({mode, category, endPlaying, setCurrentPoints, currentPoints, setBackgroundColor, questionInterval}) => {
    const [currentQuestionNumber, setCurrentQuestionNumber] = useState(0);

    const nextQuestion = () => {
        if (currentQuestionNumber < 19) {
            setCurrentQuestionNumber(prevQuestionNumber => prevQuestionNumber + 1)
        } else {
            endPlaying()
        }
    }

    const scorePoints = (points) => {
        setCurrentPoints(prevPoints => prevPoints + points)
    }

    const { loading, error, data } = useQuery(TIME_TRIAL_QUESTION_SET_BY_TOPIC, 
        {variables: {categoryToSearch: category}});


    if (loading) return 'Loading...';
    if (error) return `Error! ${error.message}`;

    let currentQuestion = data.twentyTimeTrialQuestionsByCategory[currentQuestionNumber]
    return (
        <TimeTrialQuestion mode={mode} currentQuestion={currentQuestion} nextQuestion={nextQuestion} scorePoints={scorePoints} setBackgroundColor={setBackgroundColor} questionInterval={questionInterval} />    
    )
}
  
export default TimeTrialQuiz