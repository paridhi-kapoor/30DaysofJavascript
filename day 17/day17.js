//Day 17 : Data structures

// activity 1 : Linked lists 

 //Task 1 :Implement the node class to represent the element in alinked list with properties next and value.

  class Node{
    constructor(value ){
        this.value = value;
        this.next = null ;
    }
  }

//task 2 : Implement a linked list class with methods to add node to the end,removing the node from the end and display all nodes.
 
    class LinkedList {
        constructor(){
            this.head = null ;
        }
    

    add(value) {                                     //adding node to the end
        const newNode = new Node(value);
        if (this.head === null) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next !== null) {
                current = current.next;
            }
            current.next = newNode;
        }
    }

    remove() {                                   //removing node to the end 
        if (this.head === null) {
            return null;
        } else if (this.head.next === null) {
            const value = this.head.value;
            this.head = null;
            return value;
        } else {
            let current = this.head;
            while (current.next.next !== null) {
                current = current.next;
            }
            const value = current.next.value;
            current.next = null;
            return value;
        }
    }

    display() {                               //display all nodes
        let current = this.head;
        let result = '';
        while (current !== null) {
            result += current.value + ' -> ';
            current = current.next;
        }
        console.log(result + 'null');
    }
   }
    const list = new LinkedList();
    list.add(1);
    list.add(2);
    list.add(3);
    list.display(); // Output: 1 -> 2 -> 3 -> null
    list.remove();
    list.display(); // Output: 1 -> 2 -> null

//Activity 2 : Stack 

 // Task 3 :Implement  STACK class with methods push (add),pop (remove the last ) and peek (view the top element).

 class Stack {
    constructor() {
        this.items = [];
    }

    push(element) {
        this.items.push(element);
    }

    pop() {
        if (this.isEmpty()) {
            return "Underflow";
        }
        return this.items.pop();
    }

    peek() {
        if (this.isEmpty()) {
            return null;
        }
        return this.items[this.items.length - 1];
    }

    isEmpty() {
        return this.items.length === 0;
    }

    size() {
        return this.items.length;
    }
}

// Example usage:
let stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
console.log(stack.peek());  // Output: 3
console.log(stack.pop());   // Output: 3
console.log(stack.peek());  // Output: 2

 

