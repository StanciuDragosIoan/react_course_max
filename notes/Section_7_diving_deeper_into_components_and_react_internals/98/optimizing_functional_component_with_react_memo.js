/*
    wrapping the export of a functional component in memo() e.g.

   

    will prevent the component to re-render if its input props/state don t change
*/

export default React.memo(Cockpit);

//when to optimize (if components are not interacting based on eachother's changes, then we should implement the
//check and memo() t oavoid re-render else not)