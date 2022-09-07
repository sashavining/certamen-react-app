
import React, { useState, useEffect } from 'react';

const Timer = ({answer, availablePoints, counter, duration, toggleAnswering, handleAnswer, setCounter}) => {

    useEffect(() => {
        const timer =
          counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
        if (counter === 0) handleAnswer('', answer, availablePoints)
        return () => clearInterval(timer);
      }, [counter]);



    return(
        <div>
            This is a timer!
            { counter }
            {/* <button onClick={startTimer}>Start timer !</button>
            <button onClick={stopTimer}>Stop timer !</button> */}
        </div>
    )
    
    
}

export default Timer

