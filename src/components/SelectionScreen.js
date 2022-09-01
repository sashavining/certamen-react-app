import ReactDOM from 'react-dom'
import { useQuery } from '@apollo/client'
import React, { useState } from 'react';
import {QUESTION_SET_BY_DIFFICULTY, QUESTION_SET_BY_SOURCE, QUESTION_SET_BY_DIFFICULTY_AND_SOURCE} from '../queries'
import DifficultySelect from './forms/DifficultySelect';
import SourceSelect from './forms/SourceSelect';



const SelectionScreen = ({setSource, setDifficulty, toggleMode, setQuery}) => {
    const [currentDifficulty, setCurrentDifficulty] = useState('');
    const [currentSource, setCurrentSource] = useState('');
    
    const handleSubmit = (e) => {
        e.preventDefault()
        if (currentDifficulty !== '' && currentSource !== '') {
            console.log('QUESTION_SET_BY_DIFFICULTY_AND_SOURCE')
            setQuery(QUESTION_SET_BY_DIFFICULTY_AND_SOURCE)
        } else if (currentDifficulty !== '') {
            console.log('QUESTION_SET_BY_DIFFICULTY')
            setQuery(QUESTION_SET_BY_DIFFICULTY)
        } else if (currentSource !== '') {
            console.log('QUESTION_SET_BY_SOURCE')
            setQuery(QUESTION_SET_BY_SOURCE)
        } else {
            return (
            <form>
                Error: Please enter either a source, or a difficulty, or both :)
                <DifficultySelect setCurrentDifficulty={setCurrentDifficulty} />
                <SourceSelect setCurrentSource={setCurrentSource} />
                <button type="submit" onClick={(e) => handleSubmit(e)}>Submit</button>
               </form> )
        }
        setSource(currentSource)
        setDifficulty(currentDifficulty)
        
        toggleMode('playing')
    }

    // useQuery(QUESTION_SET_BY_DIFFICULTY_AND_SOURCE)
    // currentquestion maximum should be 19
    // When called, useQuery makes the query it receives as a parameter. It returns an object with multiple fields. The field loading is true if the query has not received a response yet. Then the following code gets rendered:
    
    
    return (
       <form onSubmit={(e) => handleSubmit(e)}>
        <DifficultySelect setCurrentDifficulty={setCurrentDifficulty} />
        <SourceSelect setCurrentSource={setCurrentSource} />
        {currentDifficulty}
        {currentSource}
        <button type="submit">Submit</button>
       </form>    )
}
  

export default SelectionScreen