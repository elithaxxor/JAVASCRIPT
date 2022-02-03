import React from 'react'
import { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';


// .text to show array element
export const Transaction = ( { drill_transaction, transaction_amount, transaction_text, transaction }) =>{
    // determines pos/neg and sets UI accordingly (red-) (green+)
    const indicator = drill_transaction.amount < 0 ? '-' : '+';
    const border_flip = drill_transaction.amount < 0 ? 'minus' : 'plus';
    const { deleteTransaction } = useContext(GlobalContext);
// onClick = {() =>
// deleteTransaction(drill_transaction.id)
// }>

    return(
        <li
            className={border_flip}>
            <span>
                {drill_transaction.text}
                {indicator} {transaction_text} <p> ${transaction_amount}</p>
            </span>
            <button
                className='delete-btn'
                onClick = {() =>
                    deleteTransaction(drill_transaction.id)
                }>
            </button>
        </li>
    )};


