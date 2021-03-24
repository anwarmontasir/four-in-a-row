class Game {
    constructor() {
        this.board = new Board();
        this.players = this.createPlayers();
        this.ready = false;
    }

    createPlayers() {
        const player1 = new Player('player1', 1, '#e15258', true);
        const player2 = new Player('player2', 2, '#e59a13');
        return [player1, player2];
    }

    /* find active player */
    get activePlayer() {
        return this.players.find(player => player.active);
    }

    startGame() {
        this.board.drawHTMLBoard();
        this.activePlayer.activeToken.drawHTMLToken();
        this.ready = true;
    }

    handleKeyDown() {
        document.addEventListener('keydown', e => {
            if (this.ready) {
                if (e.key === 'ArrowLeft') {
                    // arrowLeft
                } else if (e.key === 'ArrowRight') {
                    // arrowRight
                } else if (e.key === 'ArrowDown') {
                    // arrowDown
                }
            }
        })
    }
}