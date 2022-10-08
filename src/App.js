import './App.css';
import Quiz from './components/Quiz'
import Header from './components/Header'
import Footer from './components/Footer'
import SelectionScreen from './components/SelectionScreen'
import RestartScreen from './components/RestartScreen'
import TimeTrialQuiz from './components/TimeTrialQuiz'
import StartScreen from './components/StartScreen'

import React, { useState } from 'react';

const App = () => {
  // possible game states: 'playing', 'starting', 'ended'
  const [gameState, setGameState] = useState('beforeStart');
  const [source, setSource] = useState('');
  const [category, setCategory] = useState('');
  const [difficulty, setDifficulty] = useState('');
  const [isTimeTrial, setIsTimeTrial] = useState(null)
  const [questionInterval, setQuestionInterval] = useState('0')
  const [mode, setMode] = useState('');
  const [query, setQuery] = useState('')
  const [currentPoints, setCurrentPoints] = useState(0)
  const [backgroundColor, setBackgroundColor] = useState('background-white')

  const moveToGameSelect = () => {
    setGameState('starting')
  }

  const startPlaying = () => {
    setGameState('playing')
  }

  const endPlaying = () => {
    setGameState('ended')
  }

  const goToStart = () => {
    setCurrentPoints(0)
    setDifficulty('difficulty')
    setSource('')
    setGameState('starting')
  }

  const scorePoints = (points) => {
    setCurrentPoints(prevPoints => prevPoints + points)
  }

  // When called, useQuery makes the query it receives as a parameter. It returns an object with multiple fields. The field loading is true if the query has not received a response yet. Then the following code gets rendered:
    if (gameState === 'beforeStart') {
      return (
        <body className={backgroundColor}>
        <Header />
        <div className="container mobile-mb-2">
          <main>  
            <StartScreen handleClick={moveToGameSelect} />
          </main>
        </div>
        <Footer />
        </body>
      )
    } else if (gameState === 'starting') {
      return (
      <body className={backgroundColor}>
      <Header />
      <div className="container mobile-mb-2">
        <main>
          <SelectionScreen setCategory={setCategory} setSource={setSource} isTimeTrial={isTimeTrial} setIsTimeTrial={setIsTimeTrial} setDifficulty={setDifficulty} startPlaying={startPlaying} setQuery={setQuery} setMode={setMode} setQuestionInterval={setQuestionInterval} />
        </main>
      </div>
      <Footer />
      </body>)
    } else if (gameState === 'playing') {
      return (
        <body className={backgroundColor}>
          <Header />
          <div className="container">
            <main>
              {(!isTimeTrial) && <Quiz mode={mode} difficulty={difficulty} source={source} endPlaying={endPlaying} setCurrentPoints={setCurrentPoints} currentPoints={currentPoints} setBackgroundColor={setBackgroundColor} scorePoints={scorePoints}/> }
              {(isTimeTrial) && <TimeTrialQuiz mode={mode} category={category} endPlaying={endPlaying} setCurrentPoints={setCurrentPoints} currentPoints={currentPoints} setBackgroundColor={setBackgroundColor} questionInterval={questionInterval} scorePoints={scorePoints}/> }
            </main>
            <div class="points-container text-center my-1 mobile-mb-2 font-ornate">
              Score: {currentPoints}
            </div>
          </div>
          <Footer />
        </body>
      )
    } else if (gameState === 'ended') {
      return (
        <>
      <body className={backgroundColor}>
      <Header />
      <div className="container mobile-mb-2">
        <main>
          <RestartScreen goToStart={goToStart} finalScore={currentPoints}/>
        </main>
      </div>
      <Footer />
      </body>
      </>
      )
    }
  
}

export default App;
