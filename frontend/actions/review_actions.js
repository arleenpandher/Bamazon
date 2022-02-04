import { createreview, fetchallreviews, deleteReview, fetchuserReviews } from "../utils/review_api_util";

export const RECEIVE_REVIEW = "REVIEW_REVIEW"
export const RECEIVE_ALL_REVIEWS = "RECEIVE_ALL_REVIEWS"
export const REMOVE_REVIEW = "REMOVE_REVIEW"


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


export const fetchReview = review => dispatch => (
    createreview(review)
    .then(review => dispatch(receiveReview(review)))
)

export const fetchallReviews = productId => dispatch => (
    fetchallreviews(productId)
    .then(reviews => dispatch(receiveReviews(reviews)))
)

export const deletereview = reviewId => dispatch => (
    deleteReview(reviewId)
    .then(review => dispatch(removeReview(review.id)))
)

export const fetchUserReviews = userId => dispatch => {
    // debugger
    return fetchuserReviews(userId)
    .then(reviews => dispatch(receiveReviews(reviews)))
}

