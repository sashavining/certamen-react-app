import React, { useState } from 'react';
import DifficultySelect from './forms/DifficultySelect';
import SourceSelect from './forms/SourceSelect';
import GameTypeSelect from './forms/GameTypeSelect'

const NonTimedSelectionScreen = ({setSource, setDifficulty, startPlaying, setQuery, setMode}) => {
    const [currentDifficulty, setCurrentDifficulty] = useState('');
    const [currentSource, setCurrentSource] = useState('');
    const [currentMode, setCurrentMode] = useState('')
    
    const handleSubmit = (e) => {
        e.preventDefault()
        if (currentDifficulty === '' && currentSource === '' && currentMode === '') {
            return (
            <form>
                <h2 class="text-center mb-3">Game Select:</h2>
                <DifficultySelect setCurrentDifficulty={setCurrentDifficulty} />
                <SourceSelect setCurrentSource={setCurrentSource} />
                <GameTypeSelect setGameType={setCurrentMode} />

                <button type="submit" onClick={(e) => handleSubmit(e)}>Submit</button>
            </form> )
        }
        setSource(currentSource)
        setDifficulty(currentDifficulty)
        setMode(currentMode)
        startPlaying()
    }    
    
    return (
       <form onSubmit={(e) => handleSubmit(e)}>
        <h2 class="text-center mb-3">Game Select:</h2>
        <DifficultySelect setCurrentDifficulty={setCurrentDifficulty} />
        <SourceSelect setCurrentSource={setCurrentSource} />
        <GameTypeSelect setGameType={setCurrentMode} />
        <div className="rectangle-button-container my-3">
            <button type="submit" class="my-3 center button-rectangle button-short">Submit</button>
        </div>
       </form>    )
}
  

export default NonTimedSelectionScreen