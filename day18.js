//day 18 : 

 //ACTIVITY 1 :sorting algorithm

  //Task 1 : Implement the bubble sort algorithm to sort an array of numbers in ascending order. log the result.

   function bubblesort(nums){
    for(i=0;i<nums.length ;i++){
        for(j=0; j<nums.length-i-1;j++){
            if(nums[j]>nums[j+1]){
                [nums[j],nums[j+1]]= [nums[j+1],nums[j]];  //swapping of elements
            }
        }
    }
    return nums;
   }
   let nums =[1,56,23,12,89];
   sortednums = bubblesort(nums);
   console.log(sortednums) ;
   //output :[1, 12, 23, 56, 89]

  //Task 2 : Implement the selection sort algorithm to sort an array of numbers in ascending order. log the result.

  function selectionSort(nums){
    for(i=0 ; i<nums.length ; i++){
        min = i ;
        for(let j =i+1; j<nums.length ; j++){
            if(nums[j]<nums[min]) {
                min =j ;                 // it means minimum is considered to be j right now
            }
        }
        if(min!=i){
            [nums[i],nums[min]]= [nums[min],nums[i]];  //swapping two elements
        }
    }
    return nums;
  }
  nums = [12, 34,67,0,9,8,7] ;
  sortednums = selectionSort(nums) ;
  console.log(sortednums) ;
  //OUTPUT :  [0, 7, 8, 9, 12, 34, 67]

  //Task 3 : Implement the quick sort algorithm to sort an array of numbers in ascending order. log the sorted array.
 
  function quickSort(arr, low = 0, high = arr.length - 1) {
    if (low < high) {
        const pivotIndex = partition(arr, low, high);
        quickSort(arr, low, pivotIndex - 1);   // Sort left sub-array
        quickSort(arr, pivotIndex + 1, high);  // Sort right sub-array
    }
    return arr;
}

function partition(arr, low, high) {
    const pivot = arr[high];
    let i = low - 1;
    for (let j = low; j < high; j++) {
        if (arr[j] <= pivot) {
            i++;
            [arr[i], arr[j]] = [arr[j], arr[i]]; // Swap elements
        }
    }
    [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]]; // Swap pivot to correct position
    return i + 1;
}

 nums = [64, 34, 25, 12, 22, 11, 90];
const sortedQuickArray = quickSort(nums);
console.log("Sorted Array (Quick Sort):", sortedQuickArray);

 //output : [11, 12, 22, 25, 34, 64, 90]

//Activity 2: Searching algorithm

 //Task 4 : Implement the linear search algoritm to find the target value of array. log the index of target value.

  function linearsearch(nums,target){
    for(let i =0 ; i<nums.length ; i++){
        if(nums[i]== target ){
            return i ;
        }
    }
    return -1;
  }

  nums =[12,24,36,48,60] ;
  console.log("Index of target value :", linearsearch(nums,36)) ;
  //OUTPUT : Index of target value : 2

 //Task 5 : Implement the binary search algoritm to find the target value of array. log the index of target value.

  function binarySearch (nums,target){
    start = 0 , end = nums.length -1 ;
     while(start<=end){
        mid = Math.floor((start+end)/2)
        if(nums[mid]==target) return mid ;
        else if(nums[mid]>target) {
            end = mid -1;
        }
        else{
            start = mid +1;
        }
     }
     return -1 ;
  }
 
  console.log("Index of target value :", binarySearch(nums,24)) ;

  //OUTPUT : Index of target value : 1

//ACTIVITY 3 : String algorithm

 //Task 6 : Write a function to find the occurance of each character in string. log the character counts.

    let str = 'HelloBuddy!';
    let result = {};
    for (let i = 0; i < str.length; i++) {
        let ch = str.charAt(i);
        if (!result[ch]) {
            result[ch] = 1;
        } else {
            result[ch] += 1;
        }
    }
    console.log("The occurrence of each letter in the given string is:", result);

  //OUTPUT : he occurrence of each letter in the given string is: {H: 1, e: 1, l: 2, o: 1, B: 1, …}
 
 // Task 7 : Write a function to find the longest substring without repeating character in that string. log the length of substring .

 function longestSubstringWithoutRepeatingCharacters(input) {
    let longestSubstring = "";
    let start = 0;
    let charIndexMap = {};

    for (let end = 0; end < input.length; end++) {
        let char = input[end];

        if (charIndexMap[char] !== undefined && charIndexMap[char] >= start) {
          
            start = charIndexMap[char] + 1;              //if repeating character found, update index =0
        }
        charIndexMap[char] = end;                 // Update the index of the current character

        let currentSubstring = input.slice(start, end + 1);     // Update the longest substring
        if (currentSubstring.length > longestSubstring.length) {
            longestSubstring = currentSubstring;
        }
    }

    return longestSubstring.length;
}
  str = "everythingisgood!!"
  console.log("length of longest substring is :", longestSubstringWithoutRepeatingCharacters(str));
  //OUTPUT :length of longest substring is : 9

//ACTIVITY 4:ARRAY ALGORITHM

 //TASK 8: Write a function to rotate an array by k position. log the rotated array.

    function rotateArray(arr3,k){
        let len=arr3.length,temp=0;
        if(k==len)
            return arr3;
        if(k>len){
            k=k%len;
        }
        for(let i=0;i<k;i++)
        {
            temp=arr3.pop();
            arr3.unshift(temp);
        }
        return arr3;
    }
    let arr3=[1,2,3,4,5];
    let k=3;
    console.log(`Original Array : ${arr3}`);
    rotateArray(arr3,k);
    console.log(`Array after rotating : ${arr3}`);
    // Original Array : 1,2,3,4,5
    // Array after rotating : 3,4,5,1,2

 //Task 9 : write a function to merge two sorted arrays into one sorted arrays. log the merged arrays.

    function merge(array1,array2,mergedArray)
    {
        let i=0,j=0;
        while(i<array1.length && j<array2.length){
            if(array1[i]<=array2[j]){
                mergedArray.push(array1[i]);
                i++;
            }
            else{
                mergedArray.push(array2[j]);
                j++;
            }
        }
        while(i<array1.length){
            mergedArray.push(array1[i]);
            i++;
        }
        while(j<array2.length){
            mergedArray.push(array2[j]);
            j++;
        }
    }
    let array1=[1,3,5,6,7,17];
    let array2=[2,4,8,9,12];
    let mergedArray=[];
    merge(array1,array2,mergedArray);
    console.log(mergedArray);
    //output
    // [1, 2, 3, 4, 5, 6, 7, 8, 9, 12, 17 ]

//Acitivity 5 : Dynamic programming

 //Task 10 :Write a function to solve fibonacii series using dynamic programming. log the fibonacii numbers.
  
 const fibonacciOneLiner = n => [...Array(n)].reduce((acc, val, i) => acc.concat(i > 1 ? acc[i - 1] + acc[i - 2] : i), []);
                                                //USING REDUCE
 console.log(`Fibonacci(20) = ${fibonacciOneLiner(20)}`);

 //OUTPUT : Fibonacci(20) = 0,1,1,2,3,5,8,13,21,34,55,89,144,233,377,610,987,1597,2584,4181
 