import React from 'react';

const BuzzButton = ({toggleAnswering}) => {

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

