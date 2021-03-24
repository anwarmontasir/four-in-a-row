const beginGame = document.getElementById('begin-game');

beginGame.addEventListener('click', e => {
    clearTokens();
    document.getElementById('game-over').style.display = 'none';    
    
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