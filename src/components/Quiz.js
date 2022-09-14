import ReactDOM from 'react-dom'
import { useQuery } from '@apollo/client'
import React, { useState } from 'react';
import {QUESTION_SET_BY_DIFFICULTY_AND_SOURCE} from '../queries'
import Question from './Question'


const Quiz = ({setScore, difficulty, source, endPlaying, setCurrentPoints, currentPoints, setBackgroundColor}) => {
    const [currentQuestionNumber, setCurrentQuestionNumber] = useState(0);
    const [time, setTime] = useState(60000);

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

    const { loading, error, data } = useQuery(QUESTION_SET_BY_DIFFICULTY_AND_SOURCE, 
        {variables: {difficultyToSearch: difficulty, sourceToSearch: source}});


    if (loading) return 'Loading...';
    if (error) return `Error! ${error.message}`;

    let currentQuestion = data.twentyQuestionsBySourceOrDifficulty[currentQuestionNumber]
    return (
        <>
        <Question currentQuestion={currentQuestion} nextQuestion={nextQuestion} scorePoints={scorePoints} setBackgroundColor={setBackgroundColor} />
        <div className='points-container text-center my-3'>
            Score: {currentPoints}
        </div>
        </>
    )
}
  
export default Quiz