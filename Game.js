export default class Game {
    
    constructor() {
        this.newGame();
    }
    // this is the initial data that we need and this is call when we touch the restart button 
    newGame(){
        this.turn = "X"; // the first move is x
        this.board = new Array(9).fill(null); // the box are 9
        this.winner = null; // winner at the initial is null
    }
    
    // it make the next turn if it is x it will make o and the other
    nextTurn() {
        if(this.turn === "X"){
            this.turn = "O" 
        } else {
            this.turn = "X"
        }
    }

    makeMove(i) {
        if(!this.isInProgress()){
            return;
        }
        

        if(this.board[i]){
            return;
        }
        // if there board goes to the next move
        this.board[i] = this.turn;
        let winningCombination = this.findWinningCombination()
        // if winningCombination is null it goes to next move 
        // in the if we put ! because if !null became true if not it will make winner make the winner combination
        if(!winningCombination){
            this.nextTurn();
        } else {
            this.winner = winningCombination[0]
        }
        
    }

    findWinningCombination(){
        // in this the winning commbination
        const winningCombinations = [
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [6,4,2]
        ]

        for(const combination of winningCombinations){
            const [a,b,c] = combination;
            if(this.board[a] &&
                (this.board[a] === this.board[b] && this.board[a] === this.board[c])){
                return combination;
            }
        }
        return null;
    }

    isInProgress(){
        if(!this.findWinningCombination() && this.board.includes(null)){
            return true;
        } else {
            return false;
        }
    }
}


