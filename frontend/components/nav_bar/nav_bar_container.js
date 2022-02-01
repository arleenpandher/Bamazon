import { connect } from "react-redux"
import { logOut } from "../../actions/session_actions"
import {fetchAllCart} from "../../actions/cart_actions"
import NavBar from "./nav_bar"

const mapStateToProps = state => {
    if (state.entities.users[state.session.id]) {
        return {
            currentUser: state.entities.users[state.session.id],
            totalitemsincart: Object.values(state.entities.carts).length 
        }
    } else {
        return {
            currentUser: state.entities.users[state.session.id]
        }
    }
}

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logOut()),
    fetchallcart: userId => dispatch(fetchAllCart(userId))
})

export default connect(mapStateToProps, mapDispatchToProps)(NavBar)