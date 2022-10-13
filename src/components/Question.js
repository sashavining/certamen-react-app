
import React, { useState } from 'react';
import Timer from './Timer'
import BuzzButton from './BuzzButton'
import AnswerField from './AnswerField'
import AnswerSlide from './AnswerSlide'
import MCAnswerButtons from './MCAnswerButtons'


const Question = ({mode, id, currentQuestion, nextQuestion, scorePoints, setBackgroundColor}) => {


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
    const [isAnswering, setIsAnswering] = useState(false)
    const [currentAnswer, setCurrentAnswer] = useState('')
    const [counter, setCounter] = useState(60);
    const [isBetweenQuestions, setIsBetweenQuestions] = useState(false)
    const [isCorrect, setIsCorrect] = useState(false)
    const [correctAnswer, setCorrectAnswer] = useState('')

    const {mainQuestion, mainAnswer, firstFollowUpQuestion, firstFollowUpAnswer, secondFollowUpQuestion, secondFollowUpAnswer, MCAnswers} = currentQuestion


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
                        <div className="answer-interface">
                            { !(isAnswering) && <BuzzButton toggleAnswering={toggleAnswering}/> }
                            { (isAnswering) && (mode === 'multiple-choice') && <MCAnswerButtons correctAnswer={mainAnswer} incorrectAnswers={MCAnswers.slice(0, 3)} setCurrentAnswer={setCurrentAnswer} handleAnswer={handleAnswer} availablePoints={10} currentAnswer={currentAnswer} />}
                            { (isAnswering) && (mode === 'short-answer') && <AnswerField answer={mainAnswer} scorePoints={scorePoints} availablePoints={10} setQuestionState={setQuestionState} toggleAnswering={toggleAnswering} handleQuestionFlow={handleQuestionFlow} setCurrentAnswer={setCurrentAnswer} handleAnswer={handleAnswer}/>}           
                        </div>
                    </>
                )
            case 1:
                return (
                <>
                    <Timer counter={counter} setCounter={setCounter} duration={20} handleAnswer={handleAnswer} answer={firstFollowUpAnswer} avialablePoints={5} />
                    <div className='question-text'>
                    First follow up: { firstFollowUpQuestion } 
                    </div>
                    <div className="answer-interface">
                        { !(isAnswering) && <BuzzButton toggleAnswering={toggleAnswering}/> }
                        { (isAnswering) && (mode === 'multiple-choice') && <MCAnswerButtons correctAnswer={firstFollowUpAnswer} incorrectAnswers={MCAnswers.slice(3, 6)} setCurrentAnswer={setCurrentAnswer} handleAnswer={handleAnswer} availablePoints={5} currentAnswer={currentAnswer} />}
                        { (isAnswering) && (mode === 'short-answer') && <AnswerField answer={firstFollowUpAnswer} scorePoints={scorePoints} availablePoints={5} setQuestionState={setQuestionState} toggleAnswering={toggleAnswering} handleQuestionFlow={handleQuestionFlow} setCurrentAnswer={setCurrentAnswer} handleAnswer={handleAnswer}/>}
                    </div>
                </>
                    )
            case 2: 
                return (
                    <>
                    <Timer counter={counter} setCounter={setCounter} duration={20} handleAnswer={handleAnswer} answer={secondFollowUpAnswer} avialablePoints={5} />
                    <div className='question-text'>
                    Second follow up:  { secondFollowUpQuestion } 
                    </div>
                    <div className="answer-interface">
                        { !(isAnswering) && <BuzzButton toggleAnswering={toggleAnswering}/> }
                        { (isAnswering) && (mode === 'multiple-choice') && <MCAnswerButtons correctAnswer={secondFollowUpAnswer} incorrectAnswers={MCAnswers.slice(6)} setCurrentAnswer={setCurrentAnswer} handleAnswer={handleAnswer} availablePoints={5} currentAnswer={currentAnswer} />}
                        { (isAnswering) && (mode === 'short-answer') && <AnswerField answer={secondFollowUpAnswer} scorePoints={scorePoints} availablePoints={5} setQuestionState={setQuestionState} toggleAnswering={toggleAnswering} handleQuestionFlow={handleQuestionFlow} setCurrentAnswer={setCurrentAnswer} handleAnswer={handleAnswer}/>}
                    </div>
                </>                )
            default:
                return (<>Something went wrong!</>)
        }    
    } else {
        return (<AnswerSlide wasCorrect={isCorrect} handleQuestionFlow={handleQuestionFlow} correctAnswer={correctAnswer} />)
    }
    
}

export default Question