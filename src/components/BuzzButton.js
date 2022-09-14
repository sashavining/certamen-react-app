import React, { useState } from 'react';

const BuzzButton = ({toggleAnswering}) => {

    // const nextQuestion = (e) => {
    //     e.preventDefault()
    //     setQuestionState(prevState => prevState + 1)
    // }

    const handleClick = (e) => {
        e.preventDefault()
        toggleAnswering()
    }

    return(
        <button onClick={(e) => handleClick(e)} class="answer-button">
            Buzz
        </button>
    )
    
    
}

export default BuzzButton

