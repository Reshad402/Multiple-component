import React from 'react';

const DIsplay = (props) => {
    return (
        <div>
            <h3>The name is hardcoded: {props.name}</h3>
            <h5>The steps is dynamic: {props.steps}</h5>
            {/* //! Dynamically ai khane steps ana hoiche */}
        </div>
    );
};

export default DIsplay;