import { addCartItem, fetchAllItemsinCart, deleteCartItem, updateCartItem} from "../utils/cart_api_util";

export const RECEIVE_CART_ITEM = "RECEIVE_CART_ITEM"
export const RECEIVE_ALL_CART_ITEMS = "RECEIVE_ALL_CART_ITEMS"
export const DELETE_CART_ITEM = "DELETE_CART_ITEM"

const receiveCartItem = (cartItem) => ({
    type: RECEIVE_CART_ITEM,
    cartItem
})

const receiveAllCartItems = (cartItems) => ({
    type: RECEIVE_ALL_CART_ITEMS,
    cartItems
})

const deleteCart = cartId => ({
    type: DELETE_CART_ITEM,
    cartId
})

export const addcartitem = item => dispatch => (
    addCartItem(item)
    .then((cartItem) => dispatch(receiveCartItem(cartItem)))
)

export const fetchAllCart = userId => dispatch => (
    fetchAllItemsinCart(userId)
    .then(cartItems => dispatch(receiveAllCartItems(cartItems)))
)

export const updateItem = cart => dispatch => (
    updateCartItem(cart)
    .then(cart => dispatch(receiveCartItem(cart)))
)

export const removeCartItem = cartId => dispatch => (
    deleteCartItem(cartId)
    .then(() => dispatch(deleteCart(cartId)))
)





