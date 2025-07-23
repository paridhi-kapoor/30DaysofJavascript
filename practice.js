//print all no. even from 0 to 100 .

// for(let i =0 ; i<=100 ;i++){
//     if(i%2==0){
//         console.log(i) ;
//     }
// } ;

//Create a game where you start with any random game number. Ask the user to keep guessing the game number until the user enters correct value.
let gamenum =78 ;
let usernum = prompt("Enter your guess for the game number:") ;
while(usernum != gamenum){
    if(usernum < gamenum){
        console.log("Your guess is too low. Try again!") ;
    } else if(usernum > gamenum){
        console.log("Your guess is too high. Try again!") ;
    }
    usernum = prompt("Enter your guess for the game number:") ;
}
console.log("You guessed the correct number!") ;   //can't run without browser environment