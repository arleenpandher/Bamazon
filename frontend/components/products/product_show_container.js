import {connect} from "react-redux"
import ProductShow from "./product_show"
import { fetchProduct } from "../../actions/product_actions"
import {addcartitem, updateItem, fetchAllCart} from "../../actions/cart_actions"
import { fetchallReviews } from "../../actions/review_actions"
import { deletereview } from "../../actions/review_actions"
import {updateratings} from "../../actions/product_actions"
import { createNewTransaction } from "../../actions/transaction_actions"
import { openModal, closeModal } from "../../actions/modal_actions"

const mapStateToProps = (state,ownProps) => ({
    product: state.entities.products[ownProps.match.params.productId],
    productId: ownProps.match.params.productId,
    cartitem: {
        productId: ownProps.match.params.productId,
        quantity: 1
    },
    reviews: Object.values(state.entities.reviews),
    review: state.entities.reviews,
    currentUser: state.entities.users[state.session.id],
    cart: state.entities.carts
})

const mapDispatchToProps = (dispatch) => ({
    fetchproduct: productId => dispatch(fetchProduct(productId)),
    addtocart: item => (dispatch(addcartitem(item))),
    fetchreviews: productId => dispatch(fetchallReviews(productId)),
    deletereview: reviewId => dispatch(deletereview(reviewId)),
    updateCart: cart => (dispatch(updateItem(cart))),
    fetchcartitems: userId => dispatch(fetchAllCart(userId)),
    updateproductratings: product => dispatch(updateratings(product)),
    newTransactions: transaction => dispatch(createNewTransaction(transaction))
})

export default connect(mapStateToProps, mapDispatchToProps)(ProductShow)