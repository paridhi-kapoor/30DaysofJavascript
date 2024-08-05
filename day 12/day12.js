//ACTIVITY 1 

// Task1 :
const getHigh = (x)=>{
    try{
        if(x>10) throw "too high number";
        else throw "low number";
    }
    catch(err){
        console.log(err);
    }
    }
    getHigh(16);
    
    //output : too high number
    
    //Task 2 :
    
    function isValid(a,b){
        try{
            if(b==0) throw "not a valid division";
        }
        catch(err){
            console.log(err);
        }
    };
    isValid(2,0);
    
    //output : not a valid division
    
    // ACTIVITY 2 
    
    //Task 3 :
    
    let n = 20;
    try{
        console.log("executing in try block");
    }
    catch(err){
        console.log("executing in catch block");
        console.log(err);
    }
    finally{
        console.log("executing in finally block");
    }
    
    //output : executing in try block
    //         executing in finally block
    
    
    // ACTIVITY 3 
    
    //Task 4 
    
    class ComparisionForGreaterError extends Error{
        constructor(msg){
            super(msg);
        }
    }
    
    const checkGreater=(a,b)=>{
    try{
        if(a<b){
            throw new ComparisionForGreaterError("first is not greater than second");
        }
    }
    catch(msg){
        console.log(msg);
    };
    }
    
    checkGreater(2,4);
    
    //output : Error: first is not greater than second
    
    //Task 5 
    class ValidationError extends Error{
        constructor(msg){
            super(msg);
            this.name = "ValidationError";
        }
    }
    const checkValid = (s)=>{
        try{
            if(s == "" || s.trim()=='')
                throw new ValidationError("empty string found!");
            else if(s[0]>='a' && s[0]<='z'){
                throw new ValidationError("first character connot be small");
            }
            else if(s.length>20){
                throw new ValidationError("string is too large");
            }
            else
            console.log("Valid String");
        }
        catch(err){
            console.log(`${err.name} : ${err.message}`);
        }
    }
    
    checkValid("");
    checkValid("Dfjhreuihtesjdkfheoiefhoiehdnkjfrh");
    checkValid("hello");
    checkValid("Hello");
    
    /* output : 
    ValidationError : empty string found!
    ValidationError : string is too large
    ValidationError : first character connot be small
    Valid String
    */
    
    // ACTIVITY 4 
    
    //Task 6 
    
    const randomFunction = ()=>{
        return new Promise((resolve,reject)=>{
            setTimeout(()=>{
            let r = Math.floor(Math.random() * 10)
            if(r<5)
                resolve("executed successfully");
            else{
                reject(new Error("something went wrong"));
            }
        },2000);
        })
    }
    randomFunction().then((msg)=>{
        console.log(msg);
    })
    randomFunction().catch((err)=>{
        console.log(err.message);
    });
    
    //output : executed successfully
    //output : Error : something went wrong
    
    //Task 7 
    
    (async function (){
        try{
        let promise = await randomFunction();
        console.log(promise);
        }
        catch(err){
            console.log(err);
        }
    })()
    
    //output : executed successfully
    //output : Error : something went wrong
    
    // ACTIVITY 5
    
    //Task 8
    const URL = 'https://zoo-animals-api.p.rapidapi.com/animals/rand/10/randomData';
    const option = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': '50920d862amsh183ad305193748dp1d2eb2jsnb6d30ebed125',
            'x-rapidapi-host': 'zoo-animals-api.p.rapidapi.com'
        }
    };
    
    const funPromise = ()=>{
        return new Promise((resolve,reject)=>{
            fetch(URL,option).then((response)=>{
                if(response.ok)
                    resolve(response.text());
                else{
                    reject(`something went wrong   Error : ${response.status}`);
                }
            })
            .catch((err)=>{
                reject(err);
            })
        })
    }
    funPromise()
    .then((msg)=>{
        console.log(msg);
    })
    .catch((err)=>{
        console.log(err);
    })
    
    
    //output : something went wrong   Error : 404
    
    
    //Task 9 :
    
    const url = 'https://zoo-animals-api.p.rapidapi.com/animals/rand/10';
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': '50920d862amsh183ad305193748dp1d2eb2jsnb6d30ebed125',
            'x-rapidapi-host': 'zoo-animals-api.p.rapidapi.com'
        }
    };
    
    (async function (){
    try {
        const response = await fetch(url,options);
        const result = await response.text();
        console.log(result);
    } catch (error) {
        console.error(error);
    }
    })()
    
    //output : 404 (Not Found)