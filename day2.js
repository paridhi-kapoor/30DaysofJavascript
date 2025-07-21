//DAY 2: OPERATORS

//Activity 1: Arithmatic operator
 
  //Task 1: write a program to add two numbers and log the result to console.

  let x = 67;
  let y = 33; 
  console.log("x + y =", x+ y) ;   //OUTPUT : x+y = 100

  //Task 2: write a program to subtract two numbers and log the result to console.

  x= 67 ;
  y= 33;
  console.log("x - y =", x - y) ;   //OUTPUT : x-y = 34

  //Task 3: write a program to multiply two numbers and log the result to console.

  x = 67;
  y = 33;
  console.log("x multiply y =" , x*y) ;     //output : x multiply y = 2211

  //Task 4 : write a program to divide two numbers and log the result to console.

  x = 67;
  y = 33;
  console.log("x divided by y =" , x/y) ;    //Output : x divided by y = 2.0303030303030303

  //Task 5 : write a program to find the remainder when one number is divided by other and log the result to console.

  x = 67;
  y =33;
  console.log("Remainder of x/y =" , x%y) ;  //output :Remainder of x/y = 1

//Activity 2: ASSIGNMENT OPERATION

 //Task 6: Use the += operator to add a number to variable and log the result to console.

 let a= 7;   // a+=b indicates a= a+b.
 a+=28;
 console.log("Addition Assignment : a+=28 , a=", a) ;   //OUTPUT :Addition Assignment : a+=28 , a= 35  

 //Task 7: Use the += operator to add a number to variable and log the result to console.

 let b = 4;
 b-=2;
 console.log("Subtraction Assignment : b-=2, b=" , b) ;    //OUTPUT : Subtraction Assignment : b-=2, b= 2

//ACTIVITY 3: COMPARISON OPERATOR

 //Task 8: write a program to compare two numbers using < and > operator and log the result to console.

 x = 7;
 y =5 ;

 console.log("Greater than : " , x>y) ;  //OUTPUT : Greater than :  true
 
 console.log("Smaller than : " , x<y) ;  //OUTPUT :Smaller than :  false

 //Task 9 :  write a program to compare two numbers using <= and >= operator and log the result to console.

 console.log("Greater or equal to :" , x>=y) ; //OUTPUT : Greater or equal to : true
 console.log("smaller or equal to : " , x<=y) ; //OUTPUT : smaller or equal to :  false

 //Task 10 : write a program to compare two numbers using == and === operator and log the result to console.
 
 x='5';   
 y =5;
 console.log("Equal to : x==y" , x==y) ;                   //OUTPUT : Equal to : x==y true  means it checks only value. and type conversion is done before checking ,it convert the type of one of the variable to match the other.
 console.log("strictly Equal to : x===y" , x===y) ;        //OUTPUT : strictly Equal to : x===y false   , no type conversion is done here , it checks both value and type of the variable.

//Actvity 4 : LOGICAL OPERATOR 

 //Task 11 : Write a program that uses && operator to combine two conditions and log the result to console.

  x =5;
  y =8 ;
  a = 6 ;
  b =7 ; 
    // It results true if every condition is true.
  console.log( (x< y) &&(a<b )) ; // Output : true

 //Task 12 : Write a program that uses || operator to combine two conditions and log the result to console.
    
   //it results true if any one of the conditions is true .
  console.log((x< y) ||(a>b)) ; // OUTPUT : true

 //Task 13 : Write a program that uses ! operator to negate the condition and log the result to console.
  
   // ! operator results true if condition is false and vice-versa.
  console.log(!(x<=y)) ; //OUTPUT : false

//ACTIVITY 5 : TERNARY OPERATOR 
  
 // Task 14 : write a program that uses ternary operator to check if a number is positive or negative and log the result to console.
  
  let num = -4 ;
  let result  = (num>=0 ? "positive" : "negative" ) ; //expression1 is executed when condition is true otherwise expression2.
  console.log(" number is :" , result) ; //OUTPUT :  number is : negative

//FEATURE REQUEST :
// 1. Arithmetic operations script

let n = 5;

// addition operator
console.log("Addition: n + 2 = ", n + 2);

// subtraction operator
console.log("Subtraction: n - 3 =", n - 3);

// multiplication operator
console.log("Multiplication: n * 3 =", n * 3);

// division operator
console.log("Division: n / 3 =", n / 3);

// remainder operator
console.log("Remainder: n % 3 =", n % 3);

// increment operator
console.log("Increment: ++n =", ++n);

// decrement operator
console.log("Decrement: --n =", --n);

// exponentiation operator
console.log("Exponentiation: n ** 3 =", n ** 3);

//output
// Addition: n + 2 =  7
// Subtraction: n - 3 = 2
// Multiplication: n * 3 = 15
// Division: n / 3 = 1.6666666666666667
// Remainder: n % 3 = 2
// Increment: ++n = 6
// Decrement: --n = 5
// Exponentiation: n ** 3 = 125


// 2. Comparison and logical operators script

// equal to operator                         // output
console.log("Equal to: 3 == 3 is", 3 == 3); // Equal to: 3 == 3 is true

// not equal operator
console.log("Not equal to: 3 != 3 is", 3 != 3);  // Not equal to: 3 != 3 is false

// strictly equal to operator
console.log("Strictly equal to: 2 === '2' is", 2 === '2');  // Strictly equal to: 2 === '2' is false

// greater than operator
console.log("Greater than: 3 > 5 is", 3 > 5);  // Greater than: 3 > 5 is false

// less than operator
console.log("Less than: 3 < 5 is", 3 < 5);  // Less than: 3 < 5 is true








// logical AND
console.log((n < 5) && (n > 0));  // false

// logical OR
console.log((n > 2) || (n > 5));  // true

// logical NOT
console.log(!(n == 3));  // true
n1 =10 ;

// 3. ternary operator script
n1>0 ? console.log(n1,"is +ve") : console.log(n1,"is -ve");  //output: 10 is positive








