import React from 'react';



const TeamList = (props) => {
    const {team} = props
    return (
        <div className='team-container'>
            {team.map((teammate, index) => { 
                return (
                    <div className="teammate" key={index}>
                        <h2>{teammate.name}</h2>
                        <p>{teammate.email}</p>
                        <p>{teammate.role}</p>
                    </div>
                )
            })}

        </div>
      );
}
 
export default TeamList;

