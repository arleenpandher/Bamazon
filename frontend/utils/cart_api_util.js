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

