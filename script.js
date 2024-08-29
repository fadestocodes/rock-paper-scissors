console.log("Hello, World!");

let humanScore = 0;
let computerScore = 0;

function getComputerChoice(){
    const choice = Math.floor(Math.random()*3);
    if (choice === 0){
        return "Rock";
    } else if (choice === 1){
        return "Paper";
    } else if (choice === 2){
        return "Scissors"
    }

}

// console.log(getComputerChoice());

function getHumanChoice(){

    const input = prompt("Enter Rock, Paper, or Scissors: ");
    if (input.toLowerCase() === "rock"){
        console.log("You picked Rock ");
        return "rock";
    } else if (input.toLowerCase() === 'paper'){g
        console.log("You picked Paper");
        return "paper";
    } else if (input.toLowerCase() === 'scissors'){
        console.log("You picked Scissors");
        return "scissors";
    } else{
        console.log("Invalid input, please try again.");
        getHumanChoice();
    }
}

// getHumanChoice();

function playRound(cpu, human){

   


    if (cpu.toLowerCase() === "rock"){
        if (human.toLowerCase() === "rock"){
            console.log("It's a tie!");
            console.log(`Your score: ${humanScore}\nComputer Score: ${computerScore}.`);
            const div = document.createElement("div")
            div.setAttribute("id", "tie")
            div.textContent = `It's a tie! Your score is: ${humanScore}\nComputer Score: ${computerScore}.`
            document.body.appendChild(div)
        } else if (human.toLowerCase() === 'paper'){
            console.log("Paper beats Rock, you win!");
            humanScore ++;
            console.log(`Your score: ${humanScore}\nComputer Score: ${computerScore}.`);
            const div = document.createElement("div")
            div.setAttribute("id", "win")
            div.textContent = `You win! Your score is: ${humanScore}\nComputer Score: ${computerScore}.`
            document.body.appendChild(div)
            if (humanScore  ===5 || computerScore === 5){
                if (humanScore === 5){
                    const div = document.createElement("div")
                    div.textContent = `\nYou are the winner! The final score was You: ${humanScore} vs CPU: ${computerScore}`
                    document.body.appendChild(div)
                } else {
                    const div = document.createElement("div")
                    div.textContent = `\nYou lose! The final score was You: ${humanScore} vs CPU: ${computerScore}`
                    document.body.appendChild(div)
                }
            }
        } else {
            console.log("Rock beats Scissors, you lose!");
            computerScore ++;
            console.log(`Your score: ${humanScore}\nComputer Score: ${computerScore}.`);
            const div = document.createElement("div")
            div.setAttribute("id", "lose")
            div.textContent = `You lose! Your score is: ${humanScore}\nComputer Score: ${computerScore}.`
            document.body.appendChild(div)
            if (humanScore===5 || computerScore === 5){
                if (humanScore === 5){
                    const div = document.createElement("div")
                    div.textContent = `\nYou are the winner! The final score was You: ${humanScore} vs CPU: ${computerScore}`
                    document.body.appendChild(div)
                } else {
                    const div = document.createElement("div")
                    div.textContent = `\nYou lose! The final score was You: ${humanScore} vs CPU: ${computerScore}`
                    document.body.appendChild(div)
                }
            }
            }
        }
    

    if (cpu.toLowerCase() === 'paper'){
        if (human.toLowerCase === 'paper'){
            console.log("It's a tie!");
            console.log(`Your score: ${humanScore}\nComputer Score: ${computerScore}.`);
            const div = document.createElement("div")
            div.setAttribute("id", "tie")
            div.textContent = `It's a tie! Your score is: ${humanScore}\nComputer Score: ${computerScore}.`
            document.body.appendChild(div)
        } else if (human.toLowerCase() === 'rock'){
            console.log("Paper beats Rock, you lose!");
            computerScore ++;
            console.log(`Your score: ${humanScore}\nComputer Score: ${computerScore}.`);
            const div = document.createElement("div")
            div.setAttribute("id", "lose")
            div.textContent = `You lose! Your score is: ${humanScore}\nComputer Score: ${computerScore}.`
            document.body.appendChild(div)
            if (humanScore ===5|| computerScore === 5){
                if (humanScore === 5){
                    const div = document.createElement("div")
                    div.textContent = `\nYou are the winner! The final score was You: ${humanScore} vs CPU: ${computerScore}`
                    document.body.appendChild(div)
                } else {
                    const div = document.createElement("div")
                    div.textContent = `\nYou lose! The final score was You: ${humanScore} vs CPU: ${computerScore}`
                    document.body.appendChild(div)
                }
            }
        } else {
            console.log("Scissors beat Paper, you win!");
            humanScore ++;
            console.log(`Your score: ${humanScore}\nComputer Score: ${computerScore}.`);
            const div = document.createElement("div")
            div.setAttribute("id", "win")
            div.textContent = `You win! Your score is: ${humanScore}\nComputer Score: ${computerScore}.`
            document.body.appendChild(div)
            if (humanScore===5 || computerScore === 5){
                if (humanScore === 5){
                    const div = document.createElement("div")
                    div.textContent = `\nYou are the winner! The final score was You: ${humanScore} vs CPU: ${computerScore}`
                    document.body.appendChild(div)
                } else {
                    const div = document.createElement("div")
                    div.textContent = `\nYou lose! The final score was You: ${humanScore} vs CPU: ${computerScore}`
                    document.body.appendChild(div)
                }
            }
            }
        }

    if (cpu.toLowerCase()==='scissors'){
        if (human.toLowerCase() === 'scissors'){
            console.log("It's a tie!");
            const div = document.createElement("div")
            div.setAttribute("id", "tie")
            div.textContent = `It's a tie! Your score is: ${humanScore}\nComputer Score: ${computerScore}.`
            document.body.appendChild(div)
        } else if (human.toLowerCase() === 'rock'){
            console.log("Rock beats Scissors, you win!");
            humanScore++;
            console.log(`Your score: ${humanScore}\nComputer Score: ${computerScore}.`);
            const div = document.createElement("div")
            div.setAttribute("id", "win")
            div.textContent = `You win! Your score is: ${humanScore}\nComputer Score: ${computerScore}.`
            document.body.appendChild(div)
            if (humanScore===5 || computerScore === 5){
                if (humanScore === 5){
                    const div = document.createElement("div")
                    div.textContent = `\nYou are the winner! The final score was You: ${humanScore} vs CPU: ${computerScore}`
                    document.body.appendChild(div)
                } else {
                    const div = document.createElement("div")
                    div.textContent = `\nYou lose! The final score was You: ${humanScore} vs CPU: ${computerScore}`
                    document.body.appendChild(div)
                }
            }
        } else {
            console.log("Scissors beat Paper, you lose!");
            computerScore++;
            console.log(`Your score: ${humanScore}\nComputer Score: ${computerScore}.`);
            const div = document.createElement("div")
            div.setAttribute("id", "lose")
            div.textContent = `You lose! Your score is: ${humanScore}\nComputer Score: ${computerScore}.`
            document.body.appendChild(div)
            if (humanScore===5 || computerScore === 5){
                if (humanScore === 5){
                    const div = document.createElement("div")
                    div.textContent = `\nYou are the winner! The final score was You: ${humanScore} vs CPU: ${computerScore}`
                    document.body.appendChild(div)
                } else {
                    const div = document.createElement("div")
                    div.textContent = `\nYou lose! The final score was You: ${humanScore} vs CPU: ${computerScore}`
                    document.body.appendChild(div)
                }
            }
            }
        }
}





function playGame(){
    // let i =0;
    // while (i<5){
    //     playRound(getComputerChoice(),getHumanChoice());
    //     i++;
    // }

    button = document.querySelectorAll(".container button");
    button.forEach(button=>{
        button.addEventListener("click", ()=>{
            playRound(getComputerChoice(), button.id)
        })
    })

}



playGame();