/*
    another form of higher order componetns is the withClass component

    note that it is a function that returns another function definition of a component function

    we get props and return JSX
*/

import React from 'react';

// sets up a class on a div 
const withClass = (WrappedComponent, className) => {
    return props => (
        <div className={className}>
            {/* pass props copy */}
            <WrappedComponent {...props} />
        </div>
    );  
};



export default withClass;
 
//in order to use the withClass component we wrap the export of App in it as per below:

export default withClass(App, classes.App);
 