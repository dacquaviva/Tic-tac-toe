function Game(numRow,numCol) {
  let board = [];
  let row = numRow;
  let col = numCol;
  this.initializeBoard = function(){
    for(var i=0; i<row; i++) {
      board[i] = new Array(col).fill(" ");
    }
  };
}


const  COL = 3;
const  ROW = 3;
const game = new Game(ROW,COL);
game.initializeBoard();
