// your-app-name/src/App.js
import React, { useState, useEffect } from 'react';
import './App.css';
import fetchGraphQL from './service/fetchGraphQL';

const App = () => {
  const [name, setName] = useState(null);
  useEffect(() => {
    let isMounted = true;
    fetchGraphQL(`
      query {
        books {
          name
        }
      }
    `)
      .then((res) => console.log(res, "rws"))
      .catch(err => console.log(err, "err"))

    // .then(response => {
    //   // Avoid updating state if the component unmounted before the fetch completes
    //   if (!isMounted) {
    //     return;
    //   }
    //   const data = response.data;
    //   setName(data.repository.name);
    // }).catch(error => {
    //   console.error(error);
    // });

    return () => {
      isMounted = false;
    };
  }, [fetchGraphQL]);

  return (
    <div className="App">
      <header className="App-header">
        <p>
          hello
        </p>
      </header>
    </div>
  )
}

export default App

