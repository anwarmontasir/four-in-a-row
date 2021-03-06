/* why no parameters? only one board with a fixed design */
class Board {
    constructor() {
        this.rows = 6;
        this.columns = 7;
        this.diameter = 76;
        this.spaces = this.createSpaces();
    }

    createSpaces() {
        const spaces = [];

        for (let x=0; x<this.columns; x++) {
            const column = [];

            for (let y=0; y<this.rows; y++) {
                const space = new Space(x, y, this.diameter);
                column.push(space);
            }

            spaces.push(column);
        }

        return spaces;
    }

    drawHTMLBoard() {
        for (let x=0; x<this.spaces.length; x++) {
            for (let y=0; y<this.spaces[x].length; y++) {
                this.spaces[x][y].drawSVGSpace();
            }
        }
    }
}