let allButtons = document.getElementsByTagName('button');

console.log(allButtons);

let initialStates = [];
for(let i=0; i<allButtons.length; i++) {
    initialStates.push(allButtons[i].classList[1]);
}

let availableColors = ["btn-primary" , "btn-success" , "btn-danger" , "btn-warning" , "btn-info" , "btn-dark"];

console.log(initialStates);

function changeColor(userChoice) {
    if(userChoice.value==="red") {
        changeToRed();
    }
    if(userChoice.value==="green") {
        changeToGreen();
    }
    if(userChoice.value==="random") {
        randomize();
    }
    if(userChoice.value==="reset") {
        resetColors();
    }
    
}

function changeToRed() {
    for(let i=0; i<allButtons.length; i++) {
          allButtons[i].classList.remove(allButtons[i].classList[1]);
          allButtons[i].classList.add("btn-danger");
    }
}

function changeToGreen() {
    for(let i=0; i<allButtons.length;i++) {
        allButtons[i].classList.remove(allButtons[i].classList[1]);
        allButtons[i].classList.add("btn-success");
    }
}

function randomize() {
    for(let i=0;i<allButtons.length;i++) {
        let random = Math.floor(Math.random()*6);
        allButtons[i].classList.remove(allButtons[i].classList[1]);
        allButtons[i].classList.add(availableColors[random]);
    }
}

function resetColors() {
    for(let i=0;i<allButtons.length;i++) {
        allButtons[i].classList.remove(allButtons[i].classList[1]);
        allButtons[i].classList.add(initialStates[i]);
    }
}