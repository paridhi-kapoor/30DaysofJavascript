// DAY: 5 FUNCTIONS
 
//ACTIVITY :1 FUNCTION DECLARATION

 //TASK 1 : Write a function to check if a number is even or odd and log the result to console.

                          //EVEN OR ODD FUNCTION SCRIPT
    function check(n){
        return n%2 == 0 ? "Number is EVEN" : " Number is ODD" ;
    }

    let n = 35 ;
    console.log (check(n)) ;  // calling the function check

    // OUTPUT : Number is ODD

 //TASK 2 : Write a function to calculate the square of a number and return the result.   
              
                                 //SQUARE CALCULATION FUNCTION SCRIPT
    function square(n){
       let  result = n*n ;
        return result ;
    }

    n = 15 ;
    console.log(square(n)) ;
     
    //output : 225

//ACTIVITY 2 : FUNCTION EXPRESSION 

 //TASK 3 : Write a function expression to find the maximum of two numbers and log the result to console.
  
   const maximum = function (a,b){              //expressing the function maximum.
     return a>b ? a : b ;
   }
    let a = 12 ;
    let b = 14 ;
    if(a!=b) {
        console.log(maximum (a,b) , "is Maximum .") ;
    }
    else{
        console.log("Both are equal.") ;
    }

    //output : 14 is Maximum .

 //TASK 4 : Write a function expression to concatenate two string and log the result to console.
    
                                               //CONCATENATION FUNCTION SCRIPT
    const concatenate = function(str1, str2){
     return str1 + str2 ;     
    }
    let str1 = "Hello " ;
    let str2 = "Buddy !!" ;
     console.log(concatenate(str1,str2)) ;

     //OUTPUT : Hello Buddy !!

//ACTIVITY 3 :ARROW FUNCTION 

 //TASK 5 : Write an arrow function to calculate sum of two numbers and return the result.

                                         //SUM CALCULATION FUNCTION SCRIPT
    const add = (a, b) => a + b;
    console.log(add(2, 3)); 
 
   // Output: 5 

 // TASK 6 :Write an arrow function to check if a string contains specific character and retrun the boolean value.
 
    const containsCharacter = (str, char) => {
    return str.includes(char);
    };
  
   let str = "Hello Buddy !" ;
   let char = "u" ;

   console.log(containsCharacter(str, char ));
  
  //OUTPUT : true 

//ACTIVITY 4 : FUNCTION PARAMETERS AND DEFAULT VALUES
 
 //TASK 7 : Write a function that takes two parameters and return their product and provide a default value for second parameter.
  
    function multiply(a, b = 2) {
        return a * b;
    }
  
    console.log("multiply 5 by 2 : ",multiply(5)); 

    //OUTPUT : multiply 5 by 2 :  10

 //TASK 8 : Write a function that takes person's name and age and return a greeting message, provide a default value for age.
 
   function greeting(name , age = 20){
    greet = "HELLO !!";
    return greet;
   }
   let Name = "Paridhi" ;
   let age ;
   console.log(greeting(Name , age), Name);

   //OUTPUT : HELLO !! Paridhi

// ACTIVITY 5 : HIGHER ORDER FUNCTIONS 

 //TASK 9 : Write a higher order function that takes function and a number and calls the function multiple times. 
  
                                    //HIGHER ORDER FUNCTION SCRIPT 
    function multipletimes(func, n){          //Calling function
        for(i=0 ;i<n;i++){
            func();
        }
    }

    const Hello = () => {                
        console.log("Hello!");
      };
    
    console.log(multipletimes(Hello, 4));

    /*output :
    Hello!
    Hello!
    Hello!
    Hello!
    undefined */

 //TASK 10 : Write a higher order function that takes two functions and a number and applies the first function to the value and then applies second to the result.
     
    const  applyfunc = (func1,func2,n) =>{
    number = func1(n) ;                       //applies the value to function

    return func2(number) ;                  //applies func1 to func2 
    }  

    function addition(a){
    return  a+1;
    }
    function sq(a){
    return a*a ;
    }
    console.log(applyfunc(addition,sq, 4)) ;

    //OUTPUT : 25


//FEATURE REQUEST : 
        // DONE IN TASKS

      
  
    
 
 
    