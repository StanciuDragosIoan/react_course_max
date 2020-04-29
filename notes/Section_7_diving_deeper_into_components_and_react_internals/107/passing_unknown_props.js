/*
    we pass the props as {...props} (see below)
*/

import React from 'react';

// sets up a class on a div 
const withClass = (WrappedComponent, className) => {
    return props => (
        <div className={className}>
            <WrappedComponent {...props} />
        </div>
    );  
};



export default withClass;