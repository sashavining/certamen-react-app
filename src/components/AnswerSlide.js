import React, { useState } from 'react';

const AnswerSlide = ({wasCorrect, handleQuestionFlow, correctAnswer}) => {

    console.log()

    return(
        <>
        <div class="feedback-text">
            {((wasCorrect) && "Correct! Great job.")}
            {((!wasCorrect) && `Incorrect! The answer we were looking for was: ${correctAnswer}`)}
        </div>

        <button onClick={(e) => handleQuestionFlow(e, wasCorrect)}>Next</button>
        </>
    )
}

export default AnswerSlide

