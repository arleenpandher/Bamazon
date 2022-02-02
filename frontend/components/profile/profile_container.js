import {connect} from "react-redux"
import { fetchAllTransactions } from "../../actions/transaction_actions"
import Profile from "./profile"

const mapStateToProps = (state, ownProps) => ({
    currentUser: state.entities.users[ownProps.match.params.userId],
    transactions: Object.values(state.entities.transactions)
})

const mapDispatchToProps = dispatch => ({
    fetchtransactions: () => dispatch(fetchAllTransactions())
})

export default connect(mapStateToProps, mapDispatchToProps)(Profile)