
import React, { useState, useEffect } from 'react';
import SingleQuestion from './SingleQuestion'
import Timer from './Timer'
import BuzzButton from './BuzzButton'
import AnswerField from './AnswerField'
import AnswerSlide from './AnswerSlide'


const Question = ({id, currentQuestion, nextQuestion, scorePoints, setBackgroundColor}) => {


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
    const [counter, setCounter] = useState(60);
    const [isBetweenQuestions, setIsBetweenQuestions] = useState(false)
    const [isCorrect, setIsCorrect] = useState(false)
    const [correctAnswer, setCorrectAnswer] = useState('')

    const {mainQuestion, mainAnswer, firstFollowUpQuestion, firstFollowUpAnswer, secondFollowUpQuestion, secondFollowUpAnswer} = currentQuestion


    const toggleAnswering = () => {
        setIsAnswering(prevIsAnswering => !prevIsAnswering)
    }

    const handleAnswer = (e, answer, availablePoints) => {
        if (e) {
            e.preventDefault()
        }
        setCorrectAnswer(answer)
        if (currentAnswer.toLowerCase() === answer.toLowerCase()) {
            setBackgroundColor('background-green')
            scorePoints(availablePoints)
            setIsCorrect(true)
            // handleQuestionFlow(true) - handle this separately
            toggleAnswering()
            setIsBetweenQuestions(true)
            // set a success state
            // setQuestionState(prevQuestionState => prevQuestionState + 1)
        } else {
            setBackgroundColor('background-red')
            setIsCorrect(false)
            // handleQuestionFlow(false) - handle this separately
            toggleAnswering()
            setIsBetweenQuestions(true)
            // set a fail state
        }
    }


    const handleQuestionFlow = (e, isAnsweredCorrectly) => {
        e.preventDefault()
        setBackgroundColor('background-white')
        if (isAnsweredCorrectly && questionState < 2) {
            setQuestionState(prevQuestionState => prevQuestionState + 1)
            setCounter(60)
        } else if (isAnsweredCorrectly) {
            setQuestionState(0)
            setCounter(60)
            nextQuestion()
        } else if ((!isAnsweredCorrectly) && (questionState === 0 || questionState === 2)) {
            setQuestionState(0)
            setCounter(60)
            nextQuestion()
        } else if ((!isAnsweredCorrectly) && (questionState === 1)) {
            setQuestionState(2)
            setCounter(60)
        }
        setIsBetweenQuestions(false)
    }

    if (!isBetweenQuestions) {
        switch (questionState) {
            case 0:
                return (
                    <>
                        <Timer counter={counter} setCounter={setCounter} duration={60} handleAnswer={handleAnswer} answer={mainAnswer} availablePoints={10}/>
                        <div className='question-text'>

                        { mainQuestion } 
                        </div>                        
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
                    <div className='question-text'>
                    First follow up: { firstFollowUpQuestion } 
                    </div>
                    <br />
                    { !(isAnswering) && <BuzzButton toggleAnswering={toggleAnswering}/> }
                    { (isAnswering) &&  <AnswerField answer={firstFollowUpAnswer} setMessage={setMessage} scorePoints={scorePoints} availablePoints={5} setQuestionState={setQuestionState} toggleAnswering={toggleAnswering} handleQuestionFlow={handleQuestionFlow} setCurrentAnswer={setCurrentAnswer} handleAnswer={handleAnswer}/>}
                </>
                    )
            case 2: 
                return (
                    <>
                    <Timer counter={counter} setCounter={setCounter} duration={20} handleAnswer={handleAnswer} answer={secondFollowUpAnswer} avialablePoints={5} />
                    <div className='question-text'>
                    Second follow up:  { secondFollowUpQuestion } 

                    </div>
                    { !(isAnswering) && <BuzzButton toggleAnswering={toggleAnswering}/> }
                    { (isAnswering) &&  <AnswerField answer={secondFollowUpAnswer} setMessage={setMessage} scorePoints={scorePoints} availablePoints={5} setQuestionState={setQuestionState} toggleAnswering={toggleAnswering} handleQuestionFlow={handleQuestionFlow} setCurrentAnswer={setCurrentAnswer} handleAnswer={handleAnswer}/>}
                </>                )
            case 3:
                return ("u lose")
            default:
                return (<>Deeeefault!</>)
        }    
    } else {
        return (<AnswerSlide wasCorrect={isCorrect} handleQuestionFlow={handleQuestionFlow} correctAnswer={correctAnswer} />)
    }
    
}

export default Question