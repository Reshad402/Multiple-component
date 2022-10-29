import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

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
        <div>
            <p>The step is: {steps}</p>
            <button onClick={increaseSteps}>Count</button>
        </div>
    );
};

export default Watch;