import ReactDOM from 'react-dom'
import { useQuery } from '@apollo/client'
import React, { useState } from 'react';
import {MC_QUESTION_SET_BY_DIFFICULTY_AND_SOURCE} from '../queries'
import Question from './Question'


const Quiz = ({mode, difficulty, source, endPlaying, setCurrentPoints, scorePoints, currentPoints, setBackgroundColor}) => {
    const [currentQuestionNumber, setCurrentQuestionNumber] = useState(0);

    const nextQuestion = () => {
        if (currentQuestionNumber < 19) {
            setCurrentQuestionNumber(prevQuestionNumber => prevQuestionNumber + 1)
        } else {
            endPlaying()
        }
    }

    const { loading, error, data } = useQuery(MC_QUESTION_SET_BY_DIFFICULTY_AND_SOURCE, 
        {   fetchPolicy: 'cache-and-network',
            variables: {difficultyToSearch: difficulty, sourceToSearch: source}});


    if (loading) return 'Loading...';
    if (error) return `Error! ${error.message}`;

    let currentQuestion = data.twentyMCQuestionsBySourceOrDifficulty[currentQuestionNumber]
    return (
        <Question mode={mode} currentQuestion={currentQuestion} nextQuestion={nextQuestion} scorePoints={scorePoints} setBackgroundColor={setBackgroundColor} />
    )
}
  
export default Quiz