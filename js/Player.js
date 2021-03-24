class Player {
    constructor(name, id, color, active = false) {
        this.name = name;
        this.id = id;
        this.color = color;
        this.active = active;
        this.tokens = this.createTokens(21);
    }

    createTokens(num) {
        let tokensArray = [];
        for (let i=0; i<num; i++) {
            const token = new Token(this, i);
            tokensArray.push(token);
        }
        return tokensArray;
    }

    /* get tokens that haven't been dropped */
    get unusedTokens() {
        return this.tokens.filter(token => !token.dropped);
    }

    /* return first token in array */
    get activeToken() {
        return this.unusedTokens[0];
    }
}