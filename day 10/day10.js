// ACTIVITY 1

// Task 1
let infoText = document.querySelector("#infoText");
let changeTextBtn = document.querySelector("#changeTextBtn");
changeTextBtn.addEventListener("click", () => {
    infoText.innerText = "Text has been updated!";
});

// Task 2
let toggleImageBtn = document.querySelector("#toggleImageBtn");
let picture = document.querySelector("#picture");
toggleImageBtn.addEventListener("dblclick", function () {
    picture.style.visibility = picture.style.visibility === "hidden" ? "visible" : "hidden";
});

// ACTIVITY 2
// Task 3
let hoverText = document.querySelector("#hoverText");
hoverText.addEventListener("mouseover", () => {
    hoverText.style.backgroundColor = "lightblue";
});

// Task 4
hoverText.addEventListener("mouseout", () => {
    hoverText.style.backgroundColor = "white";
});

// ACTIVITY 3
// Task 5
let keyInput = document.querySelector("#keyInput");
keyInput.addEventListener("keydown", (event) => {
    console.log(event.key);
});

// Task 6
let favInput = document.querySelector("#favInput");
favInput.addEventListener("keyup", () => {
    console.log(keyInput.value);
});

// ACTIVITY 4
// Task 7
let questionsForm = document.querySelector("#questionsForm");
let scenarioSelect = document.querySelector("#scenarioSelect");
let educationSelect = document.querySelector("#educationSelect");
questionsForm.addEventListener("submit", (event) => {
    event.preventDefault(); // Prevent default form submission
    console.log(scenarioSelect.value);
    console.log(educationSelect.value);
});

// Task 8
let scenarioResult = document.querySelector("#scenarioResult");
scenarioSelect.addEventListener("change", () => {
    scenarioResult.innerText = `Selected Option : ${scenarioSelect.value}`;
});

// ACTIVITY 5
// Task 9
let fruitList = document.querySelector("#fruitList");
fruitList.addEventListener("click", function (event) {
    let listItem = event.target;
    if (listItem.tagName === "LI") {
        console.log(listItem.textContent);
    }
});

// Task 10
let addItemBtn = document.querySelector("#addItemBtn");
addItemBtn.addEventListener("click", () => {
    let newItemInput = document.querySelector("#newItemInput");
    let li = document.createElement("LI");
    li.innerText = newItemInput.value;
    fruitList.appendChild(li);
    fruitList.addEventListener("click", (event) => {
        if (event.target.tagName === "LI") {
            console.log(event.target.innerText);
        }
    });
});