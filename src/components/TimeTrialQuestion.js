
import React, { useState, useEffect } from 'react';
import Timer from './Timer'
import BuzzButton from './BuzzButton'
import AnswerField from './AnswerField'
import AnswerSlide from './AnswerSlide'
import MCAnswerButtons from './MCAnswerButtons'
import FadingQuestionText from './FadingQuestionText'


const TimeTrialQuestion = ({mode, id, currentQuestion, nextQuestion, scorePoints, setBackgroundColor, questionInterval}) => {

    const [message, setMessage] = useState('');
    const [isAnswering, setIsAnswering] = useState(false)
    const [currentAnswer, setCurrentAnswer] = useState('')
    const [counter, setCounter] = useState(40);
    const [isBetweenQuestions, setIsBetweenQuestions] = useState(false)
    const [isCorrect, setIsCorrect] = useState(false)
    const [correctAnswer, setCorrectAnswer] = useState('')
    const [displayString, setDisplayString] = useState('')


    const {question, answer, optimalWord, MCAnswers} = currentQuestion


    const toggleAnswering = () => {
        setIsAnswering(prevIsAnswering => !prevIsAnswering)
    }

    const handleAnswer = (e, answer, availablePoints, providedAnswer) => {
        setCorrectAnswer(answer)
        if (e) {
            e.preventDefault()
        }
        let enteredAnswer;
        if (providedAnswer) {
            enteredAnswer = providedAnswer
        } else {
            enteredAnswer = currentAnswer
        }
        if (enteredAnswer.toLowerCase() === answer.toLowerCase()) {
            setBackgroundColor('background-success')
            scorePoints(availablePoints)
            setIsCorrect(true)
            toggleAnswering()
            setIsBetweenQuestions(true)
        } else {
            setBackgroundColor('background-failure')
            setIsCorrect(false)
            toggleAnswering()
            setIsBetweenQuestions(true)
        }
    }


    const handleQuestionFlow = (e, isAnsweredCorrectly) => {
        e.preventDefault()
        setBackgroundColor('background-secondary')
        if (isAnsweredCorrectly) {
            setCounter(40)
            nextQuestion()
        } else if ((!isAnsweredCorrectly)) {
            setCounter(40)
            nextQuestion()
        }
        setIsBetweenQuestions(false)
        setDisplayString('')
    }

    if (!isBetweenQuestions) {
                return (
                    <>
                        { (isAnswering) && <Timer counter={counter} setCounter={setCounter} duration={40} handleAnswer={handleAnswer} answer={answer} availablePoints={10}/> }
                        <div className='question-text mb-3'>
                        { (!isAnswering) && <FadingQuestionText question={question} toggleAnswering={toggleAnswering} displayString={displayString} setDisplayString={setDisplayString} questionInterval={questionInterval} /> }
                        { (isAnswering) && displayString}
                        </div>                        
                        { !(isAnswering) && <BuzzButton toggleAnswering={toggleAnswering}/> }
                        { (isAnswering) && (mode === 'multiple-choice') && <MCAnswerButtons correctAnswer={answer} incorrectAnswers={MCAnswers.slice(0, 3)} setCurrentAnswer={setCurrentAnswer} handleAnswer={handleAnswer} availablePoints={10} currentAnswer={currentAnswer} />}
                        { (isAnswering) && (mode === 'short-answer') && <AnswerField answer={answer} setMessage={setMessage} scorePoints={scorePoints} availablePoints={10} toggleAnswering={toggleAnswering} handleQuestionFlow={handleQuestionFlow} setCurrentAnswer={setCurrentAnswer} handleAnswer={handleAnswer}/>}           
                    </>
                )
        } else {
        return (<AnswerSlide wasCorrect={isCorrect} handleQuestionFlow={handleQuestionFlow} correctAnswer={correctAnswer} buzzedInString={displayString} optimalWord={optimalWord} questionText={question} questionInterval={questionInterval}/>)
    }
    
}

export default TimeTrialQuestion