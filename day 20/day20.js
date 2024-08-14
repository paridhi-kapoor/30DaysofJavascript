//DAY 20 : LOCAL STORAGE & SESSIONSTORAGE

//Activity 1: Understanding storage

//TASK 1 : Write a script to save a string value to local storage and retrieve it. log the retrieved value.

let str= "Hello World!!" ;
localStorage.setItem('mykey' , str) ;
const retrievedValue = localStorage.getItem('myKey');
console.log("Retrieved value :", retrievedValue) ;

//TASK 2 : Write a script to save an object to localstorage by converting it to json string.Retrieve and parse the object, log it.

   const user = {
       name: 'Paridhi Kapoor',
       age: 20,
       email: 'paridhikapoor2004@gmail.com',
   };
   
  //Converting it to json string 
 const json_str = JSON.stringify(user) ;
 localStorage.setItem('user', jsonstr) ;
 const storedUser = localStorage.getItem(user) ;
 //parsed it back to an object 
 const parsedUser = JSON.parse(storedUser) ;
 console.log(parsedUser) ;

//Activity 2 : using localstorage 

// TASK 3 : Create a simple form that saves user input(e.g. name and email) to local storage, when it submittted.Retrieve and display data on page load.

    let submit = document.getElementById('sub');

    console.log(name.value)
    console.log(email.value);

    submit.addEventListener('submit',() =>{
        let name = document.getElementById("userName");
        let email = document.getElementById("userEmail");
        localStorage.setItem("user",name.value);
        localStorage.setItem("email", email.value);
    })

//TASK 4 : write a script to remove an item from local storage. log the local storage content before and after removal.

    const keyToRemove = 'String';
    console.log('Before removal:');
    console.log(localStorage);

    localStorage.removeItem(keyToRemove);

    console.log('After removal:');
    console.log(localStorage);

//Activity 3 :Understanding session storage

//Task 5 : Write a script to save string to session storage and retrieve it. log the retrieved value.

    const key = 'myKey';
    const value = 'Hello, World!';
    sessionStorage.setItem(key, value);

    retrievedValue = sessionStorage.getItem(key);
    console.log('Retrieved value:', retrievedValue);

//Task 6 :Write a script to save an object to session storage by converting it into json string. retrieve and parse the object then log it.
    const obj = {
        UserName : "paridhi",
        branch: "Mech",
        SECTION : 4
    };
    const json = JSON.stringify(obj);
    localStorage.setItem("obj", json);
    const val1 = sessionStorage.getItem("obj");
    console.log(JSON.parse(val1));

//ACTIVITY 4 :Using sessionStorage 

//Task 7 : Create a simple form that saves user input(e.g. name and email) to sessional storage, when it submittted.Retrieve and display data on page load.

    submit.addEventListener('submit',() =>{
        let name = document.getElementById("userName");
        let email = document.getElementById("userEmail");
        sessionStorage.setItem("user",name.value);
        sessionStorage.setItem("email", email.value);
    })

// TASK 8 : write a script to remove an item from local storage. log the local storage content before and after removal.

    console.log('Before removal:');
    console.log(sessionStorage);
    sessionStorage.removeItem('email');
    console.log('After removal:');
    console.log(sessionStorage);

//Activity 5 : comparing local and session storage 

//TASK 9 : write a function that accepts a key and a value and saves the value to both local storage and sessional storage. retrieve and log the value to both storage mechanisms.

    function storage(key,val){
        localStorage.setItem(key,val);
        sessionStorage.setItem(key,val);
    }
    storage("method1","localstorage")
    console.log("the key: ",localStorage.getItem('method1'))

//Task 10 : write a function that clears all data from both local storage and sessional storage. verify that both storage are empty.

    function clearStorage() {
        
        localStorage.clear();

        sessionStorage.clear();
    }

    clearStorage();


    console.log('Storage contents:');
    console.log(`localStorage: ${localStorage.length}`);
    console.log(`sessionStorage: ${sessionStorage.length}`);


    if (localStorage.length === 0 && sessionStorage.length === 0) {
        console.log('Both storages are empty');
    } 
    else {
        console.log('One or both storages are not empty');
    }