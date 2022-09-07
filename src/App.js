import './App.css';
import Quiz from './components/Quiz'
import Header from './components/Header'
import SelectionScreen from './components/SelectionScreen'
import RestartScreen from './components/RestartScreen'

import React, { useState } from 'react';

const App = () => {
  // possible game states: 'playing', 'starting', 'ended'
  const [gameState, setGameState] = useState('starting');
  const [source, setSource] = useState('');
  const [difficulty, setDifficulty] = useState('difficulty');
  const [query, setQuery] = useState('')
  const [currentPoints, setCurrentPoints] = useState(0)


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
      <>
      <Header />
      <SelectionScreen setSource={setSource} setDifficulty={setDifficulty} startPlaying={startPlaying} setQuery={setQuery} />
      </>)
    } else if (gameState === 'playing') {
      return (
        <>
          <Header />
          <Quiz difficulty={difficulty} source={source} endPlaying={endPlaying} setCurrentPoints={setCurrentPoints} currentPoints={currentPoints}/>
        </>
      )
    } else if (gameState === 'ended') {
      return (
      <>
      <Header />
      <RestartScreen goToStart={goToStart} finalScore={currentPoints}/>
      </>
      )
    }
  
}

export default App;
