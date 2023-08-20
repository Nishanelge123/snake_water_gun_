function computerChoice() {
    const choices = ['snake', 'water', 'gun'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function determineWinner(player, computer) {
    if (player === computer) {
        return "It's a tie!";
    } else if (
        (player === 'snake' && computer === 'water') ||
        (player === 'water' && computer === 'gun') ||
        (player === 'gun' && computer === 'snake')
    ) {
        return 'Player wins!';
    } else {
        return 'Computer wins!';
    }
}

function playGame() {
    for (let i = 0; i < 3; i++) {
        const playerChoice = prompt("Enter your choice: snake, water, or gun").toLowerCase();
        
        if (playerChoice !== 'snake' && playerChoice !== 'water' && playerChoice !== 'gun') {
            console.log("Invalid choice. Please choose snake, water, or gun.");
            i--;
            continue;
        }
        
        const computer = computerChoice();
        const result = determineWinner(playerChoice, computer);
        
        console.log(`Player chose: ${playerChoice}`);
        console.log(`Computer chose: ${computer}`);
        console.log(`Result: ${result}`);
    }
}

// Call the playGame function to start the game
playGame();
