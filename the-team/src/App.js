import React, {useState} from 'react';
import TeamForm from './components/TeamForm'
import './App.css';

function App() {
  
  return (
    <div className="App">
      <h1>The Team</h1>
      <div className='app-container'>
      <TeamForm  />
      </div>
    </div>
  );
}

export default App;
