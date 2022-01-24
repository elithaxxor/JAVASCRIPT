//Although the classList property itself is read-only, you can modify its associated DOMTokenList using the add(), remove(), replace(), and toggle() methods
// add animation claa, rhen  use onclick on index to render animation, then reset animation by removing class

var charicter = document.getElementById('charicter'); // the html block
var block = document.getElementById('block');
console.log('charicter' , charicter)
console.log('block' , block)

let char_val = window.getComputedStyle(charicter);
let block_val = window.getComputedStyle(block);
let char_pos = char_val.getPropertyValue('position')
let block_pos = block_val.getPropertyValue('position')
// let char_css = style.getPropertyValue('position')
// let block_css = style.getPropertyValue('position')

console.log(char_val); console.log(char_pos);
console.log(block_val); console.log(block_pos);
// console.log(char_css); console.log(block_css);

// use js to recusivly add/remove the .css animate element. actual recursion (animation) logic is in index.css
function jump() {
    if (charicter.classList !== 'charicter') {
        charicter.classList.add("animate");
        console.log('charicter is not animating, adding logic')

    } else {
        setTimeout(function () {
            console.log('Parsing animation..');
            charicter.classList.remove("animate");
            if(charicter.classList.remove){ // for debugging / learning.
                console.log('Parse sucessfull');
            }
        },10)
    }
}

var checkDead = setInterval(()=> { // get element positions,
    var char_top_pos = parseInt(window.getComputedStyle(charicter).getPropertyValue('top'));
    var block_left_pos = parseInt(window.getComputedStyle(block).getPropertyValue('left'));
    console.log('char_top_pos\n ', char_top_pos )
    console.log('block_left_pos\n ', block_left_pos)

    if (block_left_pos <= 20 && block_left_pos > 0 && char_top_pos >= 130){
        block.style.animation='none';
        block.style.display='none';
        alert('you lose')
    }
})

/* get top position of charicter
 parseInt force int return for the height/w params
The Window.getComputedStyle() method returns an object containing the values of all CSS properties of an element,
    after applying active stylesheets and resolving any basic computation those values may contain.
*/
