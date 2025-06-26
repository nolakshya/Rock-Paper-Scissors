console.log("Hello World");
function getRandomArbitrary(min,max) {
    const minCeiled =Math.ceil(min);
    const maxFloored =Math.floor(max);
    return Math.floor(Math.random()*(maxFloored-minCeiled +1)+minCeiled);
 }
 function getComputerChoice() {
 const value =getRandomArbitrary(1,3);
if (value === 1)
{
    return ("rock");
}
else if(value === 2)
{
    return ("paper");
}
else if (value === 3)
{
    return ("scissors");
}
}
 let computerSelection;
 
 function getHumanChoice() {
    const Choice =prompt("Rock,Paper or Scissors?");
    return (Choice.toLowerCase());
 }
 let humanSelection;
function playGame() {
     let humanScore = 0;
    let computerScore = 0;

     humanSelection= getHumanChoice();
     computerSelection= getComputerChoice();
playRound(humanSelection,computerSelection);
alert(`    computerChoice=${computerSelection}
      humanScore =${humanScore}
     computerScore=${computerScore}
     `
    )
     humanSelection= getHumanChoice();
     computerSelection= getComputerChoice();
playRound(humanSelection,computerSelection);
alert(`    computerChoice=${computerSelection}
      humanScore =${humanScore}
     computerScore=${computerScore}
     `
    )
     humanSelection= getHumanChoice();
     computerSelection= getComputerChoice();
playRound(humanSelection,computerSelection);
alert(`    computerChoice=${computerSelection}
      humanScore =${humanScore}
     computerScore=${computerScore}
     `
    )
     humanSelection= getHumanChoice();
     computerSelection= getComputerChoice();
playRound(humanSelection,computerSelection);
alert(`    computerChoice=${computerSelection}
      humanScore =${humanScore}
     computerScore=${computerScore}
     `
    )
     humanSelection= getHumanChoice();
     computerSelection= getComputerChoice();
playRound(humanSelection,computerSelection);
alert(`    computerChoice=${computerSelection}
      humanScore =${humanScore}
     computerScore=${computerScore}
     `
    )
function playRound(humanChoice,computerChoice){
    if (humanChoice === "rock" && computerChoice === "paper")
        {
            console.log("you lose! paper beats rock. ");
            computerScore++ ;       
        }
    else if (humanChoice === "rock" && computerChoice === "scissors")
        {
            console.log("you win! rock beats scissors. ");
            humanScore++;
        }
    else if (humanChoice === "paper" && computerChoice === "rock")
        {
            console.log("you win! paper beats rock. "); 
            humanScore++;
        } 
    else if (humanChoice === "paper" && computerChoice === "scissors")
        {
            console.log("you lose! scissors beats paper. ");
            computerScore++ ;
        }
    else if (humanChoice === "scissors" && computerChoice === "rock")
        {
            console.log("you lose! rock beats scissors. ");
            computerScore++;
        }
    else if (humanChoice === "scissors" && computerChoice === "paper")
        {
            console.log("you win! scissors beats paper. ");
            humanScore++;
        }
     if (humanChoice === computerChoice)
     {
         console.log("It's a draw!");
     }
}

if (humanScore > computerScore) 
{
   console.log("you won! congrats.")
   alert(`You won! Congrats.`)
}
else if (computerScore > humanScore)
{
    console.log("you lost! it's okay.")
    alert(`you lost! it's okay.`)
}
else if ( humanScore == computerScore)
{
    console.log("you drew!")
    alert(`you drew!`)
}

}
playGame()