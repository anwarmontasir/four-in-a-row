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
                    this.activePlayer.activeToken.moveLeft(this.board.diameter)
                } else if (e.key === 'ArrowRight') {
                    this.activePlayer.activeToken.moveRight(this.board.diameter, this.board.columns);
                } else if (e.key === 'ArrowDown') {
                    this.playToken();
                }
            }
        })
    }

    playToken() {
        // target is the space object to drop into
        let target;
        
        // array of rows within the columnLocation
        const rows = this.board.spaces[this.activePlayer.activeToken.columnLocation];
        
        // set target to farthest unoccupied row
        for (let i=0; i<rows.length; i++) {
            if (!rows[i].token) {
                target = rows[i];
            }
        }
        if (target) {
            /* deactivate game during animation */
            this.ready = false;
            /* drop token to target row */
            this.activePlayer.activeToken.drop(target)
        }
    }
}