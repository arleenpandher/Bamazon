import { RECEIVE_CURRENT_USER, RECEIVE_ERRORS } from "../actions/session_actions";
import  {RECEIVE_CART_ITEM, RECEIVE_ALL_CART_ITEMS, DELETE_CART_ITEM} from "../actions/cart_actions"


const UsersReducer = (state={}, action) => {
    Object.freeze(state)
    let nextState = Object.assign({}, state)
    switch(action.type) {
        case RECEIVE_CURRENT_USER:
            return Object.assign({}, state, { [action.user.id]: action.user});
        case RECEIVE_CART_ITEM:
            for (let i = 0; i < action.cartItem.quantity; i++) {
                nextState[action.cartItem.userId].itemsincart.push(action.cartItem.id)
            }
            return nextState 
        default: 
            return state
    }
}

export default UsersReducer