import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.js'

import { ApolloClient, ApolloProvider, HttpLink, InMemoryCache, gql } from '@apollo/client'

const client = new ApolloClient({
  cache: new InMemoryCache(`cache: "bounded"`),
  link: new HttpLink({
    uri: 'https://panicky-jade-beanie.cyclic.app/',
  })
})

const query = gql`
query {
  questionCount
}
`

client.query({ query })
  .then((response) => {
    console.log(response.data)
  })

  const root = ReactDOM.createRoot(document.getElementById('root'));

  root.render(
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  )