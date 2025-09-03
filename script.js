let gameBoard = (function () {
    function makePlayer(marker) {
        let name = prompt("Enter Name: ");
        let score = 0;
        return {name, marker, score}
    }
    let gameArray = new Array(9);
    return {makePlayer, gameArray};
}) ();



let Participants = (function () {
    let Player1 = gameBoard.makePlayer("X");
    let Player2 = gameBoard.makePlayer("O");

    return {Player1, Player2};


}) ();



function column_win_checker () {
    for (let i = 0; i <= 2; i++){


        if ((gameBoard.gameArray[i] == gameBoard.gameArray[i+3]) && (gameBoard.gameArray[i+3] == gameBoard.gameArray[i+6])) {

            if (gameBoard.gameArray[i] == undefined) {
                continue;
            }

            else if (gameBoard.gameArray[i] == Participants.Player1.marker) {

                console.log("Player1 is the winner");
                Participants.Player1.score++;
                return true;
            }

            else if(gameBoard.gameArray[i] == Participants.Player2.marker) {
                console.log("Player2 is the winner");
                Participants.Player2.score++;
                return true;
            }

            else {
                console.log("Lulla Langda code!")
                return 0;
            }
            
        }

        else if(i == 2) {
            return false;
        }

        else {
            continue;
        }
    }
}

function row_win_checker () {
        for (let i = 0; i <= 6; i += 3){
        if (gameBoard.gameArray[i] == gameBoard.gameArray[i+1] && gameBoard.gameArray[i+1] == gameBoard.gameArray[i+2]) {

            if (gameBoard.gameArray[i] == undefined) {
                continue;
            }

            else if (gameBoard.gameArray[i] == Participants.Player1.marker) {

                console.log("Player1 is the winner");
                Participants.Player1.score++;
                return true;
            }

            else if(gameBoard.gameArray[i] == Participants.Player2.marker) {
                console.log("Player2 is the winner");
                Participants.Player2.score++;
                return true;
            }

            else {
                console.log("Lulla Langda code!")
                return 0;
            }
            
        }

        else if(i == 6) {
            return false;
        }

        else {
            continue;
        }
    }
}

function cross_win_checker () {
        
        
outerblock: {
        
        
        if (gameBoard.gameArray[0] == gameBoard.gameArray[4] && gameBoard.gameArray[4] == gameBoard.gameArray[8]) {

            if (gameBoard.gameArray[0] == undefined) {
                break outerblock;
            }

            else if (gameBoard.gameArray[0] == Participants.Player1.marker) {

                console.log("Player1 is the winner");
                Participants.Player1.score++;
                return true;
            }

            else if(gameBoard.gameArray[i] == Participants.Player2.marker) {
                console.log("Player2 is the winner");
                Participants.Player2.score++;
                return true;
            }

            else {
                console.log("Lulla Langda code!")
                return 0;
            }
            
        }

        else {
            break outerblock;
        }
    
    }

        if (gameBoard.gameArray[2] == gameBoard.gameArray[4] && gameBoard.gameArray[4] == gameBoard.gameArray[6]) {

            if (gameBoard.gameArray[2] == undefined) {
                return false;
            }

            else if (gameBoard.gameArray[2] == Participants.Player1.marker) {

                console.log("Player1 is the winner");
                Participants.Player1.score++;
                return true;
            }

            else if(gameBoard.gameArray[i] == Participants.Player2.marker) {
                console.log("Player2 is the winner");
                Participants.Player2.score++;
                return true;
            }

            else {
                console.log("Lulla Langda code!")
                return 0;
            }
            
        }

        else {
            return false;
        }


    }

function win_tie () {
    if (row_win_checker()) {
        
        return true;
    }

    else if (column_win_checker()) {
        
        return true;
    }

    else if (cross_win_checker()) {
        
        return true
    }

    else {
        
        return false;
    }
}


function Chaal () {
    
    for (players in Participants) {
        let pos = prompt(`Enter the position to enter the "${Participants[players].marker}" marker, mst. ${Participants[players].name}`, "1-9");

        gameBoard.gameArray[pos-1] = `${Participants[players].marker}`;
    };

};



let n = 0;

function Round() {

    if (win_tie()) {
        
        return 0;
    }

    else if(n == 9) {
        console.log("Nobody Won");
        return 0;
    }
    
    else {
        Chaal();
        n++
        return Round();
    }
    

}

Round()






