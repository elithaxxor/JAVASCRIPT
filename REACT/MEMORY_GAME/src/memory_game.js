const cards = document.querySelectorAll('.memory-card'); // list of all memory card elements 
console.log(cards);
alert('flippedy cup')

/* 
    data-framework= on the html is a custom tag that allows access to individual elements
    ex: console.log(var.dataset.framework);
*/

let hasFlippedCard = false; 
let firstCard, secondCard; 

function flipCard(){
this.classList.add('flip');
// console.log(`Clicked at ${this}` );

if(!hasFlippedCard){
    hasFlippedCard=True; 
    firstCard=this;
    console.log(firstCard);
    console.log(hasFlippedCard);

}else{ //second flip
    hasFlippedCard = false; 
    secondCard = this; 
    // verify if both cards match (element, dataset, dataset name )
    console.log(firstCard.dataset.framework);
    console.log(secondCard.dataset.framework);};
    
    
function checkforMatch(){ if(firstCard.dataset.framework === secondCard.dataset.framework){
        firstCard.removeEventListener('click', flipCard);
        secondCard.removeEventListener('click', flipCard);
    }else{
        setTimeout =>(()=>{
        firstCard.classList.remove('flip');
        second.classList.remove('flip');
    },1500)

    }};

console.log(cards);
}

cards.forEach(card => card.addEventListener('click', flipCard)); /* event listener to activate function as it loops through array. */


