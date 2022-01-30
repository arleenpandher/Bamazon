import  {RECEIVE_ALL_CART_ITEMS} from "../actions/cart_actions"

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
                }
            })
            return mainobject 
        default: 
            return state 
    }
}

export default CartReducer 