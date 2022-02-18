import { RECEIVE_PRODUCTS, RECEIVE_PRODUCT } from "../actions/product_actions";
import { RECEIVE_REVIEW, REMOVE_REVIEW } from "../actions/review_actions";


const ProductsReducer = (state={}, action) => {
    Object.freeze(state)
    let nextState = Object.assign({}, state)
    switch (action.type) {
        case RECEIVE_PRODUCTS:
            return Object.assign({}, action.products)
        case RECEIVE_PRODUCT:
            nextState[action.product.id] = action.product 
            return nextState 
        case RECEIVE_REVIEW:
            nextState[action.review.productId].reviews.push(action.review.id)
            return nextState 
        default: 
            return state 
    }
}

export default ProductsReducer 