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

  let cleanBoard = function(){
    let cells = document.getElementsByTagName('button');
    for(var i=0; i<cells.length; i++) {
      board[i%col].fill(" ");
      cells[i].innerHTML = " ";
      cells[i].style.backgroundColor="";
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

  this.checkWinner = function(){

    win = "";
    seqSymbols = symbol + symbol + symbol;
    matchWon = false;

    //check rows
    if(!matchWon){
      for(var i=0; i< row; i++){
        for (var j = 0; j < col; j++) {
          win = win + board[i][j];
        }
        if(win === seqSymbols){
          for (var k = 0; k < col; k++) {
            position = (i*row) + k
            document.getElementById(position).style.backgroundColor="00FF00";
          }
          setTimeout(function(){cleanBoard(); alert(symbol + " symbol has won");}, 500);
          matchWon = true;
        }
        win = "";
      }
    }



    //check columns
    if(!matchWon){
      for(var i=0; i< col; i++){
        for (var j = 0; j < row; j++) {
          win = win + board[j][i];
        }
        if(win === seqSymbols){
          for (var k = 0; k < col; k++) {
            position = (k*row) + i;
            document.getElementById(position).style.backgroundColor="00FF00";
          }
          setTimeout(function(){cleanBoard(); alert(symbol + " symbol has won");}, 500);
          matchWon = true;
        }
        win = "";
      }
    }


    // check first diagonal
    if(!matchWon){
      for(var i=0; i< row; i++){
        win = win + board[i][i];
      }
      if(win === seqSymbols){
        for (var k = 0; k < col; k++) {
          position = (k*row) + k;
          document.getElementById(position).style.backgroundColor="00FF00";
        }
        setTimeout(function(){cleanBoard();alert(symbol + " symbol has won");}, 500);
        matchWon = true;
      }
      win = "";
    }

    // check second diagonal
    if(!matchWon){
      for(var i=0; i< col; i++){ // anti-diag
        for (var j = 0; j < row; j++) {
          if((i + j) === (row-1)){
            win = win + board[i][j];
          }
        }
      }
      if(win === seqSymbols){
        for (var k = 0; k < col; k++) {
          position = (k + k) + (row - 1);
          document.getElementById(position).style.backgroundColor="00FF00";
        }
        setTimeout(function(){cleanBoard(); alert(symbol + " symbol has won");}, 500);
        matchWon = true;
      }
      win = "";
    }


    // check draw

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
    game.checkWinner();
  }catch(err){
    alert(err);
  }

}
