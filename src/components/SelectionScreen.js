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
            <fieldset onChange={(e) => setCurrentSelection(e.target.value)} className="mobile-mb-2">
                <legend className='text-center my-3'><h2>Select a mode:</h2></legend>
                <div class="grid-container columns-2">
                    <Card title={"Timed"} body={"Play a round of 20 time-trial questions. These questions will fade in letter by letter. You will have the opportunity to interrupt them mid-question to practice your question timing."} makeSelection={setCurrentSelection} value={"true"} currentSelection={currentSelection} />
                    <Card title={"Non-timed"} body={"Play a round of 20 questions. Each question will be totally visible at the start of each round and the question timer will load in with the question. Practice answering without the pressure!"} makeSelection={setCurrentSelection} value={"false"} currentSelection={currentSelection} />
                </div>

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