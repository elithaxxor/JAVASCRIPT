import React from 'react'
import { useState } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { useContext } from 'react';
import { v4 as uuidv4 } from 'uuid';


export const AddTransaction = () =>{
    const [text, setText] = useState('');
    const [transactionAmount, setTransactionAmount] = useState(0);
    const { transactions } = useContext(GlobalContext);
    const { addTransaction } = useContext(GlobalContext);

    const onSubmit = (event)=>{
        event.preventDefault();
        const newTransaction = {
            id: uuidv4(),
            text,
            transactionAmount: +transactionAmount,
        }
        addTransaction(newTransaction)
    }
    return(
        <section>
        <h3 style={{textAlign:'center'}}>Add Transaction</h3>
        <form onSubmit={onSubmit}>

            <div className={'form-control'}>
                <label htmlFor="text"> Transaction: </label>
                <input
                    type='text'
                    value={text}
                    placeholder=" expense / description"
                    onChange={(event) => setText(event.target.value)}
                    />
            </div>
        <div className="form-control">
            <label style={{centerAlign:'center'}} htmlFor="amount"> Amount: </label>
            <input
            type="number"
            value={transactionAmount}
            placeholder='enter the dollar value'
            onChange={(event)=>setTransactionAmount(event.target.value)}
            />
        </div>
        <button style={{ backgroundColor: '#23974e'}}
            className="btn">Add transaction</button>
    </form>
        </section>
    )
};
