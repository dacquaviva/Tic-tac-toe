# Tic-tac-toe
Tic-Tac-Toe Data Assembler for a technical assignment by Webbio.

For the implementation i used the following languages:
-HTML: It contains the board's structure simulated by a button table. 
-CSS : It define few styles proprerty.
-JavaScript : It contains all the logical part. There is a class named Game which implements all the behavios(methods) of a tic tac toe game.

###How does it flow?
1)The game starts by initialising the board with the method initializeBoard().
2)Every time a table's button is clicked a method named "play(id.button)" is called, having a parameter which is the button's id clicked.
3)The alternative symbol (X or O) will appear on the button after it has been clicked
4)A check is made to determine if the game is finished with the method checkWinner().
5)If the game is finished, it will be saved in the database, otherwise it will continue from point 1.

For the storage I used the firebase database saving each game with the following structure:
- ID(provided by the firebase db)
- [BOARD,STATE]

BOARD = It contains all the symbols that the players have played.
STATE = It says who was the winner or if the game was a draw.
