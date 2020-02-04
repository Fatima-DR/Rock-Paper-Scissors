console.log("Rock, Paper, Scissors");

    //Validate choice, make sure it is correct 

const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
});

//call user response

readline.question("Let's Play?\n", tryAgainResponse);

readline.question("Try again? Y/N\n", tryAgainResponse);
function tryAgainResponse(response) {

    
    if (response.toLowerCase() === "y"){
        readline.question("Choose Rock, Paper, or Scissors??\n", handleUserResponse);
    }
    else if (response.toLowerCase() ==="n"){
        readline.close();
    }
    else {
        console.log("Invalid try again")
    }    
}
//Validate choice, make sure it is correct

//function to handleUserResponse
function handleUserResponse(response) {

let choices = ["rock", "paper", "scissors"];
let randomNum = choices[Math.floor(Math.random() * 3)];
console.log(randomNum);
//Random selection - Rock, Paper, Scissors
//Compare choices
//Who won?
if (response.toLowerCase() === randomNum){
    console.log("Tie!");
    }
    else if (response.toLowerCase()  === 'paper' && randomNum === 'rock'){
    console.log("You win! :)");
    }
    else if (response.toLowerCase() === 'rock' && randomNum === 'scissors'){
    console.log("You win! :)");
    }
    else if (response.toLowerCase() === 'scissors' && randomNum === 'rock'){
    console.log("You lose! :(");
    }
    else if (response.toLowerCase() === 'rock' && randomNum === 'paper'){
    console.log("You lose! :(");
    }
    else if (response.toLowerCase() === 'paper' && randomNum === 'scissors'){
    console.log("You lose! :(");
    }
    else if (response.toLowerCase() === 'scissors' && randomNum === 'paper'){
    console.log("You win! :)");
    }
    else{ 
    console.log("Invalid, try again!!");
    }


    //console.log(response);
    readline.close();
};






