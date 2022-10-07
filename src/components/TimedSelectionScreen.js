import React, { useState } from 'react';
import CategorySelect from './forms/CategorySelect';
import GameTypeSelect from './forms/GameTypeSelect';
import QuestionIntervalSelect from './forms/QuestionIntervalSelect';

const TimedSelectionScreen = ({setCategory, setMode, setQuestionInterval, startPlaying}) => {
    const [currentCategory, setCurrentCategory] = useState('');
    const [currentMode, setCurrentMode] = useState('')
    const [currentInterval, setCurrentInterval] = useState("500")
    
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
        <div className="rectangle-button-container my-3"><button className='my-3 button-rectangle button-short' type="submit" onClick={(e) => handleSubmit(e)}>Submit</button></div>
       </form>    
       )
}
  

export default TimedSelectionScreen