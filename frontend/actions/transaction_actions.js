import {createTransaction, fetchTransactions} from "../utils/transaction_api_util"

export const RECEIVE_TRANSACTION = "RECEIVE_TRANSACTION"
export const RECEIVE_TRANSACTIONS = "RECEIVE_TRANSACTIONS"

const receiveTransaction = transaction => ({
    type: RECEIVE_TRANSACTION,
    transaction
})

const receiveTransactions = transactions => ({
    type: RECEIVE_TRANSACTIONS,
    transactions
})


export const createNewTransaction = transaction => dispatch => (
    createTransaction(transaction)
    .then(transaction => dispatch(receiveTransaction(transaction)))
)

export const fetchAllTransactions = () => dispatch => (
    fetchTransactions()
    .then(transactions => dispatch(receiveTransactions(transactions)))
)

