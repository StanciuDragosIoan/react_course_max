/*
    render() cmds what the html should look like

    React compares the old virtual dom with the new virtual dom

    virtual dom = virtual representation of the actual DOM in JS

    React keeps 2 copise of the dom (the old one and the re-rendered one)

    render() makes React compare the old virtual dom to the new one

        if there are differences, it updates the real dom and re-reders only
        places where state changed
*/