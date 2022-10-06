import React, { useState } from 'react';
import CategorySelect from './forms/CategorySelect';
import GameTypeSelect from './forms/GameTypeSelect';
import QuestionIntervalSelect from './forms/QuestionIntervalSelect';

const TimedSelectionScreen = ({setCategory, setMode, setQuestionInterval, startPlaying}) => {
    const [currentCategory, setCurrentCategory] = useState('');
    const [currentMode, setCurrentMode] = useState('')
    const [currentInterval, setCurrentInterval] = useState(0)
    
    const handleSubmit = (e) => {
        e.preventDefault()
        if (currentMode === '') {
            return (
            <form>
                <CategorySelect setCurrentCategory={setCurrentCategory} />
                <GameTypeSelect setGameType={setCurrentMode} />
                <QuestionIntervalSelect setCurrentInterval={setCurrentInterval} />

                <button type="submit" onClick={(e) => handleSubmit(e)}>Submit</button>
            </form> )
        }
        setCategory(currentCategory)
        setMode(currentMode)
        setQuestionInterval(currentInterval)
        startPlaying()    
        
    }    
    
    return (
       <form onSubmit={(e) => handleSubmit(e)}>
        <h2 class="text-center mb-3">Game Select:</h2>
        <CategorySelect setCurrentCategory={setCurrentCategory} />
        <GameTypeSelect setGameType={setCurrentMode} />
        <QuestionIntervalSelect setCurrentInterval={setCurrentInterval} />

        <button  class='my-3' type="submit" onClick={(e) => handleSubmit(e)}>Submit</button>
       </form>    
       )
}
  

export default TimedSelectionScreen