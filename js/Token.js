class Token {
    constructor(owner, index) {
        this.owner = owner;
        this.id = `token-${index}-${owner.id}`;
        this.dropped = false;
        this.columnLocation = 0;
    }

    get htmlToken() {
        return document.getElementById(this.id);
    }

    /* how far left an element is relative to the nearest ancestor without a static position. in other words, how far in pixels has the token traveled from the left edge of the game board? 
    
    https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/offsetLeft
    */
    get offsetLeft() {
        return this.htmlToken.offsetLeft;
    }

    drawHTMLToken() {
        const newDiv = document.createElement('div');

        document.getElementById('game-board-underlay').appendChild(newDiv);

        newDiv.setAttribute('id', this.id);
        newDiv.setAttribute('class', 'token');
        newDiv.style.backgroundColor = this.owner.color;
    }

    moveLeft(diameter) {
        if (this.columnLocation > 0) {
            this.htmlToken.style.left = this.offsetLeft - diameter;
            this.columnLocation--;
        }
    }

    moveRight(diameter, columns) {
        if (this.columnLocation < columns - 1) {
            
            this.htmlToken.style.left = this.offsetLeft + diameter;
            this.columnLocation++;
        }
    }
}