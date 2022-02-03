// use to crud db
export default ((state, action) =>{ // state == transactions array
    switch(action.type){
        case 'DELETE_TRANS':
            return{ // payload carries transaction id, [filter transcationarray for transaction id in payload
                ...state,
                transactions: state.transactions.filter(transaction => transaction.id !== action.payload)
            }

        case 'ADD_TRANS':
            return{
                ...state,
                transactions: [action.payload, ...state.transactions, ]
            }
        default:
            return state;
    }
})