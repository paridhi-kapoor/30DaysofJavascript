//DAY 8 : ES6 +FEATURES

//ACTIVITY 1 : TEMPLATE LITERALS
//TASK 1 :USE template literals to create a string that includes variable for a person's name ,age and gender .

let name = "Paridhi Kapoor";
let age = 20;
const str = `name: ${name} age: ${age}`;
console.log(str);                    //output: name: Paridhi Kapoor age: 20

// Task 2

const str2 = `hello, How are you? 
Myself Paridhi `;
console.log(str2);                    //output: hello How are you?
                                      //          Myself Paridhi

// Activity 2: Destructuring
// Task 3

const nums = [1,2,3];
const [first,second,third] = nums;
console.log(first,second);                   //output: 1 2

// Task 4

const book = {
    bookName: 'The way of the world',
    Author: 'William Steve',
  };
  
  const { bookName, Author} = book;
  
  console.log(bookName);             // Output: The way of the world
  console.log(Author);               // Output: William Steve
 
//   Activity 3: Spread and Rest operators
// Task 5

const arr1 = [1,2,3];
const arr2 = [...arr1];
arr2.push(4,5);
console.log(arr2);                   //output: [1,2,3,4,5]

// Task 6

function sum(...args){
    return args.reduce((e1,e2)=>{
        return e1+e2;
    });
}
console.log(sum(1,2,3,4,5));              //output: 15

// Activity 4: Default parametrs

// Task 7

function product(a,b=1){
    return a*b;
}

const product1 = product(2,3);
const product2 = product(5);
console.log(product1,product2);                  //output: 6, 5

// Activity 5: Enhanced object literals

// Task 8

let Name = "bob";
let Age = 18;
const obj = {Name,
    Age,
    introduce(){
    console.log(`name: ${Name} age: ${Age}`)
}};

console.log(obj);

// Task 9

const propName1 = 'name';
const propName2 = 'age';
const propName3 = 'location';

const person = {
  [propName1]: 'Pari',
  [propName2]: 20,
  [propName3]: 'Jaipur'
};

console.log(person); 