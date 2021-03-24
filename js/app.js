const beginGame = document.getElementById('begin-game');

beginGame.addEventListener('click', e => {
    /* if tokens are in DOM, clear them */
    clearTokens();
    /* if game over message is showing, clear it */
    document.getElementById('game-over').style.display = 'none';    
    
    /* start new game */
    const game = new Game();

    e.target.style.display = 'none';
    document.getElementById('play-area').style.opacity = '1';
    game.startGame();
    game.handleKeyDown();
})

function clearTokens() {
    const gameBoard = document.getElementById('game-board-underlay');
    const gameBoardChildren = gameBoard.children;
    while (gameBoardChildren.length > 1) {
        gameBoard.removeChild(gameBoard.lastChild);
    }
}