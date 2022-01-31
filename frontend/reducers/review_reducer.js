import { RECEIVE_REVIEW, RECEIVE_ALL_REVIEWS, REMOVE_REVIEW } from "../actions/review_actions";

const ReviewReducer = (state={}, action) => {
    Object.freeze(state)
    let nextState = Object.assign({}, state)
    switch(action.type) {
        case RECEIVE_REVIEW:
            nextState[action.review.id] = action.review 
            return nextState 
        case RECEIVE_ALL_REVIEWS:
            return Object.assign({}, action.reviews)
        case REMOVE_REVIEW:
            delete nextState[action.reviewId]
            return nextState 
        default: 
            return state 
    }
}

export default ReviewReducer 