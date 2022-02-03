export const fetchproducts = serviceId => (
    $.ajax({
        url: `/api/services/${serviceId}/products`,
        method: "GET"
    })
)

export const fetchproduct = productId => (
    $.ajax({
        url:`/api/products/${productId}`,
        method: "GET"
    })
)

export const updateRatings = product => (
    $.ajax({
        url:`/api/products/${product.id}`,
        method: "PATCH",
        data: {product}
    })
)
