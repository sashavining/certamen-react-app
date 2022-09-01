import './App.css';
import Quiz from './components/Quiz'
import SelectionScreen from './components/SelectionScreen'

import { gql } from '@apollo/client'
import React, { useState } from 'react';

const App = () => {
  const [isPlaying, togglePlaying] = useState(false);
  const [source, setSource] = useState('');
  const [difficulty, setDifficulty] = useState('difficulty');
  const [query, setQuery] = useState('')

  // When called, useQuery makes the query it receives as a parameter. It returns an object with multiple fields. The field loading is true if the query has not received a response yet. Then the following code gets rendered:
    if (!isPlaying) {
      return (<SelectionScreen setSource={setSource} setDifficulty={setDifficulty} toggleMode={togglePlaying} setQuery={setQuery} />)
    } else {
      return (<Quiz difficulty={difficulty} source={source}/>)
    }
  
}

export default App;
