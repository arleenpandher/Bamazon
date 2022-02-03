import {connect} from "react-redux"
import { fetchAllTransactions } from "../../actions/transaction_actions"
import Profile from "./profile"
import {addcartitem, updateItem, fetchAllCart} from "../../actions/cart_actions"

const mapStateToProps = (state, ownProps) => ({
    currentUser: state.entities.users[ownProps.match.params.userId],
    transactions: Object.values(state.entities.transactions),
    cart: state.entities.carts
})

const mapDispatchToProps = dispatch => ({
    fetchtransactions: () => dispatch(fetchAllTransactions()),
    addtocart: item => (dispatch(addcartitem(item))),
    updateCart: cart => (dispatch(updateItem(cart))),
    fetchcartitems: userId => dispatch(fetchAllCart(userId))
})

export default connect(mapStateToProps, mapDispatchToProps)(Profile)