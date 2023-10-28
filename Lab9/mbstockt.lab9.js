function funGame(){

    let choice = prompt("Rock, Paper, or Scissors?").toLowerCase();

    let randomChoice;

    let num = Math.floor(Math.random()*3); 
    if(num == 0){
        randomChoice = "rock";
    }
    else if(num == 1){
        randomChoice = "paper";
    }
    else{
        randomChoice = "scissors";
    }


    console.log("User chose: " + choice);
    console.log("Computer chose: " + randomChoice);


    if(choice == randomChoice){
        console.log("It's a tie!")
    }
    else if(choice == "paper"){
        if(randomChoice == "scissors"){
            console.log("You lost! Maybe next time.")
        }
        else{
            console.log("Congratulations! You won!");
        }
    }
    else if(choice == "rock"){
        if(randomChoice == "paper"){
            console.log("You lost! Maybe next time.")
        }
        else{
            console.log("Congratulations! You won!");
        }
    }
    else if(choice == "scissors"){
        if(randomChoice == "rock"){
            console.log("You lost! Maybe next time.")
        }
        else{
            console.log("Congratulations! You won!");
        }
    }

let playAgain = confirm("Shall we play again?");
if(playAgain == true){
    funGame();
}
else{
    console.log("Thanks for playing.")
}

}
funGame();