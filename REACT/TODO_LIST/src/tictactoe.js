let playGame = confirm('lets play tick tack toe?');

if(playGame){
    let playerChoice = prompt('enter rock, paper or scissor');
    
    if(playerChoice){
        let playerOne = playerChoice.trim().toLowerCase(); // trim white space and convert to lower space 
        if (playerOne === 'rock' || playerOne === 'paper' || playerOne === 'scissor'){
            let computerChoice=Math.floor(Math.random() * 3 + 1 );

            
        }else{
            alert('you did not enter rock paper or scissor ');

        }
    }
    else{
        alert('Sys exit :( ')
    }
}

