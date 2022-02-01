import { connect } from "react-redux"
import { fetchAllCart, removeCartItem } from "../../actions/cart_actions"
import CartIndex from "./cart_index"

const mapStateToProps = (state, ownProps) => {
    if (state.entities.users[state.session.id]) {
        return {
            cartIds: state.entities.users[state.session.id].itemsincart,
            userId: ownProps.match.params.userId,
            cartproducts: Object.values(state.entities.carts) 
        }
    } else {
        return {
            currentUser: state.entities.users[state.session.id]
        }
    }
}

const mapDispatchToProps = dispatch => ({
    fetchallcart: userId => dispatch(fetchAllCart(userId)),
    deletecartItem: cartId => dispatch(removeCartItem(cartId))
})

export default connect(mapStateToProps, mapDispatchToProps)(CartIndex)


