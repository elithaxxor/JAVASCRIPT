import React from 'react'
import { GlobalContext } from '../context/GlobalState';
import { useContext } from 'react';

// create new array with transaction.values. seperate pos and neg. render to display
export const IncomeAndExpenses = () =>{
    const { transactions } = useContext(GlobalContext);
    const transactions_array = transactions.map(transaction => transaction.amount)
    const pos_transactions = transactions_array.filter(pos_transaction => pos_transaction > 0)
        .reduce((add, pos_transaction ) => (add += pos_transaction).toFixed(2))

    const neg_transactions = transactions_array.filter(neg_transaction => neg_transaction > 0)
        .reduce((subtract, neg_transaction) => (subtract -= neg_transaction).toFixed(2))

    return(
        <div className='inc-exp-container'>
        <div>
            <h4> Income </h4>
            <p className={"money plus"}> ${pos_transactions}+ </p>
        </div>
            <div>
                <h4> Expenses </h4>
                <p className={"money minus"}> $({neg_transactions}) </p>
            </div>
        </div>
    )
};



