export const addCartItem = cart => (
    $.ajax({
        url: `/api/carts`,
        method: "POST",
        data: {cart}
    })
)

export const fetchAllItemsinCart = userId => (
    $.ajax({
        url: `/api/users/${userId}/carts`,
        method: "GET"
    })
)

export const updateCartItem = cart => {
    return (
    $.ajax({
        url: `/api/carts/${cart.cart_id}`,
        method: "PATCH",
        data: {cart}
    }))
}

export const deleteCartItem = cartId => (
    $.ajax({
        url:`/api/carts/${cartId}`,
        method: "DELETE"
    })
) 
