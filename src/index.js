import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.js'

import { ApolloClient, ApolloProvider, HttpLink, InMemoryCache, gql } from '@apollo/client'

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: 'http://localhost:4000',
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

  // wrapping in ApolloProvider makes the client available throughout the app
  root.render(
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  )