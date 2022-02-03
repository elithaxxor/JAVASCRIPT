import React from 'react';
import { GlobalContext } from '../context/GlobalState';

import { useContext } from 'react';
import { Transaction } from './Transaction';

// takes the list and drills to 'transaction' for individual elements.

export const TransactionList = () =>{
    const { transactions } = useContext(GlobalContext);
    const { deleteTransaction } = useContext(GlobalContext);
    const { transaction } = useContext(GlobalContext);

    return(
        <div className='history'>
            <h3 style={{textAlign:'center'}}> History </h3>
            <ul className='list'>
                 <li>
                     {/*<button*/}
                     {/*    className='delete-btn'*/}
                     {/*    onClick = {() =>*/}
                     {/*        deleteTransaction(transaction.id)*/}
                     {/*    }>*/}
                     {/*</button>*/}
                     <ul>
                     {transactions.map(transaction => (
                         <Transaction
                             key={transaction.id}
                             drill_transaction={transactions}
                             transaction_amount={transaction.amount}
                             transaction_text = {transaction.text}
                         />)
                         )}
                     </ul>
                </li>
            </ul>
        </div>
    )
};


