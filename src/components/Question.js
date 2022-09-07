
import React, { useState, useEffect } from 'react';
import SingleQuestion from './SingleQuestion'
import Timer from './Timer'
import BuzzButton from './BuzzButton'
import AnswerField from './AnswerField'


const Question = ({id, currentQuestion, nextQuestion, scorePoints}) => {


    // 0 represents main question being asked (+ timer)
    // 0 represents main question being answered (+ timer)
    // 0 represents displaying main question answer (timer paused)
    // 1 represents follow up 1 question being asked (+ timer)
    // 1 represents follow up 1 question being answered (+ timer)
    // 1 represents displaying follow up 1 question answer (timer paused)
    // 2 represents follow up 2 question being asked (+ timer)
    // 2 represents follow up 2 question being answered (+ timer)
    // 2 represents displaying follow up 2 question answer (timer paused)

    const [questionState, setQuestionState] = useState(0);
    const [message, setMessage] = useState('');
    const [isAnswering, setIsAnswering] = useState(false)
    const [currentAnswer, setCurrentAnswer] = useState('')
    const [counter, setCounter] = useState(10);


    const {mainQuestion, mainAnswer, firstFollowUpQuestion, firstFollowUpAnswer, secondFollowUpQuestion, secondFollowUpAnswer} = currentQuestion


    const toggleAnswering = () => {
        setIsAnswering(prevIsAnswering => !prevIsAnswering)
    }

    const handleAnswer = (e, answer, availablePoints) => {
        if (e) {
            e.preventDefault()
        }
        if (currentAnswer.toLowerCase() === answer.toLowerCase()) {
            scorePoints(availablePoints)
            handleQuestionFlow(true)
            toggleAnswering()
            // set a success state
            // setQuestionState(prevQuestionState => prevQuestionState + 1)
        } else {
            handleQuestionFlow(false)
            toggleAnswering()
            // set a fail state
        }
    }

    useEffect(() => {
        setCounter(10)
        // return () => setCounter(0);
      }, [questionState, currentQuestion]);



    const handleQuestionFlow = (isAnsweredCorrectly) => {
        if (isAnsweredCorrectly && questionState < 2) {
            setQuestionState(prevQuestionState => prevQuestionState + 1)
        } else if (isAnsweredCorrectly) {
            nextQuestion()
            setQuestionState(0)
        } else if ((!isAnsweredCorrectly) && (questionState === 0 || questionState === 2)) {
            nextQuestion()
            setQuestionState(0)
        } else if ((!isAnsweredCorrectly) && (questionState === 1)) {
            setQuestionState(2)
        }
    }

    switch (questionState) {

        case 0:
            return (
                <>
                    <Timer counter={counter} setCounter={setCounter} duration={10} handleAnswer={handleAnswer} answer={mainAnswer} availablePoints={10}/>
            
                    { mainQuestion } 
                    { mainAnswer }
                    <br />
                    <br />
                    { !(isAnswering) && <BuzzButton toggleAnswering={toggleAnswering}/> }
                    { (isAnswering) &&  <AnswerField answer={mainAnswer} setMessage={setMessage} scorePoints={scorePoints} availablePoints={10} setQuestionState={setQuestionState} toggleAnswering={toggleAnswering} handleQuestionFlow={handleQuestionFlow} setCurrentAnswer={setCurrentAnswer} handleAnswer={handleAnswer}/>}
                </>
            )
        case 1:
            return (
            <>
                <Timer counter={counter} setCounter={setCounter} duration={20} handleAnswer={handleAnswer} answer={firstFollowUpAnswer} avialablePoints={5} />
        
                { firstFollowUpQuestion } 
                { firstFollowUpAnswer }
                <br />
                <br />
                { !(isAnswering) && <BuzzButton toggleAnswering={toggleAnswering}/> }
                { (isAnswering) &&  <AnswerField answer={firstFollowUpAnswer} setMessage={setMessage} scorePoints={scorePoints} availablePoints={5} setQuestionState={setQuestionState} toggleAnswering={toggleAnswering} handleQuestionFlow={handleQuestionFlow} setCurrentAnswer={setCurrentAnswer} handleAnswer={handleAnswer}/>}
            </>
                )
        case 2: 
            return (
                <>
                <Timer counter={counter} setCounter={setCounter} duration={20} handleAnswer={handleAnswer} answer={secondFollowUpAnswer} avialablePoints={5} />
        
                { secondFollowUpQuestion } 
                { secondFollowUpAnswer }
                <br />
                <br />
                { !(isAnswering) && <BuzzButton toggleAnswering={toggleAnswering}/> }
                { (isAnswering) &&  <AnswerField answer={secondFollowUpAnswer} setMessage={setMessage} scorePoints={scorePoints} availablePoints={5} setQuestionState={setQuestionState} toggleAnswering={toggleAnswering} handleQuestionFlow={handleQuestionFlow} setCurrentAnswer={setCurrentAnswer} handleAnswer={handleAnswer}/>}
            </>                )
        case 3:
            return ("u lose")
        default:
            return (<>Deeeefault!</>)
    }
    
}

export default Question