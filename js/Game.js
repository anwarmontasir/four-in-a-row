class Game {
    constructor() {
        this.board = new Board();
        this.players = this.createPlayers();
        this.ready = false;
    }

    /* find active player */
    get activePlayer() {
        return this.players.find(player => player.active);
    }

    createPlayers() {
        const player1 = new Player('player1', 1, '#e15258', true);
        const player2 = new Player('player2', 2, '#e59a13');
        return [player1, player2];
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
        for (let i = 0; i < rows.length; i++) {
            if (!rows[i].token) {
                target = rows[i];
            }
        }
        if (target) {
            /* deactivate game during animation */
            this.ready = false;
            /* drop token to target row */
            this.activePlayer.activeToken.drop(target, () => {
                this.updateGameState(this.activePlayer.activeToken, target);
            });
        }
    }

    updateGameState(token, target) {
        /* mark space */
        target.mark(token);

        if (this.checkForWin(target)) {
            this.gameOver(`${this.activePlayer.name} has won!`);
        } else {
            this.switchPlayers();
            if (!this.checkTokens) {
                this.gameOver('out of tokens :(');
            } else {
                this.activePlayer.activeToken.drawHTMLToken();
                this.ready = true;
            }
        }
    }

    checkForWin(target) {
        const owner = target.token.owner;
        let win = false;

        // vertical
        for (let x = 0; x < this.board.columns; x++) {
            for (let y = 0; y < this.board.rows - 3; y++) {
                if (this.board.spaces[x][y].owner === owner &&
                    this.board.spaces[x][y + 1].owner === owner &&
                    this.board.spaces[x][y + 2].owner === owner &&
                    this.board.spaces[x][y + 3].owner === owner) {
                    win = true;
                }
            }
        }

        // horizontal
        for (let x = 0; x < this.board.columns - 3; x++) {
            for (let y = 0; y < this.board.rows; y++) {
                if (this.board.spaces[x][y].owner === owner &&
                    this.board.spaces[x + 1][y].owner === owner &&
                    this.board.spaces[x + 2][y].owner === owner &&
                    this.board.spaces[x + 3][y].owner === owner) {
                    win = true;
                }
            }
        }

        // diagonal
        for (let x = 3; x < this.board.columns; x++) {
            for (let y = 0; y < this.board.rows - 3; y++) {
                if (this.board.spaces[x][y].owner === owner &&
                    this.board.spaces[x - 1][y + 1].owner === owner &&
                    this.board.spaces[x - 2][y + 2].owner === owner &&
                    this.board.spaces[x - 3][y + 3].owner === owner) {
                    win = true;
                }
            }
        }

        // diagonal
        for (let x = 3; x < this.board.columns; x++) {
            for (let y = 3; y < this.board.rows; y++) {
                if (this.board.spaces[x][y].owner === owner &&
                    this.board.spaces[x - 1][y - 1].owner === owner &&
                    this.board.spaces[x - 2][y - 2].owner === owner &&
                    this.board.spaces[x - 3][y - 3].owner === owner) {
                    win = true;
                }
            }
        }

        return win;
    }

    switchPlayers() {
        this.players[0].active = !this.players[0].active;
        this.players[1].active = !this.players[1].active;
    }

    checkTokens() {
        return (this.activePlayer.unusedTokens.length > 0 ? true : false);
    }

    gameOver(message) {
        const gameOver = document.getElementById('game-over');

        gameOver.style.display = 'block';
        gameOver.textContent = message;

        /* enable restart */
        document.getElementById('begin-game').style.display = 'block';
    }
}