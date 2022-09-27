import React, { useState } from 'react';

const AnswerSlide = ({wasCorrect, handleQuestionFlow, correctAnswer, buzzedInString, optimalWord, questionText, questionInterval}) => {

    const findBuzzInIndex = (word, questionText) => {
        let startingIndex = questionText.indexOf(word)
        return (startingIndex + word.length)
    }

    const calculateDifferenceBetweenIdealAndActualInSeconds = (optimalWord, questionText, actualBuzzedInString, intervalInMs) => {
        let idealBuzzedInIndex = findBuzzInIndex(optimalWord, questionText)
        console.log(idealBuzzedInIndex * intervalInMs)
        return (((actualBuzzedInString.length - 1) - idealBuzzedInIndex) * intervalInMs) / 1000
    }

    const differenceBetweenIdealAndActualBuzz = calculateDifferenceBetweenIdealAndActualInSeconds(optimalWord, questionText, buzzedInString, questionInterval)
    
    const lastWordOfActualBuzz = buzzedInString.split(" ").pop()

    return(
        <>
        <div class="feedback-text">
            {((wasCorrect) && "Correct! Great job.")}
            {((!wasCorrect) && `Incorrect! The answer we were looking for was: ${correctAnswer}`)}
            {(buzzedInString && optimalWord) && (
                <>
                    <p>{`The question was: ${questionText}`}</p>
                    <p>{`The ideal buzz was at ${optimalWord.trim()}`}</p>
                    <p>{(differenceBetweenIdealAndActualBuzz === 0) && `You buzzed in at the optimal time! Congratulations`}</p>
                    <p>{(differenceBetweenIdealAndActualBuzz > 0) && `You buzzed in ${differenceBetweenIdealAndActualBuzz} seconds later than optimal!`}</p>
                    <p>{(differenceBetweenIdealAndActualBuzz < 0) && `You buzzed in ${Math.abs(differenceBetweenIdealAndActualBuzz)} seconds earlier than optimal!`}</p>
                </>
            )}
        </div>
        <button onClick={(e) => handleQuestionFlow(e, wasCorrect)}>Next</button>
        </>
    )
}

export default AnswerSlide

