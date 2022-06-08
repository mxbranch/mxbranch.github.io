// website background - particle web
// mx d r branch 2021

// global variables!

// canvas we can move + style later
let canvas; 
// particle array + count
let particles = [];
let particleCount = 96;

// setup!
function setup() {

    // assign the canvas we declared earlier
    canvas = createCanvas(windowWidth, windowHeight);
    // move it to the top left of the window
    canvas.position(0, 0);
    // move it behind the words and stuff
    canvas.style('z-index', '-1');

    for (let i = 0; i < particleCount; i++) {

        let x = random(-0.1, 1.1);
        let y = random(-0.1, 1.1);
        particles[i] = new Particle(x, y);

    }

}

// each time the window is resized...
function windowResized() {

    // ...we resize the canvas to match
    resizeCanvas(windowWidth, windowHeight);

}

// draw loop!
function draw() {

    background(255);

    for (let i = 0; i < particleCount; i++) {

        particles[i].update();

        stroke(20, 166, 138);

        for (let j = i+1; j < particleCount; j++) {
                
            let dist = p5.Vector.sub(particles[i].pos, particles[j].pos);

            if (dist.mag() < 0.1) {

                let weight = map(dist.mag(), 0, 0.1, 1.4, 0);
                strokeWeight(weight);

                line(particles[i].realx(), particles[i].realy(), particles[j].realx(), particles[j].realy());

            }

        }

        particles[i].display();

    }

}

