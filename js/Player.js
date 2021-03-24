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
}