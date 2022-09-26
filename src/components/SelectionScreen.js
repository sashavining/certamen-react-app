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
                <legend>Select a mode:</legend>

                <label class="form-control"><input type="radio" id="Any" name="is-time-trial" value="true" />
                Time Trial</label>

                <label class="form-control"><input type="radio" id="Novice" name="is-time-trial" value="false" />
                Non-time-trial</label>
            </fieldset>
            <button type="submit">Submit</button>
            </form>
            // set whether it is a time trial or not
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