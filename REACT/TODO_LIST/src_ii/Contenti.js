import { useState } from 'react';

const Content = () => {

    const [name, setName] = useState('Dave'); // getter and setter 
    const [count, setCount] = useState(0)
    
    const handleNameChange = () =>{
        const names = ['Bob', 'Kevin', ['Paul']];
        const int = Math.floor(Math.random()*3);
        setName (names[int]);
    }


    const handleClick = () => {
        console.log('clicked');

    }

    const handleClick2 = (name) => {
        console.log(` ${name} clicked `);
        console.log(`${count}`);
        setCount(count + 1);
        console.log(`click counter: ${count}`);
    }

    const handleClick3 = (e) => {
        console.log(`${e} clicked `);
    }

    return(
        <main>
            <p> 
                hello {` ${name} thank you for the support `}
            </p>
            <button onClick={handleNameChange}> click me </button> 
            <button onClick={()=> handleClick2('Dave')} > clicked </button>
            <button onClick={(e)=>handleClick3(`${e}`)}> another button </button>

        </main> 

    );
}
export default Content; 
