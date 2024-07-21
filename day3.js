//DAY 3 : CONTROL STRUCTURES

//ACTIVITY 1: IF-ELSE STATEMENT

  //Task 1: Write a program to check if a number is positive,negative or zero,log the result to console.

                                        //NUMBER CHECK SCRIPT
  let num = 7;
  if(num>0){
    console.log("Number is positive.") ;
  }

  else if(num==0){
    console.log("Number is zero.") ;
  }

  else{
    console.log("Number is negative.") ;   //OUTPUT : Number is positive.
  } 

  //Task 2 : Write a program to check if a person is elegible to vote(Age>=18) and log the result to the console.

                                             // VOTING ELIGIBILITY SCRIPT
  let Age = 17 ;
  if(Age>=18) {
    console.log("He/She is eligible to vote.") ;
  }
  
  else{
    console.log("He/She is not eligible to vote.") ;   //OUTPUT :He/She is not eligible to vote.
  }
  
// Activity 2 : NESTED IF-ELSE STATEMENTS

  //Task 3: Write a program to find the largest of three numbers using nested if-else statements.

  let a = 34 ;
  let b = 2 ;
  let c = -12 ;
  if(a>=b) {
    if(a>=c){ console.log( a," is the largest number among them.") ;}  // (a>=b>=c)

    else{ console.log(c," is the largest number among them.") ;  }     // (c>=a>=b)
  }
  else {
    if(b>=c) { console.log(b," is the largest number among them.") ;}   //(b>=c>=a)
    
    else {console.log(c," is the largest number among them.") ; }      //(c>=b>=a)
  }
                                //OUTPUT : 34  is the largest number among them.                       
   
//Activity 3: Switch Case

  //Task 4 : Write a program that uses Switch Case to determine the day of the week based on a number (1-7) and log the result to console.
                                      
                                                  //DAY OF THE WEEK SCRIPT
  let day = 4;
  switch(day) {
     case 1: 
       console.log("Sunday") ;
       break ;
     case 2: 
       console.log("Monday") ;
       break ;   
     case 3: 
       console.log("Tuesday") ;
       break ;
     case 4: 
       console.log("Wednesday") ;
       break ;
     case 5: 
       console.log("Thursday") ;
       break ;
     case 6: 
       console.log("Friday") ;
       break ;
     case 7: 
       console.log("Saturday") ;
       break ;
     default :
     console.log("Invalid day") ;     //OUTPUT : Wednesday
    }

  //Task 5: Write a program that uses switch case to determine to assign a grade ('A','B','C','D','F') and log the result to console.
                    
                                                //GRADE ASSIGNMENT SCRIPT 
   let score = 75;
  switch (Math.floor(score / 10)) {
    case 10:
    case 9:
        console.log('A');
        break;
    case 8:
        console.log('B');
        break;
    case 7:
        console.log('C');
        break;
    case 6:
        console.log('D');
        break;
    case 5:
        console.log('E');
        break;
    default:
        console.log('F');      //OUTPUT : C
 }

//ACTIVITY 4: Conditional (ternary) operator

  //Task 6 : Write a program that uses ternary operator to check if number is even or odd and log the result to console.
        
  num = 34 ;
  console.log(num%2==0 ? "NUMBER is Even." : "NUMBER is Odd.") ;    //OUTPUT :NUMBER is Even.

//Activity 5: COMBINING CONDITIONS
  
   // Task 7:Write a program to check if year is leap year using multiple conditions(divisible by 4 but not 100 unless also divisible by 400) and log the result to console.
                                        //Leap Year script
    const year = 2024 ;
    if (year % 4 == 0 && (year % 100 != 0 || year % 400 == 0)) {
        console.log(year , " is a leap year");
    }
    else {
        console.log(year, " is not a leap year");
    }                                                 //OUTPUT :2024 is a leap year.

//FEATURE REQUEST : DONE


