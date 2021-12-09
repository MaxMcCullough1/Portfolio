//defining variables for whole code

var counter = 0;
var playerTurn = 'X';
var gameOver = 0;
var board = document.querySelectorAll('.box');
var messageToUser = document.querySelector('.message');
var button = document.queryCommandIndeterm('.restart');

//calling the function to start the game

startGame();


//function that will check if a row is complete with one type of value (either all X's or all O's)

function fullRow(a, b, c) {
    if((a.length == 1) && (a == b) && (a == c)) {
        gameOver = 1;

        messageToUser.innerHTML = a + " wins!";
    }
}

//looks at the array of boxes on the game board, and checks the indexes 0-8 for potential win conditions

function checkForWin() {
    if(counter > 4) {
        fullRow(board[0].innerHTML, board[1].innerHTML, board[2].innerHTML);
        fullRow(board[3].innerHTML, board[4].innerHTML, board[5].innerHTML);
        fullRow(board[6].innerHTML, board[7].innerHTML, board[8].innerHTML);
        fullRow(board[0].innerHTML, board[4].innerHTML, board[8].innerHTML);
        fullRow(board[2].innerHTML, board[4].innerHTML, board[6].innerHTML);
        fullRow(board[0].innerHTML, board[3].innerHTML, board[6].innerHTML);
        fullRow(board[1].innerHTML, board[4].innerHTML, board[7].innerHTML);
        fullRow(board[2].innerHTML, board[4].innerHTML, board[6].innerHTML);
    }
    if ((counter == 9) && (gameOver == 0)) {
        gameOver = 1;
        messageToUser.innerHTML = "Tie";
    }
}

//function that will put each game square into an array and make them clickable by the user

function startGame() {
    for(i = 0; i < board.length; i++) {
        board[i].addEventListener('click', function(clickEvent) {
            turnPlayed(clickEvent);
        });
        messageToUser.innerHTML = "X's turn";

    }
}


//function will cycle between x and o, along with checking if a box is empty. This also cycles between whos turn is displayed

function turnPlayed(clickEvent) {
    if(clickEvent.target.innerHTML == '') {
        if(playerTurn === 'X') {
            clickEvent.target.innerHTML = 'X';
            messageToUser.innerHTML = "O's turn";
            playerTurn = 'O';
        }
        else if(playerTurn === 'O') {
            clickEvent.target.innerHTML = 'O';
            messageToUser.innerHTML = "X's turn";
            playerTurn = 'X';
        }
        ++counter;
    }
    else if(clickEvent.target.innerHTML === 'X' || 'O') {
        window.alert("That box is already taken.");
        playerTurn = playerTurn;
    }
    checkForWin();
    console.log(counter);
}

//function to resart the game
//couldn't figure out how to reset all the variables and start a fresh game, so my back-up was to refresh the page as a whole

function restartGame() {
    document.location.reload(true)
}

