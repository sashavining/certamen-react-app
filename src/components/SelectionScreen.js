import React, { useState } from 'react';
import NonTimedSelectionScreen from './NonTimedSelectionScreen';
import TimedSelectionScreen from './TimedSelectionScreen'

const SelecionScreen = ({setCategory, setSource, setDifficulty, startPlaying, setMode, setIsTimeTrial, isTimeTrial, setQuestionInterval}) => {
    
    const [currentSelection, setCurrentSelection] = useState('')

    const handleFormSubmit = (e) => {
        e.preventDefault()
        setIsTimeTrial((currentSelection === "true") ? true : false)
    }

    return (<>
        {(isTimeTrial === null) && (
            <form onSubmit={(e) => handleFormSubmit(e)}>
            <fieldset onChange={(e) => setCurrentSelection(e.target.value)}>
                <legend className='text-center my-3'><h2>Select a mode:</h2></legend>

                <label className="form-control">
                    <input class='custom-radio' type="radio" id="Any" name="is-time-trial" value="true" />
                    Time Trial
                </label>

                <label className="form-control">
                    <input class='custom-radio' type="radio" id="Novice" name="is-time-trial" value="false" />
                    Non-time-trial
                </label>
            </fieldset>
            <button className='my-3' type="submit">Submit</button>
            </form>
        )} 
        {(isTimeTrial === false) && (
            <NonTimedSelectionScreen 
                setSource={setSource}
                setDifficulty={setDifficulty}
                startPlaying={startPlaying}
                setMode={setMode}/>       
            )}
         {(isTimeTrial === true) && (
            <TimedSelectionScreen 
                setCategory={setCategory}
                startPlaying={startPlaying}
                setMode={setMode}
                setQuestionInterval={setQuestionInterval}/>
        )}
        </>
    )
}
  

export default SelecionScreen