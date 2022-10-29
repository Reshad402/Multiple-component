import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import DIsplay from '../Display new way/DIsplay';

const Watch = () => {
    const [steps,setSteps] = useState(0)  //!Initial steps 0 ti (0)
    const increaseSteps = () =>{    //! steps holo value barano
         const newSteps = steps +1; 
         setSteps(newSteps);        //!newSteps holo value update banano
    };
    useEffect(() =>{
        console.log(steps)
    },[steps])
    return (
        <div style={{border:'2px solid purple',margin:'5px',borderRadius:'10px'}}>
            <p>The step is: {steps}</p>
            <button onClick={increaseSteps}>Count</button>
            <DIsplay name='Alamein' steps={steps}></DIsplay>
            {/* //! this is the diff between the hardcode to dynamic data */}
        </div>
    );
};

export default Watch;