import React from 'react';
import { ApolloClient,ApolloProvider,InMemoryCache } from '@apollo/client';
import BookList from './components/BookList';

const client = new ApolloClient({
  uri: "http://localhost:8000/graphql",
  cache: new InMemoryCache()
})

const App = () => {
  return (
    <ApolloProvider client={client}>
      <div id="main">
        <h1>Book List App</h1>
        <BookList />
      </div>
    </ApolloProvider>
  )
}

export default App
