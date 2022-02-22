import { connect } from "react-redux"
import { logOut } from "../../actions/session_actions"
import {fetchAllCart} from "../../actions/cart_actions"
import { fetchServices } from "../../actions/service_actions"
import { fetchProducts, fetchallProducts } from "../../actions/product_actions"
import NavBar from "./nav_bar"
import { withRouter } from "react-router-dom/cjs/react-router-dom.min"

const mapStateToProps = state => {
    if (state.entities.users[state.session.id]) {
        return {
            currentUser: state.entities.users[state.session.id],
            totalitemsincart: Object.values(state.entities.carts),
            services: Object.values(state.entities.services),
            products: Object.values(state.entities.products) 
        }
    } else {
        return {
            currentUser: state.entities.users[state.session.id],
            services: Object.values(state.entities.services),
            products: Object.values(state.entities.products) 
        }
    } 
}

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logOut()),
    fetchallcart: userId => dispatch(fetchAllCart(userId)),
    fetchallservices: () => dispatch(fetchServices()),
    allProducts: () => dispatch(fetchallProducts()),
    fetchserviceproducts: serviceId => dispatch(fetchProducts(serviceId))
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NavBar))