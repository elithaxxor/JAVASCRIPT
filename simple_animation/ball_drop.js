const canvas = document.querySelector('canvas'); // querySelector() returns the first Element within the document that matches the specified selector,
const c = canvas.getContext('2d'); // object to draw 2d

// set the javascript canvas = to html boxes
canvas.width=innerWidth;
canvas.height=innerHeight;
console.log('canvas' + canvas);
console.log('c' + c);
console.log('h x w' + innerWidth + innerHeight);

// create player- 1. set postion, width. 2. set drawing animaition. 3. call class, use object to initiate animation.
// canvas is set to html doc dimensions; obj c is the animation obj.

alert('tests');
class Player{
    constructor() {
        this.current_position={ //create class-object with starting postion.
            x:100,
            y:100
        }
        this.velocity={ // velocity object
            x:0,
            y:1
        }
        this.width=30;
        this.height=30;
        console.log('h + w' + this.width + this.height);
        console.log('position' + this.current_position);
    }
    draw(){ // draw charicter.
        c.fillStyle='red';
        c.fillRect(this.current_position['x'], this.current_position['y'], this.width, this.height);
    }
    update(){ // sets the direction, rather than set loops, it will be passed on to a JS function for animation.
        this.draw();
        this.current_position['y'] += this.velocity['y']

    }
}

/*The window.requestAnimationFrame() method tells the browser that you wish to perform an animation and requests that the browser calls a specified
function to update an animation before the next repaint. The method takes a callback as an argument to be invoked before the repaint. */

function animate(){
    requestAnimationFrame(animate); // js method, instead of having to loop
    if(!requestAnimationFrame){
        console.log('failed to start animation')
    }
    console.log('initiating animation')
    c.clearRect(0,0, canvas.width, canvas.height);
    player.update();
}


const player = new Player();
player.draw();
console.log('Created new player: \n' + player);
animate(player);
//player.
