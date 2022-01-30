import { connect } from "react-redux"
import { fetchAllCart } from "../../actions/cart_actions"
import CartIndex from "./cart_index"

const mapStateToProps = (state, ownProps) => {
    if (state.entities.users[state.session.id]) {
        return {
            cartIds: state.entities.users[state.session.id].itemsincart,
            userId: ownProps.match.params.userId,
            cartproducts: state.entities.carts 
        }
    } else {
        return {
            currentUser: state.entities.users[state.session.id]
        }
    }
}

const mapDispatchToProps = dispatch => ({
    fetchallcart: userId => dispatch(fetchAllCart(userId))
})

export default connect(mapStateToProps, mapDispatchToProps)(CartIndex)


