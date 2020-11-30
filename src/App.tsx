import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <p>window.history.state:</p>
      <code>{JSON.stringify(window.history.state, null, 2)}</code>
    </div>
  );
}

export default App;
