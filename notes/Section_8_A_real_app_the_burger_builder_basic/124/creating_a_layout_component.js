/*
    started working on the layout component

    created the layout component 
        it will be a wrapper for toolbar + burger builder

        this component returns 2 adjacent elements
            sollutions for that: 
                return an array (s each of the adjacent element has a key)
                wrap everything in a higher order component that just displays the children
                wrapping everything in an empty div or a React Fragment

            will use the sollution of a hoc component:



*/


            //function  that takes in props and returns props.children; (aux hoc component)
            const aux = (props) => props.children;

            export default aux;