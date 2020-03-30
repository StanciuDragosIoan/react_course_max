/*
    Exports and Imports (modules)

        *js code we split between multiple files


*/

///person.js (default export - only export in a file)

const person = {
  name: 'Max'
};

export default person;

///utility.js (named export - multiple exports in a file)

export const clean = () => {};

export const baseData = 10;

///app.js

//2 ways to import same default export from person.js
import person from './person.js';
import prs from './person.js'; //can be imported with different name from original file

import { baseData } from './utility.js'; //import a 'named export' via destructuring
import { clean } from './utility.js'; // import another 'named export' via destructuring

//default export
import person from './person'; //default export
import prs from './person'; //default export (can be imported with diff name)

import { smth } from './utility.js'; //import named export by its name
import { smth as Smth } from './utility.js'; //import named export by its name but set an alias for it
imrt { bundled } from './utiltiy.js'; //import everything as a global object
