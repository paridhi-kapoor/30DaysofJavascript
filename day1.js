//day1 

  //Activity 1:Variable Declaration

    // task1: Declare a variable using var,assign it to a number and log the value console.

    var Pincode = 302036; 
    console.log(Pincode)  //output: 302036

    //task 2:Declare a variable using let,assign it to a string and log the value console.

    let city = "Jaipur" ;
    console.log(city)  //output: Jaipur

  //Activity 2:  constant declaration
  
   // task3: Declare a variable const,assign it to a boolean value,and log the value to the console.
    const boolconst = true;
    console.log(boolconst)  //true

  //Activity 3: Data types
   
   // task 4: Create variables of different data types (number,string,boolean,object,array) and log each variables's type using typeof operator.
    
    let num= 345;                                  //number 
    let str= "hello!"  ;                          // string 
    let bool = true;                             //boolean
    let obj = {name: "Pari",number :"15"};      //object 
    let arr =[1,2,5,6,7,8,8,9,10];             // Array
   
    console.log(typeof num)    //Output: number
    console.log(typeof str)     //Output: string
    console.log(typeof bool)   //Output: boolean
    console.log(typeof obj)     //Output: object
    console.log(typeof arr)    //Output: object(array are a type of object in javascript)

// Activity 4: Reassigning values
  
  //task5: Declare a variable using 'let' ,assign it to an initial value, reassign a new value  and log both value to console.
  
  let reassign = "initial value";
  console.log(reassign);  //output : initial value

  reassign= "new value";
  console.log(reassign)  // output : new value

//Actvity 5: Understanding 'const'
  //task 6: try reassigning a variable declared with "const" and observe the error.

  const Name = "paridhi" ;
  console.log(Name) //output :paridhi
  //reassigning the value of name now.
  Name ="shaan" //TypeError: Assignment to constant variable.

//Feature Request:
 
//1. Variable type console log :write a script that declares variables of different types logs both the value and the type of each variable to the console.

  let name = "Paridhi";                     //string type
  let surname = {sur_name :"Kapoor"}      //object type
  let greetings = "Hello, Its me";       //string type
  let isfemale =true;                    //boolean type
  let Age= 20;                          //number type
  let Status ;                          //undefined type
  let  disabilities = null;           //nulltype

  
  console.log( "value: " , surname , " , type: " , typeof surname)
 //output : value:  { sur_name: 'Kapoor' }  , type:  object
  console.log( "value: " , greetings , " , type: " , typeof greetings)
  //output: value:  value:  Hello, Its me  , type:  string
  console.log( "value: " , isfemale , " , type: " , typeof isfemale)
  //output: value:  true  , type:  boolean
  console.log( "value: " , Age , " , type: " , typeof Age)
  //output: value:  20  , type:  number
  console.log( "value: " , Status , " , type: " , typeof Status)
  //output: value:  undefined  , type:  undefined
  console.log( "value: " , disabilities , " , type: " , typeof disabilities)
  //output: value:  null  , type:  object
   
// 2.Reassignment Demo: Create a script that demonstrates the difference in behavior between 'let' and 'const' when it comes to reassignment.

let letVariable = "I can be reassigned.";
console.log(letVariable);  //output: I can be reassigned.

letVariable = "I've been reassigned.";
console.log(letVariable);  //output : I've been reassigned.

const constantVar ="I cannot be reassigned."
console.log(constVar) ; //output : I cannot be reassigned.