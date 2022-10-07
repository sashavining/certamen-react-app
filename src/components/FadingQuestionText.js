import { buildQueryFromSelectionSet } from '@apollo/client/utilities';
import React, { useState, useEffect, useRef } from 'react';


const FadingQuestionText = ({question, toggleAnswering, setDisplayString, displayString, questionInterval}) => {
    useEffect(() => {
        setDisplayString('');
        let index = 0;

        let addChar = setInterval(tick, questionInterval);

        function tick() {
            setDisplayString(() => question.slice(0, index+1));
            index++;
            if (index === question.length - 1) {
                clearInterval(addChar)
                toggleAnswering()
            } 
        }
        return () => clearInterval(addChar);

    }, [question])

    return(displayString)
} 

export default FadingQuestionText