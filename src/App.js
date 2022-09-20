import './App.css';
import Quiz from './components/Quiz'
import Header from './components/Header'
import Footer from './components/Footer'
import SelectionScreen from './components/SelectionScreen'
import RestartScreen from './components/RestartScreen'

import React, { useState } from 'react';

const App = () => {
  // possible game states: 'playing', 'starting', 'ended'
  const [gameState, setGameState] = useState('starting');
  const [source, setSource] = useState('');
  const [difficulty, setDifficulty] = useState('');
  const [mode, setMode] = useState('');
  const [query, setQuery] = useState('')
  const [currentPoints, setCurrentPoints] = useState(0)
  const [backgroundColor, setBackgroundColor] = useState('background-white')

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

  // When called, useQuery makes the query it receives as a parameter. It returns an object with multiple fields. The field loading is true if the query has not received a response yet. Then the following code gets rendered:
    if (gameState === 'starting') {
      return (
      <body className={backgroundColor}>
      <Header />
      <div className="container">
        <main>
          <SelectionScreen setSource={setSource} setDifficulty={setDifficulty} startPlaying={startPlaying} setQuery={setQuery} setMode={setMode} />
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
              <Quiz mode={mode} difficulty={difficulty} source={source} endPlaying={endPlaying} setCurrentPoints={setCurrentPoints} currentPoints={currentPoints} setBackgroundColor={setBackgroundColor}/>
            </main>
          </div>
          <Footer />
        </body>
      )
    } else if (gameState === 'ended') {
      return (
      <body className={backgroundColor}>
      <Header />
      <div className="container">
        <main>
          <RestartScreen goToStart={goToStart} finalScore={currentPoints}/>
        </main>
      </div>
      <Footer />
      </body>
      )
    }
  
}

export default App;
