const game = new Game();

const beginGame = document.getElementById('begin-game');

beginGame.addEventListener('click', e => {
    e.target.style.display = 'none';
    document.getElementById('play-area').style.opacity = '1';
    game.startGame();
    game.handleKeyDown();
})