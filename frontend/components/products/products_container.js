import {connect} from "react-redux"
import { fetchProducts} from "../../actions/product_actions" 
import {fetchServices} from "../../actions/service_actions"
import ProductIndex from "./products_index"

const mapStateToProps = (state, ownProps) => ({
    products: Object.values(state.entities.products),
    serviceId: ownProps.match.params.serviceId,
    services: Object.values(state.entities.services) 
})

const mapDispatchToProps = (dispatch) => ({
    fetchproducts: serviceId => dispatch(fetchProducts(serviceId)),
    fetchservices: () => (dispatch(fetchServices()))
})

export default connect(mapStateToProps, mapDispatchToProps)(ProductIndex)