class Game {
    constructor() {
        this.board = new Board();
        this.players = this.createPlayers();
        this.ready = false;
    }

    createPlayers() {
        const player1 = new Player('player1', '#e15258', 1, true);
        const player2 = new Player('player2', '#e59a13', 2);
        return [player1, player2];
    }

    /* find active player */
    get activePlayer() {
        return this.players.find(player => player.active);
    }

    startGame() {
        
    }
}