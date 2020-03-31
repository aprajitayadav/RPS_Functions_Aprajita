var hands = ['rock', 'paper', 'scissors'];

var getHand = function () {
    return hands[parseInt(Math.random()*10%3)];
}

var player1 = {
    name: 'Player1',
    hand: getHand
}

var player2 = {
    name: 'Player2',
    hand: getHand
}

var winResults = {
    rock: "scissors",
    paper: 'rock',
    scissors: 'paper'
};

console.log(playGame(player1, player2, 5))

//set up round function to play one match of RPS 
function round() {
    
    let player1Hand = player1.hand();
    let player2Hand = player2.hand();

    console.log(player1.name, "chose", player1Hand, "||||", player2.name, "chose", player2Hand)

    if (player1Hand == player2Hand) {
        return null
    } else if (winResults[player1Hand] == player2Hand){
        console.log(player1.name, "won.");
        return player1
    } else {
        console.log(player2.name, "won.");
        return player2
    }
    
}

function playGame(player1, player2, playUntil) {

    let player1Score = 0;
    let player2Score = 0;

    for (var i=1; i <= playUntil; i++) 
    {

        console.log("round", i)
        let winner = round();
        
        if (winner == player1)  {
            player1Score++;
        } else if (winner == player2) {
            player2Score++;
        } else {
        	console.log("It was a tie.")
        }
	    if (player1Score  >= Math.round(playUntil/2) || player2Score  >= Math.round(playUntil/2))
        {
          	break;		
        }
    }
        console.log(player1.name, " score is", player1Score);
        console.log(player2.name, " score is", player2Score);


    if (player1Score == player2Score) 
    {
    	    console.log('This game ended as a tie!');
        	return null
	} else if (player1Score > player2Score) 
	{
	  console.log(player1.name, "is the game winner!!");
	  return player1.name
	} else 
	{
	        console.log(player2.name, "is the game winner!!");
	        return player2.name
	}
}