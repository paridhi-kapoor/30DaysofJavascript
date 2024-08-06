//Activity 1 : Understanding Closures 

 //Task 1 : Write a function that returns another function, where the inner function accesses a variable from the outer function's scope.Call the inner function and log the result to console.

   function outer(){
    let greeting = "Hello!!";
    let userName = "Paridhi " ;
    let end = "Have a Very nice day!!" ;

       function inner1(){                      //note: it can not have declared variables in inner functions 
        console.log (greeting) ;
       }
       function inner2(){                       
        console.log (userName) ;
       }
       function inner3(){
        console.log (end) ;
       }
       inner1();
       inner2();
       inner3();
    }
    outer() ;
    //output :
    /* Hello!!
    Paridhi 
    Have a Very nice day!!*/

 //Task 2 :create a closure that maintains a private counter.implement function to increment and getthe current value of counter.
    
    function counter() {
      count = 0 ;
       function increment(){
         count+=1 ;
         return count ;
       }
       function get_value(){
         console.log(count) ;
       }
       increment();
       get_value();
    }
     privateCounter = counter();
     console.log(count) ; //output : 1

//Activity 2 :Practical closures

 //Task 3 :Write a function that generates unique ID'S.use A closure to keep track of the last generated ID and increment it with each call.

  function uniqueId() {
    let lastId = 0;

    return function() {
        lastId += 1;
        return lastId;
    };
     
  }

  const generateId = uniqueId();
  console.log(generateId());  // Output: 1
  console.log(generateId());  // Output: 2
  console.log(generateId());  // Output: 3

 // TASK 4 : create a closures that  capture a user'sname and return the function that greet by user's name.

   function username(){
    let user_name = "Paridhi" ;
    function greet(){
      console.log('hello ', user_name);
    }
    greet();
   }
   username();
   //OUTPUT : hello Paridhi

//ACTIVITY 3 : Closures in loops

 //task 5 : Write a loop that creates an array of functions.Each function should log its index when called.Use a closure to ensure each function logs the correct index.

    function arr(size){
      func = [];

      for(i = 0 ;i<size ;i++){
        func.push((function(index){

          return function (){
            console.log(index)
          }
          
        })
        (i));
      }
      return func ;
    }

    const functionArray = arr(5);
    
    functionArray[0]();  // Output: 0
    functionArray[1]();  // Output: 1
    functionArray[2]();  // Output: 2
    functionArray[3]();  // Output: 3
    functionArray[4]();  // Output: 4

//Activity 4:MODULE PATTERN

  //Task 6-Use closures to create a simple module for managing a collection of items. Implement methods to add, remove, and list items.
   
   const item_manager = (function() {
      let items = [];

      return {
          addItem: function(item) {        //adding items
              items.push(item);
          },
 
          removeItem: function(item) {          //removing items
              const index = items.indexOf(item);
              if (index > -1) {
                  items.splice(index, 1);
              }
          },

          listItems: function() {
              return items;
          }
      };
    })();

    item_manager.addItem('kiwi');
    item_manager.addItem('pen');
    console.log(item_manager.listItems()); // output:(2) ['kiwi', 'pen']
    item_manager.removeItem('kiwi');
    console.log(item_manager.listItems()); // output :(1) ['pen']

//Acitivity 5 :memorization

 //Task 7 : Write a function that memorizes the results of another function. Use a closure to store the results of previous computations.
    
    function memorize(fun) {
      const cache = {};

      return function(...args) {
          const key = JSON.stringify(args);
          if (cache[key]) {
              return cache[key];
          } else {
              const result = fun(...args);
              cache[key] = result;
              return result;
          }
      };
    }

    const add = (a, b) => a + b;
    const memorizedAdd = memorize(add);

    console.log(memorizedAdd(1, 5)); // output : 6 (computed)
    console.log(memorizedAdd(1, 5)); // output : 6 (cached)

 //Task 8:  Create a memoized version of a function that calculates the factorial of a number.
   
    function factorial(n) {
      if (n === 0) {
          return 1;
      }
      return n * factorial(n - 1);
    }

    const memorizedFactorial = memorize(factorial);

    console.log(memorizedFactorial(5)); // OUTPUT : 120 (computed)
    console.log(memorizedFactorial(5)); // OUTPUT : 120 (cached)