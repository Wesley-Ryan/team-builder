import React from 'react';
import '../App.css'


const TeamForm = () => {
    return ( 
    <div >
        <form className="form-container" >
            <div className="input-container">  
            Name:  <input />
            </div>
            <div className="input-container">
            Email: <input />
            </div>
            <div className="input-container"> 
            Role: <input />
            </div>    
        </form>
    </div> );
}
 
export default TeamForm;