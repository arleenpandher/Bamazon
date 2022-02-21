import { connect } from "react-redux"
import { logOut } from "../../actions/session_actions"
import {fetchAllCart} from "../../actions/cart_actions"
import { fetchServices } from "../../actions/service_actions"
import NavBar from "./nav_bar"
import { withRouter } from "react-router-dom/cjs/react-router-dom.min"

const mapStateToProps = state => {
    if (state.entities.users[state.session.id]) {
        return {
            currentUser: state.entities.users[state.session.id],
            totalitemsincart: Object.values(state.entities.carts),
            services: Object.values(state.entities.services) 
        }
    } else {
        return {
            currentUser: state.entities.users[state.session.id]
        }
    } 
}

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logOut()),
    fetchallcart: userId => dispatch(fetchAllCart(userId)),
    fetchallservices: () => dispatch(fetchServices())
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NavBar))