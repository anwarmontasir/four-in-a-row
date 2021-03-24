class Token {
    constructor(owner, index) {
        this.owner = owner;
        this.id = `token-${index}-${owner.id}`;
        this.dropped = false;
    }

    get htmlToken() {
        return document.getElementById(this.id);
    }

    drawHTMLToken() {
        const newDiv = document.createElement('div');

        document.getElementById('game-board-underlay').appendChild(newDiv);

        newDiv.setAttribute('id', this.id);
        newDiv.setAttribute('class', 'token');
        newDiv.style.backgroundColor = this.owner.color;
    }
}