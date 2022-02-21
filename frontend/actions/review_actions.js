import { createreview, fetchallreviews, deleteReview, fetchuserReviews } from "../utils/review_api_util";

export const RECEIVE_REVIEW = "REVIEW_REVIEW"
export const RECEIVE_ALL_REVIEWS = "RECEIVE_ALL_REVIEWS"
export const REMOVE_REVIEW = "REMOVE_REVIEW"
export const REVIEW_ERRORS = "REVIEW_ERRORS"
export const CLEAR_REVIEW_ERRORS = "CLEAR_REVIEW_ERRORS"


const receiveReview = (review) => ({
    type: RECEIVE_REVIEW,
    review 
})

const receiveReviews = (reviews) => ({
    type: RECEIVE_ALL_REVIEWS,
    reviews 
})

const removeReview = reviewId => ({
    type: REMOVE_REVIEW,
    reviewId
})

const reviewErrors = errors => ({
    type: REVIEW_ERRORS,
    errors
})

export const clearReviewErrors = () => ({
    type: CLEAR_REVIEW_ERRORS
})


export const fetchReview = review => dispatch => (
    createreview(review)
    .then(review => dispatch(receiveReview(review)),
    err => (
        dispatch(reviewErrors(err.responseJSON))
    ))
)

export const fetchallReviews = productId => dispatch => (
    fetchallreviews(productId)
    .then(reviews => dispatch(receiveReviews(reviews)))
)

export const deletereview = reviewId => dispatch => (
    deleteReview(reviewId)
    .then(review => dispatch(removeReview(review.id)))
)

// export const fetchUserReviews = userId => dispatch => {
//     // debugger
//     return fetchuserReviews(userId)
//     .then(reviews => dispatch(receiveReviews(reviews)))
// }


// CUSTOM ROUTE TEST
export const fetchUserReviews = () => dispatch => {
    // debugger
    return fetchuserReviews()
    .then(reviews => dispatch(receiveReviews(reviews)))
}

