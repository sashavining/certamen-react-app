
import React, { useState, useEffect } from 'react';

const Timer = ({answer, availablePoints, counter, duration, toggleAnswering, handleAnswer, setCounter}) => {

    useEffect(() => {
        const timer =
          counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
        if (counter === 0) handleAnswer('', answer, availablePoints)
        return () => clearInterval(timer);
      }, [counter]);



    return(
        <div className='timer'>
            { counter }
        </div>
    )
    
    
}

export default Timer

