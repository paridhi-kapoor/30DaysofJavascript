//Activity 1: Creating and Exporting Modules
//Task 1: Create a module that exports a function to add two numbers. Import and use this module in another script.
import { sum } from './add.mjs';
console.log(sum(2, 3)); // 5

//Task 2: Create a module that exports an object representing a person with properties and methods. Import and use this module in another script.
import { individual } from './person.mjs';

console.log(individual.sayHello()); 

//Activity 2: Named and Default Exports
//Task 3: Create a module that exports multiple functions using named exports. Import and use these functions in another script.
import { addNumbers, subtractNumbers } from './math.mjs';

console.log(addNumbers(5, 4));       // 9
console.log(subtractNumbers(8, 3));  // 5

//Task 4: Create a module that exports a single function using default export. Import and use this function in another script.
import multiplyNumbers from './multiply.mjs';

console.log(multiplyNumbers(4, 5)); // 20

//Activity 3: Importing Entire Modules
//Task 5: Create a module that exports multiple constants and functions. Import the entire module as an object in another script and use its properties.
import * as helpers from './mutli.mjs';

console.log(helpers.PI_VALUE);            // 3.14
console.log(helpers.addThree(7, 3));     // 10
console.log(helpers.subtractThree(9, 2)); // 7

//Activity 4: Using Third-Party Modules
//Task 6: Install a third-party module (e.g., lodash) using npm. Import and use a function from this module in a script.
import _ from 'lodash';

const numbersArray = [1, 2, 3, 4, 5];
console.log(_.reverse(numbersArray)); // [5, 4, 3, 2, 1]

//Task 7: Install a third-party module (e.g., axios) using npm. Import and use this module to make a network request in a script.
import axios from 'axios';

axios.get('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => {
        console.log(response.data);
    })
    .catch(err => {
        console.log('Error fetching data:', err);
    });