import React, { useState } from 'react';

const AnswerSlide = ({wasCorrect, handleQuestionFlow}) => {

    console.log()

    return(
        <>
        {((wasCorrect) && "Correct! Great job.")}
        {((!wasCorrect) && "Wrong! Maybe next time?.")}
        <button onClick={(e) => handleQuestionFlow(e, wasCorrect)}>Next question</button>
        {/* write a function that moves you to the next thing */}
        </>
    )
}

export default AnswerSlide

