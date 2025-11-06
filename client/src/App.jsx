import { useState, useEffect } from 'react'

import './App.css'

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('http://13.203.27.70/:4000/api/message')
      .then(response => response.json())
      .then(data => {
        setMessage(data.message)
      .catch(error => {
          console.error('Error fetching message:', error);
        });
      });
  }, []);

  return (
    <>
      <h1>Welcome to my frontend</h1>
      <h2>Data</h2>
      <p>{message}</p>
    </>
  )
}

export default App
