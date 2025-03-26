let choices = ["Rock","Paper","Scissors"]; // To display users or comps choice
let userChoice;
let compChoice = Math.floor(Math.random() * 3); // Getting a random number between 0 to 2
let win = 0;
let draw = 0;
let lose = 0;

const rock = document.querySelector("#rockButton")
const paper = document.querySelector("#paperButton")
const scissors = document.querySelector("#scissorsButton")

const winP = document.querySelector("#winP")
const drawP = document.querySelector("#drawP")
const loseP = document.querySelector("#loseP")

const reset = document.querySelector("#reset")

const guide = document.querySelector("#guide")

const notify = document.querySelector("#notify")

// Events for Rock,Paper,Scissors Button

rock.addEventListener("click",()=>{
    userChoice = 0;
    checkWin(userChoice,compChoice);
    compChoice = Math.floor(Math.random() * 3);
})
paper.addEventListener("click",()=>{
    userChoice = 1;
    checkWin(userChoice,compChoice);
    compChoice = Math.floor(Math.random() * 3);
})
scissors.addEventListener("click",()=>{
    userChoice = 2;
    checkWin(userChoice,compChoice);
    compChoice = Math.floor(Math.random() * 3);
})
// Reset the variables
reset.addEventListener("click",()=>{
    draw = 0
    win = 0
    lose = 0
    changeHTML();
    guide.textContent = ""
})
// Function to change guide Text
const guideUser = (val)=>{
    guide.textContent = "Computer Chose: "+choices[compChoice]
    if(val === 0){
        notify.textContent = "Lose :("
        notify.style.color = "#FF0000"
    }
    else if(val === 1){
        notify.textContent = "Win!"
        notify.style.color = "#00BC5E"
    }
    else{
        notify.textContent = "Draw xd"
        notify.style.color = "#975959"
    }
}

// Function to Check and control outcome
const checkWin = (userChoice,compChoice)=>{
    if(userChoice===compChoice){
        draw += 1
        changeHTML(-1)
        guideUser(-1)
    }
    else if(userChoice === 0 && compChoice === 1){
        lose += 1
        changeHTML(0)
        guideUser(0)
    }
    else if(userChoice === 0 && compChoice === 2){
        win += 1
        changeHTML(1)
        guideUser(1)
    }
    else if(userChoice === 1 && compChoice === 0){
        win += 1 
        changeHTML(1)
        guideUser(1)
    }
    else if(userChoice === 1 && compChoice === 2){
        lose += 1
        changeHTML(0)
        guideUser(0)
    }
    else if(userChoice === 2 && compChoice === 0){
        lose += 1
        changeHTML(0)
        guideUser(0)
    }
    else if(userChoice === 2 && compChoice === 1){
        win += 1
        changeHTML(1)
        guideUser(1)
    }
}

// Function to update score
const changeHTML = (val)=>{
        loseP.textContent = "Lose: "+lose
        winP.textContent = "Win: "+win
        drawP.textContent = "Draw: "+draw
}