import { addCartItem, fetchAllItemsinCart} from "../utils/cart_api_util";

export const RECEIVE_CART_ITEM = "RECEIVE_CART_ITEM"
export const RECEIVE_ALL_CART_ITEMS = "RECEIVE_ALL_CART_ITEMS"

const receiveCartItem = (cartItem) => ({
    type: RECEIVE_CART_ITEM,
    cartItem
})

const receiveAllCartItems = (cartItems) => ({
    type: RECEIVE_ALL_CART_ITEMS,
    cartItems
})


export const addcartitem = item => dispatch => (
    addCartItem(item)
    .then((cartItem) => dispatch(receiveCartItem(cartItem)))
)

export const fetchAllCart = userId => dispatch => (
    fetchAllItemsinCart(userId)
    .then(cartItems => dispatch(receiveAllCartItems(cartItems)))
)
