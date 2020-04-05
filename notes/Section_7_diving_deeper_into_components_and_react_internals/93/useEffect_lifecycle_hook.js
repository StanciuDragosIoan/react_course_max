/*
    useEffect() combines all the lifecycle hooks (combines componentDidMount and componentDidUpdate)
        takes a callback function that runs for every rendering of the component (in the virtual DOM)

        *it runs for every update

        *we can use it for all cases of componentDidUpdate() e.g. http requests

        useEffect behaviour:
            by default it runs all the time;

            e.g.

                //pass 2nd arg to useEffect (array with dependencies -when state in it/them changes,
                //useEffect runs)
                 useEffect(() => {
                    console.log("[Cockpit.js] useEffect()");
                    //http request
                    setTimeout(() => {
                    alert("Saved data to  cloud");
                    }, 1000);
                }, [props.persons]); 
                


                //if we pass empty array as 2nd arg for useEffect, it runs only when  component is created
                     useEffect(() => {
                        console.log("[Cockpit.js] useEffect()");
                        //http request
                        setTimeout(() => {
                        alert("Saved data to  cloud");
                        }, 1000);
                    }, []);


                //use effect for cleanup before removing component:

                     useEffect(() => {
                        console.log("[Cockpit.js] useEffect()");
                        //http request
                        setTimeout(() => {
                        alert("Saved data to  cloud");
                        }, 1000);
                        //pass another callback function
                        return () => {
                        console.log("[Cockpit.js] cleanupWork with useEffect()");
                        };
                    }, []);


                //useEffect() runs on every update cycle if we pass no array as 2nd arg
                  useEffect(() => {
                    console.log("[Cockpit.js] 2nd useEffect()");
                    //pass another callback function
                    return () => {
                    console.log("[Cockpit.js] cleanupWork  in 2nd useEffect()");
                    };
                });


    useState() 
*/
