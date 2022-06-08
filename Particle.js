class Particle {

    // instructions for how particles should look and
    // behave!

    constructor(x, y) {

        this.pos = createVector(x, y);
        this.diameter = 10;
        this.vel = createVector(random(-1, 1), random(-1, 1));
        this.vel.normalize();

    }

    detectMouseProximity() {

        let _x2 = (mouseX - this.realx()) ** 2;
        let _y2 = (mouseY - this.realy()) ** 2;
        let dist = Math.sqrt(_x2 + _y2);
        this.diameter = map(dist, 0, 320, 14, 10, true);

    }

    update() {

        this.pos.x += this.vel.x * 0.0002;
        if (this.pos.x > 1.1) {
            this.pos.x = -0.1;
        } else if (this.pos.x <-0.1) {
            this.pos.x = 1.1;
        } 
        this.pos.y += this.vel.y * 0.0002;
        if (this.pos.y > 1.1) {
            this.pos.y = -0.1;
        } else if (this.pos.y <-0.1) {
            this.pos.y = 1.1;
        } 

    }

    display() {

        stroke(255);
        strokeWeight(3);
        fill(20, 166, 138);
        this.detectMouseProximity();
        ellipse(this.pos.x * windowWidth, this.pos.y * windowHeight, this.diameter, this.diameter);
       
    }

    realx() {
        return this.pos.x * windowWidth;
    }

    realy() {
        return this.pos.y * windowHeight;
    }

}
