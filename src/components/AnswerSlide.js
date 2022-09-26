import React, { useState } from 'react';

const AnswerSlide = ({wasCorrect, handleQuestionFlow, correctAnswer, buzzedInString, idealBuzzedInString, questionText, fadeInterval}) => {

    return(
        <>
        <div class="feedback-text">
            {((wasCorrect) && "Correct! Great job.")}
            {((!wasCorrect) && `Incorrect! The answer we were looking for was: ${correctAnswer}`)}
            {(buzzedInString && idealBuzzedInString) && (
                <>
                    <p>{`The question was: ${questionText}`}</p>
                    <p>{`You buzzed in at ${buzzedInString}. The ideal buzz was at ${idealBuzzedInString}`}</p>
                    {/* get the index of the  */}
                </>
            )}
        </div>
{/* question text - passed in as a a prop */}
{/* speed interval to calculate what the difference between buzzed + ideal is */}

        <button onClick={(e) => handleQuestionFlow(e, wasCorrect)}>Next</button>
        </>
    )
}

export default AnswerSlide

