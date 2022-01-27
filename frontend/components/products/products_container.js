import {connect} from "react-redux"
import { fetchProducts } from "../../actions/product_actions" 
import ProductIndex from "./products_index"

const mapStateToProps = (state, ownProps) => ({
    products: Object.values(state.entities.products),
    serviceId: ownProps.match.params.serviceId 
})

const mapDispatchToProps = (dispatch) => ({
    fetchproducts: serviceId => dispatch(fetchProducts(serviceId))
})

export default connect(mapStateToProps, mapDispatchToProps)(ProductIndex)