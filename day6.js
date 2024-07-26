//DAY 6: ARRAYS

//ACTIVITY 1: Array creation and access

  //task 1 : Create an array of numbers from 1 to 5 and log the array to console.
   
   const num = [1, 2, 3,4,5] ;
   console.log("num :" , num)

   //OUTPUT : num : [ 1, 2, 3, 4, 5 ]

  //TASK 2 : Access the first and last element of an array and log the result to console.

   firstElement = num[0] ;                        //first element of array num
   lastElement = num[num.length -1] ;            //last element of array num
   
   console.log("first element is ", firstElement) ;          //OUTPUT : first element is  1
  
   console.log("last element is ", lastElement) ;           //OUTPUT :  last element is  5

//ACTIVITY 2 :ARRAY METHODS (BASIC)
  
  //TASKS 3:Use the push method to add a new number to the end of the array and log the updated array.
  
  num.push(6) ;           //adding new element 6 in num array.
  console.log("num :",num ) ;
   
   //output : num : [ 1, 2, 3, 4, 5, 6 ]
 
  //TASK 4:Use the pop method to remove the last element from the array and log the updated array.

  num.pop( ) ;           //Removing the last element 6 from num array.
  console.log("NUM : " , num) ;

   //OUTPUT : NUM :  [ 1, 2, 3, 4, 5 ]

//TASK 5:Use the shift method to remove the first element from the array and log the updated array.
   num.shift() ;
   console.log(num) ;
   // [2,3,4,5]

//TASK 6:Use the unshift method to add a new number to the beginning of the array and log the updated array.
    num.unshift(0) ;
    console.log(num) ;
    // [0,1,2,3,4,5]

//ACTIVITY 3: ARRAY METHODS

//TASK 7:Use the map method to create a new array where each number is doubled and log the new array.
 
    let arr=[18,45,63,10]
    let newArr1=arr.map((val)=>{
        return 2*val;
    });
    console.log(newArr1)   
      //[ 36, 90, 126, 20 ]

//TASK 8:Use the filter method to create a new array with only even numbers and log the new array.
  
    let newArr2=arr.filter((val)=>{
      return val%2==0
    })
    console.log(newArr2)  
    //[ 18, 10 ] 

//TASK 9:Use the reduce method to calculate the sum of all numbers in the array and log the result.
  
    const sum=arr.reduce((res,cur)=>{
      return res+cur
    })
    console.log(sum)   //136

//ACTIVITY 4 : ACTIVITY ITERATION
//TASK 10:Use a for loop to iterate over the array and log each element to the console.

    let a=[30,45,26,21,8]
    for(let i=0;i<a.length;i++)
    {
        console.log(a[i])  //30 45 26 21 8
    }
//TASK 11:Use the forEach method to iterate over the arrray and log each element to the console.

    a.forEach((val)=>{
      console.log(val)   
    })
    //30 45 26 21 8

//ACTIVITY 5 : 
//TASK 12:Create a two-dimensional array (matrix) and log the entire array to the console.

    let B=[[1,2,3],
          [4,5,6],  
          [7,8,9]]
    console.log(B)  

    //[ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8, 9 ] ]

//TASK 13:Access and log a specific element from the two-dimensional array.

    console.log(B[2][1])   //8
    console.log(B[1][1])   //5
    console.log(B[2][2])   //9
   
// FEATURE REQUEST : DONE