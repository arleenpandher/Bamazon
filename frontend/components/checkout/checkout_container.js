import {connect} from "react-redux"
import Checkout from "./checkout"
import { createNewTransaction } from "../../actions/transaction_actions"

const mapStateToProps = (state) => ({
    user: state.entities.users[state.session.id]
})

const mapDispatchToProps = dispatch => ({
    newTransactions: transaction => dispatch(createNewTransaction(transaction)) 
})

export default connect(mapStateToProps, mapDispatchToProps)(Checkout)