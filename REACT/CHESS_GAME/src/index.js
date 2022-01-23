import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


// calls class .square from index.css 
class Square extends React.Component{
    render(){
        return (
            <button className='square'> 
                {/* */}
            </button>
        )
    }
}

// calls the class in .css status and board-row. 
class Board extends React.Component{
    renderSquare(i){
        return <square /> 

    }
    render(){
        const status = 'Next player: x';
        
        return (
            <div> 
                <div className='status'>{status}</div>
                <div className='board-row'>
                    {this.renderSquare(0)}    
                    {this.renderSquare(1)}    
                    {this.renderSquare(2)}</div>     
                <div className='board-row'>
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
                <div className='board-row'>
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>
            </div>
        )
    }
}

class Game extends React.Component{
    render(){
        return(
        <div className='game'>
            <div className='game-board'>  
            <Board />
        </div>
        <div className='game-info' >  
        <div {/* status */} > 
        </div>
        <ol> {/ *todo */} </ol>
    </div>  
    );
    }
}