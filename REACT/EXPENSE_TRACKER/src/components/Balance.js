import React from 'react';
import { useContext, useState } from 'react';
import { GlobalContext } from '../context/GlobalState';


//console.log(array1.reduce(reducer, 5));
// transaction is an object, and must be accessed so.
export const Balance = ( ) =>{
    //const balance_reducer = (previousValue, currentValue) => previousValue + currentValue;
    const { transactions } = useContext(GlobalContext);
    const [green, red] = useState(true)

    const transaction_array = transactions.map(transaction => transaction.amount).reduce((balance_reducer, transaction_item) => (balance_reducer +=transaction_item));  // get indivdual transaction from array
    //const total_amount = transaction_array.reduce((balance_reducer, transaction_item) => (balance_reducer +=transaction_item)); // call reducer function, to add arrays
     //   console.log('Current Balance: ', total_amount)

    return(
        <section>

            <h3 style={{textAlign:'center'}} className= {transaction_array < 0 ? 'money minus' : "money plus"}>
             ${transaction_array}</h3>
        </section>
    )
};
