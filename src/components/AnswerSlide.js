import React from 'react';

const AnswerSlide = ({wasCorrect, handleQuestionFlow, correctAnswer, buzzedInString, optimalWord, questionText, questionInterval}) => {

    const findBuzzInIndex = (word, questionText) => {
        let startingIndex = questionText.indexOf(word)
        return (startingIndex + word.length)
    }

    const calculateDifferenceBetweenIdealAndActualInSeconds = (optimalWord, questionText, actualBuzzedInString, intervalInMs) => {
        let idealBuzzedInIndex = findBuzzInIndex(optimalWord, questionText)
        return (((actualBuzzedInString.length - 1) - idealBuzzedInIndex) * intervalInMs) / 1000
    }

    const removePunctuation = (string) => {
        let punctuationLessString = string.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"")
        return punctuationLessString.replace(/\s{2,}/g," ");
    }

    console.log(buzzedInString, optimalWord)

    const differenceBetweenIdealAndActualBuzz = (optimalWord) ? calculateDifferenceBetweenIdealAndActualInSeconds(optimalWord, questionText, buzzedInString, questionInterval) : ''

    return(
        <>
        <div class="feedback-text">
            {((wasCorrect) && "Correct! Great job.")}
            {((!wasCorrect) && `Incorrect! The answer we were looking for was: ${correctAnswer}`)}
            {(typeof(buzzedInString) !== "undefined" && typeof(optimalWord) !== "undefined") && (
                <>
                    <p className='my-1'>{`The question was: ${questionText}`}</p>
                    <p className='my-1'>{`The ideal buzz was at ${removePunctuation(optimalWord)}`}</p>
                    <p className='my-1'>{(differenceBetweenIdealAndActualBuzz === 0) && `You buzzed in at the optimal time! Congratulations`}</p>
                    <p className='my-1'>
                        {(!(differenceBetweenIdealAndActualBuzz === 0)) && (<>
                        <span>{"You buzzed in"}</span>
                        <span className="text-green">{(differenceBetweenIdealAndActualBuzz < 0) && ` ${Math.abs(differenceBetweenIdealAndActualBuzz)} seconds earlier` }</span>
                        <span className="text-red"> {(differenceBetweenIdealAndActualBuzz > 0) && ` ${differenceBetweenIdealAndActualBuzz} seconds later`} </span>
                        <span>{"than optimal!"}</span>
                        </>)
                        }
                    </p>
                </>
            )}
        </div>
        <button onClick={(e) => handleQuestionFlow(e, wasCorrect)}>Next</button>
        </>
    )
}

export default AnswerSlide

