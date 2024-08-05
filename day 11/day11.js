//DAY 11 : Promises and ASYNC AWAIT 

//ACTIVITY 1 : UNDERSTANDING PROMISES 

//TASK 1 :create a promise that resolves with a message after a  2 seconds time out and log the message to console.

let promise1 = new Promise(function(resolve) {
    setTimeout(function() {
      resolve("Hello Buddy!!");
    }, 2000);
  });
  
  promise1.then(function(value) {
    console.log(value); 
  });  
  //Hello Buddy!!

  //TASK 2 : Create a promise that rejcts with an error messae after a 2 seconds of timeout and handle the error using .catch().
  
  const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject(new Error("error"));
    }, 2000);
  });
  promise2.catch((error) => {
    console.error(error.message);   
  });
//output : error

  //ACTIVITY 2 :CHAINING PROMISES 

  //TASK 3 : create a sequence of promises that stimulate fetching data from a server,chain the promise to log messages in specific order.
  
  promise1.then((value) => {
        console.log(value);
        return promise2;
    })
    .catch((error) => {
        console.error(error.message);
    });
    //OUTPUT : Hello Buddy!!
    //output : error

  
  //TASK 4 :WRITE A sync function 
  function api1() {
    return promise1;
}

async function func1() {
        const output = await api();
        console.log(output);
}
func1();
//OUTPUT : Hello Buddy!!

// Task 5
function api2(){
  return promise2;
}
async function rejectedPromise(){
  try{
      await api2();
  }
  catch(error){
      console.log(error);
  }
}
rejectedPromise();
// output : Error:error 


// Activity 4 : Fetching data from API

// Task 6
let apiUrl = "https://random-d.uk/api";
const fetchData = ()=>{
  return new Promise((resolve,reject)=>{
      fetch(apiUrl)
      .then(response => {
          if(!response.ok){
              reject(new Error(`Error: ${response.status} - Resource not found`));
          } else{
              response.json().then(data => resolve(data));
          }
      })
      .catch(error => reject(error));
  });
};
fetchData().then((data) => {
  console.log(data);
}).catch((error) => {
  console.log(error);
});


// Task 7
const fetchData2 = async()=>{
  try{
      let response = await fetch(apiUrl);
      if(!response.ok){
          throw new Error(`Error: ${response.status} - Resource not found`);
      }
      let data = await response.json();
      console.log(data);
  }catch(error){
      console.log(error);
  }
};
fetchData2()




// Activity 5  : Concurrent Promises

// Task 8
function api3(){
  return new Promise((resolve,reject)=>{
      setTimeout(()=>{
          resolve("How are you ?");
      },5000)
  });
}
const p1 = api1();
const p2 = api2();
Promise.all([p1,p2]).then((messages)=>{
  console.log(messages);
});
// output: [ 'Hello Buddy!!', 'How are you ?' ]


// Task 9
Promise.race([p1,p2]).then((messages)=>{
  console.log(messages);
});
//output : Hello Buddy !!