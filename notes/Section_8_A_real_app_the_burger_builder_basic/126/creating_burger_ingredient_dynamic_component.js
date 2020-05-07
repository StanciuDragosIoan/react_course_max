//a functional component looks like this:

import React from "react";

const component = (props) => {

};

export default component;

//it receives props and returns JSX
//if it returns only jsx we can write it as:

const component = (props) =>(
    <div>ComponentStuffJSX</div>
);
// () are for multiline jsx, we can ommit the parantheses ofr a single line

//if it has some logic before returning JSX we use the {}
import React from "react";

const component = (props) => {
    if(true){
        return(
            <div>ComponentStuffJSX</div>
        );
    }
};
