import React from 'react';
import DeviceDetails from '../Device details/DeviceDetails';

const Device = (props) => {
    return (
        <div>
            <h1>I have name:{props.name}</h1>
                    {/* //! Ai khane {props.name} dileo hobe */}

            <DeviceDetails price={props.price}></DeviceDetails>
                    {/* //! Main holo price={props.price} ai = must dite hobe. */}
                    {/* //! Device a jeye ai value ta inlude hobe cz device a Price lekh ase  */}
        </div>
    );
};

export default Device;