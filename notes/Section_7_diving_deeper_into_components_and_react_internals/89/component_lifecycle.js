/*

Component lifecycle

### A class based component has the following lifecycle methods:

    constructor()

    getDerivedStateFromProps()

    getSnapshotBeforeUpdate()

    componentDidCatch()

    componentWillMount()

    shouldComponentUpdate()

    componentDidUpdate()

    componentDidMount()

    render()


### Component lifecycle:

    constructor(props) 
    
        (this runs first) -> we need to call super(props)
        we configure the object/state initially at runtime 
            we must NOT create side effects (e.g. http requests)




    getDerivedStateFromProps(props, state) 

        (this is a lifecycle hooks) 
        when props change and we want to update state (this hook is to be used)
            we must NOT create side effects (e.g. http requests)





    render() //returns JSX
            we must NOT block the rendering process
            
        next we render all the child elements


    componentDidMount()
        lifecycle hooms (will create side effects e.g. http requests)
        we should not call setState() synchronously (we can set it 
        in the .then() of a promise)
*/
