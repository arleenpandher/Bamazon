import { connect } from "react-redux"
import { fetchAllCart } from "../../actions/cart_actions"
import CartIndex from "./cart_index"

const mapStateToProps = (state, ownProps) => ({
    cartItems: Object.values(state.entities.cart),
    userId: ownProps.match.params.userId 
})

const mapDispatchToProps = dispatch => ({
    fetchAllCart: userId => dispatch(fetchAllCart(userId))
})

export default connect(mapStateToProps, mapDispatchToProps)

