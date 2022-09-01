import ReactDOM from 'react-dom'
import { useQuery } from '@apollo/client'
import React, { useState } from 'react';
import {QUESTION_SET_BY_DIFFICULTY_AND_SOURCE} from '../queries'
import Question from './Question'


const Quiz = ({setScore, difficulty, source}) => {
    const [currentQuestionNumber, setCurrentQuestionNumber] = useState(0);
    const [time, setTime] = useState(60000);
    const [currentPoints, setCurrentPoints] = useState(0)

    const nextQuestion = () => {
        setCurrentQuestionNumber(prevQuestionNumber => prevQuestionNumber + 1)
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
        {currentPoints}
        <br />
        <br />
        <Question currentQuestion={currentQuestion} nextQuestion={nextQuestion} scorePoints={scorePoints} />
        </>
    )
}
  
export default Quiz