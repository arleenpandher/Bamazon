import {connect} from "react-redux"
import { fetchProducts} from "../../actions/product_actions" 
import {fetchServices} from "../../actions/service_actions"
import {addcartitem, updateItem, fetchAllCart} from "../../actions/cart_actions"
import ProductIndex from "./products_index"
import { fetchallReviews } from "../../actions/review_actions"

const mapStateToProps = (state, ownProps) => ({
    products: Object.values(state.entities.products),
    serviceId: ownProps.match.params.serviceId,
    services: Object.values(state.entities.services),
    user: state.entities.users[state.session.id],
    cart: state.entities.carts
})

const mapDispatchToProps = (dispatch) => ({
    fetchproducts: serviceId => dispatch(fetchProducts(serviceId)),
    fetchservices: () => (dispatch(fetchServices())),
    addtocart: item => (dispatch(addcartitem(item))),
    updateCart: cart => (dispatch(updateItem(cart))),
    fetchcartitems: userId => dispatch(fetchAllCart(userId)),
    fetchreviews: productId => dispatch(fetchallReviews(productId))
})

export default connect(mapStateToProps, mapDispatchToProps)(ProductIndex)