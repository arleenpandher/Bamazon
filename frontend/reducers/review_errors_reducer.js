import {REVIEW_ERRORS, RECEIVE_REVIEW, CLEAR_REVIEW_ERRORS } from "../actions/review_actions"

const ReviewErrorReducer = (state=[], action) => {
    Object.freeze(state)
    switch (action.type) {
        case REVIEW_ERRORS:
            let obj = {}
            action.errors.forEach(err => {
                if (err === "Body can't be blank") obj.body = err;
                if (err === "Title can't be blank") obj.title = err;
                if (err === "Ratings must be greater than 0") obj.ratings = err;
            })
            return obj;
        case RECEIVE_REVIEW:
            return []
        case CLEAR_REVIEW_ERRORS:
            return []
        default:
            return state
    }
}

export default ReviewErrorReducer