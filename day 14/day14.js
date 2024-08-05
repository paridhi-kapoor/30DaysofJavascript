//Activity 1: Class Definition

//Task 1:
class Individual {
    constructor(fullName, years) {
        this.fullName = fullName;
        this.years = years;
    }

    introduce() {
        return `Hello, my name is ${this.fullName} and I am ${this.years} years old.`;
    }
    changeAge(newYears) {
        this.years = newYears;
        console.log(`Updated age: ${this.years}`);
    }
}

const individual = new Individual('Amit Kumar', 30);
console.log(individual.introduce());  // Output: Hello, my name is Amit Kumar and I am 30 years old.

//Task 2:
individual.changeAge(30);   // Output: Updated age: 29


//Activity 2: Class Inheritance

//Task 3:
class Learner extends Individual {
    constructor(fullName, years, id) {
        super(fullName, years);
        this.id = id;
    }
    introduce() {
        return `Hello, my name is ${this.fullName}, I am ${this.years} years old, and my student ID is ${this.id}.`;
    }

    getId() {
        return this.id;
    }
}

const learner = new Learner('akshat', 19, '5678');
console.log(learner.getId());   // Output: 5678

//Task 4:
console.log(learner.introduce());


//Activity 3: Static Methods and Properties

//Task 5:
class PersonBase {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    }

    static welcomeMessage() {
        return 'Hello, welcome!';
    }
}

console.log(PersonBase.welcomeMessage());   // Output: Hello, welcome!

//Task 6:
class StudentBase extends PersonBase {
    static totalStudents = 0;

    constructor(name, age, id) {
        super(name, age);
        this.id = id;
        StudentBase.totalStudents++;
    }

    greet() {
        return `Hello, my name is ${this.name}, I am ${this.age} years old, and my student ID is ${this.id}.`;
    }

    getId() {
        return this.id;
    }
}

const studentA = new StudentBase('alice', 21, '5698');
const studentB = new StudentBase('Sita', 22, '412');
console.log(StudentBase.totalStudents); // Output: 2


//Activity 4: Getters and Setters

//Task 7:
class PersonDetail {
    constructor(first, last) {
        this.first = first;
        this.last = last;
    }

    get completeName() {
        return `${this.first} ${this.last}`;
    }
    set completeName(name) {
        [this.first, this.last] = name.split(' ');
    }
}

const personDetail = new PersonDetail('k', 'sharma');
console.log(personDetail.completeName); // Output: k sharma

//Task 8:
personDetail.completeName = 'paridhi kapoor';
console.log(personDetail.completeName); // Output: paridhi kapoor


//Activity 5: Private Fields (Optional)

//Task 9 and 10:
class BankAccount {
    #amount = 0;

    depositFunds(amount) {
        if (amount > 0) {
            this.#amount += amount;
            this.showBalance();
        }
    }

    withdrawFunds(amount) {
        if (amount > 0 && amount <= this.#amount) {
            this.#amount -= amount;
            this.showBalance();
        }
    }

    showBalance() {
        console.log(`Current balance: ${this.#amount}`);
    }
}
const bankAccount = new BankAccount();
bankAccount.depositFunds(150);  // Output: Current balance: 150
bankAccount.withdrawFunds(70);  // Output: Current balance: 80
bankAccount.withdrawFunds(90);  // No output because the withdrawal amount is greater than the balance