import  {RECEIVE_ALL_CART_ITEMS, DELETE_CART_ITEM, RECEIVE_CART_ITEM} from "../actions/cart_actions"

const CartReducer = (state={}, action) => {
    Object.freeze(state)
    switch(action.type) {
        case RECEIVE_ALL_CART_ITEMS:
            let mainobject = {}
            action.cartItems.forEach(object => {
                mainobject[object.id] = {
                    id: object.id,
                    title: object.title,
                    description: object.description,
                    photoUrl: object.photoUrl,
                    cartId: object.cartId,
                    user_id: object.userId,
                    quantity: object.quantity,
                    cost: object.cost 
                }
            })
            return mainobject
        case RECEIVE_CART_ITEM:
             let nState = Object.assign({}, state)
             nState[action.cartItem.id] = action.cartItem 
             return nState 
        case DELETE_CART_ITEM:
            let nextState = Object.freeze(state)
            let obj = {}
            for (let ele in nextState) {
                console.log(nextState[ele].cartId == action.cartId)
                // console.log(action.cartId)
                // console.log(nextState[ele].cart_id === action.cartId)
                if (nextState[ele].cartId !== Number(action.cartId)) {
                    obj[ele] = nextState[ele]
                }
            }
            return obj 
        default: 
            return state 
    }
}

export default CartReducer 