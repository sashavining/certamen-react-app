import { coerceInputValue } from 'graphql';
import React, { useState, useEffect } from 'react';

const MCAnswerButtons = ({setCurrentAnswer, correctAnswer, incorrectAnswers, handleAnswer, availablePoints, currentAnswer}) => {

    const [answerArray, setMCAnswerarray] = useState([])

    useEffect(() => {
      setMCAnswerarray(createAnswerArray(correctAnswer, incorrectAnswers))
    }, []);

    const createAnswerArray = (correctAnswer, incorrectAnswers) => {
      return shuffle([correctAnswer, ...incorrectAnswers])
    }

    const handleClick = (e, answer, correctAnswer, availablePoints) => {
      e.preventDefault()
      handleAnswer('', correctAnswer, availablePoints, answer)
    }

    function shuffle(array) {
        var m = array.length, t, i;
      
        while (m) {
      
          i = Math.floor(Math.random() * m--);
      
          t = array[m];
          array[m] = array[i];
          array[i] = t;
        }
      
        return array;
      }

      
    return (
        <div className="mc-button-container">
          {answerArray.map(answer => {
            return(<button className="mc-button" onClick={(e) => handleClick(e, answer, correctAnswer, availablePoints)}>
              {answer}
              </button>)
          })
          }
        </div>
    )
}

export default MCAnswerButtons
