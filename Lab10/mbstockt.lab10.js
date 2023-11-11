document.addEventListener("DOMContentLoaded", function() {


function randomChoice(){
    let randomChoice;

    let num = Math.floor(Math.random()*3); 
    if(num == 0){
        return "rock";
    }
    else if(num == 1){
        return "paper";
    }
    else{
        return "scissors";
    }
}

function playGame(choice, compChoice){

    if(choice == compChoice){
        winner.innerHTML = `You chose ${choice}, computer chose ${compChoice}. You tied...`;
    }
    else if(choice == "paper"){
        if(compChoice == "scissors"){
            winner.innerHTML = `You chose ${choice}, computer chose ${compChoice}. You lose.`;
        }
        else{
            winner.innerHTML = `You chose ${choice}, computer chose ${compChoice}. You win!`;
        }
    }
    else if(choice == "rock"){
        if(compChoice == "paper"){
            winner.innerHTML = `You chose ${choice}, computer chose ${compChoice}. You lose.`;
        }
        else{
            winner.innerHTML = `You chose ${choice}, computer chose ${compChoice}. You win!`;
        }
    }
    else if(choice == "scissors"){
        if(compChoice == "rock"){
            winner.innerHTML = `You chose ${choice}, computer chose ${compChoice}. You lose.`;
        }
        else{
            winner.innerHTML = `You chose ${choice}, computer chose ${compChoice}. You win!`;
        }
    }


}

const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const choice = button.id;
    const compChoice = randomChoice();
    const result = playGame(choice, compChoice);
   var winner = document.getElementById("winner").innerHTML;
  });
});
    })



