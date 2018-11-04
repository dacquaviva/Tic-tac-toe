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
    numSymbol = 0;
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

  this.setSymbol = function(position,symbol){
    if(board[Math.floor(position/row)][position%col] === " "){
      board[Math.floor(position/row)][position%col] = symbol;

    }else {
      document.getElementById(position).style.backgroundColor="red";
      setTimeout(function(){ document.getElementById(position).style.backgroundColor=""; }, 500);
      numSymbol--;
      throw new Error('Posizion already used');
    }
  };

  this.drawTable = function(){
    let cells = document.getElementsByTagName('button');
    for(var i=0; i<cells.length; i++) {
      cells[i].innerHTML = board[Math.floor(i/row)][i%col];
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
  try{
    game.setSymbol(position,symbol);
    game.drawTable();
  }catch(err){
    alert(err);
  }

}
