/*
    there are 3 types of lifecycle in react


    1. component creation lifecycle (with the respective methods ran, construct(), etc..)

    2. component update lifecycle (for props change)

    3. component update lifecycle (for state change)



    Component update lifecycle for props change:

        this one starts with 
        
        getDerivedStateFromProps()
            lifecycle hook used to configure component initial state from received props
                e.g. a form control which gets external properties and we handle userinput 
                internally but update state based on outside changes

            it syncs local state to received props


        shouldComponentUpdate(nextProps, nextState)
            we can cancle the updating process
            we can decide whether or not React continues to re-evaluate and re-render a component
            we should NOT cause effects 
                *used for performance optimisations

        render()

        next React Updates Child Components Props
            evaluates child components (children go through same lifecycle if 
            they receive new props/state)

        getSnapshotBeforeUpdate(prevProps, prevState)
            takes previous props/state as input and returns a snapshot object which we can configure
            used for last-minute DOM operations (e.g. get current scroll position of user)
            we should NOT cause effects 

        componentDidUpdate()
            here we can cause side effects (like http requests)
            we should not update state here synchronously (we can do it asynchrounously in a .then())
            

        
*/
