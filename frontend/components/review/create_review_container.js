import {connect} from "react-redux"
import { fetchReview } from "../../actions/review_actions"
import CreateReview from "./create_review"
import { fetchProduct } from "../../actions/product_actions"
import {updateratings} from "../../actions/product_actions"
import { fetchallReviews, clearReviewErrors } from "../../actions/review_actions"

const mapStateToProps = (state, ownProps) => ({
    product: state.entities.products[ownProps.match.params.productId],
    review: {
        title: "",
        body: "",
        ratings: 0,
        product_id: ownProps.match.params.productId
    },
    currentUser: state.entities.users[state.session.id],
    reviews: Object.values(state.entities.reviews),
    errors: state.errors.review
})

const mapDispatchToProps = dispatch => ({
    createreview: review => dispatch(fetchReview(review)),
    fetchproduct: productId => dispatch(fetchProduct(productId)),
    updateproductratings: product => dispatch(updateratings(product)),
    fetchreviews: productId => dispatch(fetchallReviews(productId)),
    clearErrors: () => dispatch(clearReviewErrors())
})

export default connect(mapStateToProps, mapDispatchToProps)(CreateReview)