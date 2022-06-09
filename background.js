// website background - particle web
// mx d r branch 2021

// global variables

// canvas we can move + style later
let canvas; 
// particle array + count
let particles = [];
let particleCount = 96;

// setup

function setup() {

    // assign the canvas we declared earlier
    canvas = createCanvas(windowWidth, windowHeight);
    // move it to the top left of the window
    canvas.position(0, 0);
    // move it page content
    canvas.style('z-index', '-1');

    // initialise particles

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

// draw loop
function draw() {

    background(255);

    // loop through particles

    for (let i = 0; i < particleCount; i++) {

        // update particle position
        particles[i].update();

        stroke(20, 166, 138);

        // loop through all other particle pairs
        // (i+1 ignores pairs checked previously this frame as small optimisation)
        // not efficient for large numbers of particles

        for (let j = i+1; j < particleCount; j++) {
                
            // calculate the distance between
            let dist = p5.Vector.sub(particles[i].pos, particles[j].pos);

            // if close enough, draw line between particles
            // line width decreases as distance increases
            if (dist.mag() < 0.1) {

                let weight = map(dist.mag(), 0, 0.1, 1.4, 0);
                strokeWeight(weight);

                line(particles[i].realx(), particles[i].realy(), particles[j].realx(), particles[j].realy());

            }

        }

        // once it has been checked, draw the particle
        particles[i].display();

    }

}

/* # Observations:

- For complete accuracy the drawing logic should be decoupled from the position updating logic,
  but this doesn't matter so much for this application since the particles move pretty slowly.

- Optimisation is weak, but performative enough for most modern devices. Could be expanded to
  loads of particles w/ more effective algorithm. 

*/

