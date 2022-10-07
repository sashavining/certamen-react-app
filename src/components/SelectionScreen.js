import React, { useState } from 'react';
import NonTimedSelectionScreen from './NonTimedSelectionScreen';
import TimedSelectionScreen from './TimedSelectionScreen'
import Card from './Card'

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

                <Card title={"Placeholder true :)"} body={"Body text placeholder :)"} makeSelection={setCurrentSelection} value={"true"} currentSelection={currentSelection} />
                <Card title={"Placeholder false :)"} body={"Body text placeholder :)"} makeSelection={setCurrentSelection} value={"false"} currentSelection={currentSelection} />

            </fieldset>
            <div className="rectangle-button-container">
                <button className='my-3 button-rectangle button-short' type="submit">Submit</button>
            </div>
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