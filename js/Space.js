class Space {
    constructor(x, y, diameter) {
        this.x = x;
        this.y = y;
        this.id = `space-${x}-${y}`;
        this.token = null;
        this.diameter = diameter;
        this.radius = this.diameter / 2;
    }

    get owner() {
        // is this space occupied?
        if (this.token) {
            return this.token.owner;
        } else {
            return null;
        }
    }

    drawSVGSpace() {
        const svgSpace = document.createElementNS("http://www.w3.org/2000/svg", "circle");

        svgSpace.setAttributeNS(null, "id", this.id);
        svgSpace.setAttributeNS(null, "cx", (this.x * this.diameter) + this.radius);
        svgSpace.setAttributeNS(null, "cy", (this.y * this.diameter) + this.radius);
        svgSpace.setAttributeNS(null, "r", this.radius - 8);
        svgSpace.setAttributeNS(null, "fill", "black");
        svgSpace.setAttributeNS(null, "stroke", "none");
        
        document.getElementById("mask").appendChild(svgSpace);
    }

    mark(token) {
        this.token = token;
    }
}