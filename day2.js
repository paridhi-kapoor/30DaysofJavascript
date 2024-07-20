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
 console.log("Subtraction Assignment : b-=2, b=" , b) ;  // //OUTPUT : Subtraction Assignment : b-=2, b= 2

//ACTIVITY 3: COMPARISON OPERATOR

 //Task 8: write a program to compare two numbers using < and > operator and log the result to console.

 x = 7;
 y =5 ;

 console.log("Greater than : " , x>y) ;
 console.log("Smaller than : " , x<y) ; 

 //Task 9 :  write a program to compare two numbers using <= and >= operator and log the result to console.

 console.log("Greater or equal to :" , x>=y) ;
 console.log("smaller or equal to : " , x<=y) ;

 //Task 10 : write a program to compare two numbers using == and === operator and log the result to console.
 
 x=5;
 y =5;
 console.log("Equal to : x==y" , x==y) ; 
 console.log("strictly Equal to : x===y" , x===y) ; 

//Actvity 4 : LOGICAL OPERATOR 

 //Task 11 : Write a program that uses && operator to combine two conditions and log the result to console.

  x =5;
  y =8 ;
  a = 6 ;
  b =7 ; 
    // It results true if every condition is true.
  console.log( (x< y) &&(a<b )) ; // Output :

 //Task 12 : Write a program that uses || operator to combine two conditions and log the result to console.
    
   //it results true if any one of the conditions is true .
  console.log((x< y) ||(a>b)) ; // OUTPUT :

 //Task 13 : Write a program that uses ! operator to negate the condition and log the result to console.
  
   // ! operator results true if condition is false and vice-versa.
  console.log(!(x<=y)) ; //OUTPUT :

//ACTIVITY 5 : TERNARY OPERATOR 
  
 // Task 14 : write a program that uses ternary operator to check if a number is positive or negative and log the result to console.
  
  let num = -4 ;
  let result  = (num>=0 ? "positive" : "negative" ) ; //expression1 is executed when condition is true otherwise expression2.
  console.log(" number is :" , result) ; //OUTPUT :







