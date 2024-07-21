//DAY 4 :LOOPS

//ACTIVITY 1: FOR LOOP
 
 // TASK 1:Write a program to print Numbers from 1 to 10 using for loop. 
     
                                  //NUMBER PRINTING SCRIPT                                

  for(let i =1 ; i<=10 ; i++){         //for(initial expression  : condition(S) :update expression)
    console.log(i) ;
  }
    /* OUTPUT : 
    1
    2
    3
    4
    5
    6
    7
    8
    9
    10
    */

 // TASK 2:Write a program to print the multiplication table of 5 using for loop. 
                                  
                                 //MULTIPLICATION TABLE PRINTING SCRIPT
  for(let m = 1; m<=10 ; m++ ){
    console.log(" 5 multiply by ", m, "=", 5*m ) ;
   }
   /* OUTPUT :

    5 multiply by  1 = 5
    5 multiply by  2 = 10
    5 multiply by  3 = 15
    5 multiply by  4 = 20
    5 multiply by  5 = 25
    5 multiply by  6 = 30
    5 multiply by  7 = 35
    5 multiply by  8 = 40
    5 multiply by  9 = 45
    5 multiply by  10 = 50 */

//ACTIVITY 2 : while loop

 //Task 3: Write a program to calculate sum of numbers from 1 to 10 using while loop.

 let sum = 0;
 const n = 10 ;
 i =1 ;
  while (i<=10) {                                //while(condtion)
    sum += i;  // sum = sum + i                  {expression 
    i++;                                         //  increment}
 }

 console.log("sum of numbers from 1 to 10 = " , sum);

   // Output: sum: 55

   //TASK 4 : Write a program to print Numbers from 1 to 10 using while loop. 
                                    
                           //NUMBER PRINTING SCRIPT (WHILE LOOP)
   i=1 ;
   while(i<=10){
    console.log(i);
    i++;
   }
    /*
    OUTPUT :
    1
    2
    3
    4
    5
    6
    7
    8
    9
    10
    */

//ACTIVITY 3 : DO... WHILE LOOP

   // TASK 5 : Write a program to print Numbers from 1 to 5 using DO... while loop.

   i = 1 ;
   do{                             //do 
    console.log(i) ;             // {expression or task to do }
    i++ ;
   }
   while(i<=5) ;                // while(condtion )
 
   /* 
   OUTPUT :
    1
    2
    3
    4
    5
   */
  
  //TASK 6 : Write a program to calculate factorial of a number using DO... while loop.
                     
                                     //FACTORIAL CALCULATION SCRIPT
  let num = 9 ;
  let factorial = 1 ;
  i=1;
  do{
    factorial = factorial*i;
     i++ ;
  } 
  while(i<=num) ;
  console.log("Factorial of number ", num ,"is ", factorial) ;

   // OUTPUT : Factorial of number  9 is  362880

//ACTIVITY 4 : NESTED LOOPS

  //task 7 : Write a program to print a pattern using nested loops.
                       
                        //PATTERN PRINTING SCRIPT
  num =5 ;
  for(i=1; i<=num; i++){
       let str = "* " ;
        console.log(str.repeat(i)) ;   //to repeat * i times 
    }
   
    /*
    OUTPUT : 
    *
    * *
    * * *
    * * * *
    * * * * *  
    */
//ACTIVITY 5 : CONTINUE BREAK STATEMENT 
  
  //TASK 8 : Write a program to print Numbers from 1 to 10 but skip 5 using continue statement.

  for ( i = 1; i <= 10; i++) {
                                             // skip the iteration if i is 5
    if (i === 5) {
        continue;
    }
    console.log(i);
  }
        /* OUTPUT :
        1
        2
        3
        4
        6
        7
        8
        9
        10
        */

  //TASK 9 : Write a program to print Numbers from 1 to 10 but stop the loop when number is 7 using BREAK statement.
  
  for ( i = 1; i <= 10; i++) {
                                  // stop the iteration if i is 7
   if (i === 7) {
   break;
   }
    console.log(i);
   }
      /* OUTPUT :
        1
        2
        3
        4
        5
        6
        */


 //FEATURE REQUEST 
 
   // IT HAS BEEN DONE IN TASKS.


