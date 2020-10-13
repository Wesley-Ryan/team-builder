import React, {useState} from 'react';
import TeamForm from './components/TeamForm'
import './App.css';
import TeamList from './components/TeamList';

function App() {
  
  return (
    <div className="App">
      <h1>The Team</h1>

      <TeamForm  />
      
    </div>
  );
}

export default App;
