import {RECEIVE_TRANSACTION, RECEIVE_TRANSACTIONS} from "../actions/transaction_actions"

const TransactionReducer = (state={}, action) => {
    Object.freeze(state)
    let nextState = Object.assign({}, state)
    switch(action.type) {
        case RECEIVE_TRANSACTION:
            nextState[action.transaction.id] = action.transaction 
            return nextState 
        case RECEIVE_TRANSACTIONS:
            return Object.assign({}, action.transactions)
        default:
            return state 
    }
}

export default TransactionReducer