//DAY 16 : DSA

//Activity 1:RECURSION

  //Task 1:  Write a recursive function to find the factorial of a number.log the result for a few test cases.
   
   function factorial(n){
    fact *= n ;
    if(n==2) {
        return fact ;
    }
    else {
        return factorial(n-1) ;
    }
   }
   let fact = 1 ;
   console.log(factorial(4)) ; //OUTPUT : 24
   console.log(factorial(7)) ;  //output : 5040
   console.log(factorial(5)) ; //output : 120 

 //Task 2 : Write a recursive function to calculate the nth Fibonacii number.log the result for few cases.
 
    function fibonacii(n){
    if(n<=1) return n ;
    return fibonacii(n-1) + fibonacii(n-2) ;
   }
   console.log("Fibonacii of 5th number :", fibonacii(5));
   //OUTPUT : Fibonacii of 5th number : 5
   console.log("Fibonacii of 7th number :", fibonacii(7)); 
   //OUTPUT : Fibonacii of 7th number : 13

//ACTIVITY : Recursion with Arrays

  //Task 3 : Write a recursive function to find the sum of all elements in an array.log the result for a few test cases.

   function sumOfElements(arr,n){
     if(n<=0) return 0;
     else{
        return sumOfElements(arr, n - 1) + arr[n - 1];
     }
   }
   
   let arr = [1,2,3,4,5] ;
   let sum =sumOfElements(arr,arr.length);
   console.log(sum);   //OUTPUT : 15

 //Task 4 : Write a function to find the maximum element of an array. log the result to console.

    function findMax(arr) {
        if (arr.length === 1) {
            return arr[0];
        }
       
        const subMax = findMax(arr.slice(1));
        return arr[0] > subMax ? arr[0] : subMax;
    }

   arr = [24,45,36] ;
   maximum = arr[0];
   console.log(findMax(arr)) ;  //output : 45

//Activity : 3 string manipulation

  //TASK 5 : Write a recursive function to reverse the string. log the result to few test cases.

    let swap = (str,i,j)=>{
        let arr = str.split('');
        if (i >= j) return arr.join('');
        [arr[i], arr[j]] = [arr[j], arr[i]];
        return swap(arr.join(''), i + 1, j - 1);
    }
    console.log(swap("HELLO",0,3));
    //Output OLLEH

  //Task-6 : Write a recursive function to check if a string is palindrome or not.log the result of few test cases.

    let check = (str,i,j)=>{
        if(i>=j) return true;
        if(str[i]!=str[j]) return false;
        return check(str,i+1,j-1);
    }
    console.log(check("abcba",0,4))
    //Output - True
    console.log(check("hello",0,3))
    //Output - False

//activity 4 : Binary search
  //Task-7: Write a recursive function to perform binary search on a sorted array.log the index of a target element for a few test cases.

    let binarys = (arr,s,e,target)=>{
        let mid = Math.floor(s + (e - s) / 2);
        if(s>=e){
            return -1;
        }
        if(target==arr[mid]) return mid;
        if(target<arr[mid]) return binarys(arr,s,mid-1,target)
        if(target>arr[mid]) return binarys(arr,mid+1,e,target)
    }
    let arr2=[1,3,4,6,8]
    let e = arr.length - 1 ;
    console.log(binarys(arr2,0,e,6));
    //Output - 3

    //Task-8 : Write a recursive function to count the occurances of the traget element in an array.log the result for a few test cases.

    let occ = (arr,i,n,target,count)=>{
        if(i==n) return count;
        if(arr[i]==target){
            count++;
        }
        return occ(arr,i+1,n,target,count)
    }
    let arr3=[1,3,6,6,8]
    let size= arr3.length
    console.log(occ(arr3,0,size,6,0));
    //Output-2

//Activity 5: tree traversals

    //Task-9
    let inord = (arr,i)=>{
        if(i>=arr.length || arr[i]===undefined) return ;
        let leftChild = 2*i+1;
        let rightChild = 2*i+2;
        inord(arr,leftChild);
        console.log(arr[i]);
        inord(arr,rightChild);
    }
    inord([2,4,3,2,4],0);
    ///Output
    // 2
    // 2
    // 4
    // 1
    // 2
    // 4

 //Task-10: to calculate the depth of a binary tree..

    class Tree{
        constructor(val,left=null,right=null){
            this.val=val
            this.left=left
            this.right=right
        }
    }
    function height(root){
        if(root===null) return 0;
        let leftheight=height(root.left);
        let rightHeight=height(root.right);
        return Math.max(leftheight,rightHeight)+1;
    }
    let root = new Tree(1);
    root.left = new Tree(2, new Tree(4), new Tree(5));
    root.right = new Tree(3);

    let hgt = height(root);
    console.log(`Height of Binary Tree is ${hgt}`);
    //Output
    // Height of Binary Tree is 3