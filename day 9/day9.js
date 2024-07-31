// Activity 1: Selecting and Manipulating Elements

// Task 1
let main = document.getElementById("main");
main.innerText = "Hello World"     

// Task 2
let e1 = document.getElementsByClassName("lorem");
e1[0].style.color="purple";


// Activity 2: Creating and Appending elements

// Task 3
let body = document.querySelector("body");
let div = document.createElement("div");
div.innerText = "This is added by js.";
body.append(div);

// Task 4
let ul = document.querySelector("ul");
let li = document.createElement("li");
li.innerText = "Invalid Month";
ul.append(li);


// Activity 3: Removing elements

// Task 5
let p = document.querySelector("#month");
p.remove();

// Task 6
ul.removeChild(ul.lastChild);


// Activity 4: Modifying Attributes and Classes

// Task 7
let img = document.querySelector("img");
img.setAttribute("src","https://wallpaperaccess.com/full/2922355.jpg");

// Task 8
e1[0].classList.add("div2");
e1[0].classList.remove("div");


// Activity 5: Event handling

// Task 9
let btn = document.querySelector("button");
btn.addEventListener('click',()=>{
    prompt("You clicked me!...");
});


// Task 10
ul.addEventListener("mouseover",()=>{
    ul.style.borderColor="purple";
    ul.style.borderRadius="5px";
});