import {connect} from "react-redux"
import ProductShow from "./product_show"
import { fetchProduct } from "../../actions/product_actions"
import {addcartitem} from "../../actions/cart_actions"

const mapStateToProps = (state,ownProps) => ({
    product: state.entities.products[ownProps.match.params.productId],
    productId: ownProps.match.params.productId,
    cartitem: {
        productId: ownProps.match.params.productId,
        quantity: 0
    }
})

const mapDispatchToProps = (dispatch) => ({
    fetchproduct: productId => dispatch(fetchProduct(productId)),
    addtocart: item => (dispatch(addcartitem(item)))
})

export default connect(mapStateToProps, mapDispatchToProps)(ProductShow)