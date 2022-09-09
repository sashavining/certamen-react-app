import React, { useState } from 'react';

const AnswerSlide = ({wasCorrect, handleQuestionFlow, correctAnswer}) => {

    console.log()

    return(
        <>
        {((wasCorrect) && "Correct! Great job.")}
        {((!wasCorrect) && `Incorrect! The answer we were looking for was: ${correctAnswer}`)}
        <button onClick={(e) => handleQuestionFlow(e, wasCorrect)}>Next question</button>
        {/* write a function that moves you to the next thing */}
        </>
    )
}

export default AnswerSlide

