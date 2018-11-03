function Game(numRow,numCol) {
  let board = [];
  let row = numRow;
  let col = numCol;
  let symbol;
  let numSymbol = 0;
  this.initializeBoard = function(){
    for(var i=0; i<row; i++) {
      board[i] = new Array(col).fill(" ");
    }
  };

  this.cleanBoard = function(){
    let cells = document.getElementsByTagName('button');
    for(var i=0; i<cells.length; i++) {
      board[i%col].fill(" ");
      cells[i].innerHTML = " ";
    }
  };

  this.getSymbol = function(){
    nextSymbol();
    return symbol;
  };

  let nextSymbol = function(){
    if(numSymbol % 2 === 0){
        numSymbol++;
        symbol = "X"
    }else {
      numSymbol++;
      symbol = "O"
    }
  };

}


const  COL = 3;
const  ROW = 3;
const game = new Game(ROW,COL);
let symbol = " ";
game.initializeBoard();
function play(position){
  symbol = game.getSymbol();
  alert(symbol);
}
