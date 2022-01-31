import {connect} from "react-redux"
import ProductShow from "./product_show"
import { fetchProduct } from "../../actions/product_actions"
import {addcartitem} from "../../actions/cart_actions"
import { fetchallReviews } from "../../actions/review_actions"
import { deletereview } from "../../actions/review_actions"


const mapStateToProps = (state,ownProps) => ({
    product: state.entities.products[ownProps.match.params.productId],
    productId: ownProps.match.params.productId,
    cartitem: {
        productId: ownProps.match.params.productId,
        quantity: 0
    },
    reviews: Object.values(state.entities.reviews),
    currentUser: state.entities.users[state.session.id]
})

const mapDispatchToProps = (dispatch) => ({
    fetchproduct: productId => dispatch(fetchProduct(productId)),
    addtocart: item => (dispatch(addcartitem(item))),
    fetchreviews: productId => dispatch(fetchallReviews(productId)),
    deletereview: reviewId => dispatch(deletereview(reviewId))
})

export default connect(mapStateToProps, mapDispatchToProps)(ProductShow)