import React, {useState} from 'react';
import TeamList from './TeamList'
import '../App.css'


const TeamForm = () => {

    const initaialFormValues = {name:"", email: "", role: ""}

    const [team, setTeam] = useState([{ 
        name: "Wesley White", 
        email: "wesley-white@lambdaScool.com", 
        role: "Full Stack Developer"
      }])
      const [formValues, setFormValues] = useState(initaialFormValues)

      const onChange = (event) => { 
          const {name, value} = event.target
          setFormValues({...formValues, [name]: value})
      }

      const clearForm = () => { 
          setFormValues(initaialFormValues)
      }

      const handleSubmit = (event)=> { 
          event.preventDefault()
          const newTeammate = { 
              name:formValues.name.trim(),
              email:formValues.email.trim(),
              role:formValues.role.trim()
          }
          setTeam([...team, newTeammate])
          clearForm()

      }
    return ( 
    <div >
        <form className="form-container" onSubmit={handleSubmit}>
            <div className="input-container">  
            Name:  <input name='name' 
            type='text'
            value={formValues.name}
            onChange={onChange}/>
            </div>
            <div className="input-container">
            Email: <input name='email' 
            type='text' 
            value={formValues.email}
            onChange={onChange}/>
            </div>
            <div className="input-container"> 
            Role: <input name='role' 
            type='text'
            value={formValues.role}
            onChange={onChange}/>
            </div>  
            <button>Submit</button>  
        </form>
    <TeamList team={team}/>
    </div> );
}
 
export default TeamForm;