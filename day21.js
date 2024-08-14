//DAY 21 : LEETCODE EASY

//Acitvity 1 :TWO SUM

//TASK 1 : solve the two sum problem in leetcode.

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {   // function taking nums array and target as input .
    for( i =0 ; i<nums.length ; i++){
    for(let j =i+1 ; j<nums.length ; j++){
        if(nums[i]+nums[j]==target ){
            return [i,j] ;
        }
    }
    }
    return [0,1];
}; 
    /*Input nums = [3,2,4]
    target =6
    Output :[1,2]
    Expected :[1,2] */

    /* input :nums =[2,7,11,15]    
    target =9
    Output [0,1]  Expected [0,1] */

//ACTIVITY 2 :  REVERSE INTEGER 

//TASK 2 :  solve the "Reverse Integer " problem in leetcode.

    /**
     * @param {number} x
     * @return {number}
     */
    var reverse = function(x) {
        let res = 0;
        if (x < 0) {
            res = parseInt(String(x).slice(1).split('').reverse().join('')) * -1;
        } else {
            res = parseInt(String(x).split('').reverse().join(''));
        }

        if (res > Math.pow(2, 31) - 1 || res < -Math.pow(2, 31)) {
            return 0;
        }

        return res;    
    };
    /*Example 1:
    Input: x = 123
    Output: 321
    Example 2:
    Input: x = -123
    Output: -321*/

//ACTIVITY 3 : Palindrome number 

// task 3 :  solve the "PALINDROME NUMBER" problem in leetcode.

    /**
     * @param {number} x
     * @return {boolean}
     */
    var isPalindrome = function(x) {
        var reverse = 0;
    var copy = x;

    while (copy > 0) {
        const digit = copy % 10;
        reverse = reverse * 10 + digit;
        copy = ~~(copy / 10);
    }

    return reverse == x;
    
    };
    /*Input: x = 121
    Output: true */

//ACTIVITY 4 :Merge two sorted lists

//Task 4 : solve the "Merged two sorted list" problem in leetcode.

    /**
     * Definition for singly-linked list.
     * function ListNode(val, next) {
     *     this.val = (val===undefined ? 0 : val)
     *     this.next = (next===undefined ? null : next)
     * }
     */
    /**
     * @param {ListNode} list1
     * @param {ListNode} list2
     * @return {ListNode}
     */
    var mergeTwoLists = function(list1, list2) {
        if (!list1) return list2;
        else if (!list2) return list1;
        else if (list1.val <= list2.val) {
            list1.next = mergeTwoLists(list1.next, list2);
            return list1;
        } else {
            list2.next = mergeTwoLists(list1, list2.next);
            return list2 ;
        }
    };

    /*Input list1 = [1,2,4]
    list2 = [1,3,4]
    Output :[1,1,2,3,4,4]
    Expected : [1,1,2,3,4,4]*/

//Activity 5 : Valid Paranthesis 

//TASK 5 :  solve the "VALID PARENTHESIS " problem in leetcode.

    /**
     * @param {string} s
     * @return {boolean}
     */
    var isValid = function(s) {
        let stack = [];                                          
        for (let c of s) {                                  
            if (c === '(' || c === '{' || c === '[') {            
                stack.push(c);                                  
            } else {                                      
                if (!stack.length ||                           
                    (c === ')' && stack[stack.length - 1] !== '(') || 
                    (c === '}' && stack[stack.length - 1] !== '{') ||
                    (c === ']' && stack[stack.length - 1] !== '[')) {
                    return false;                                      
                }
                stack.pop(); 
            }
        }
        return !stack.length; 
    };

    /*Input s ="()"
    Output : true
    Expected :true*/



