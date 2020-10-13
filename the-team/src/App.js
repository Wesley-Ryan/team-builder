import React, {useState} from 'react';
import TeamForm from './components/TeamForm'
import './App.css';

function App() {
  const initialList = [{ 
    name: "Wesley ", 
    email: "wesley-white@lambdaScool.com ", 
    role: "Full Stack Developer"
  }]
  const [teamList, setTeamList] = useState(initialList)
  return (
    <div className="App">
      <h1>The Team</h1>
      <TeamForm />
    </div>
  );
}

export default App;
