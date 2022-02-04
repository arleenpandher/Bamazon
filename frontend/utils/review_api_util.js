export const createreview = review => (
    $.ajax({
        url: `/api/products/${review.product_id}/reviews`,
        method: "POST",
        data: {review}
    })
)

export const fetchallreviews = productId => (
    $.ajax({
        url: `/api/products/${productId}/reviews`,
        method: "GET"
    })
)

export const deleteReview = reviewId => (
    $.ajax({
        url:`/api/reviews/${reviewId}`,
        method: "DELETE"
    })
)

export const fetchuserReviews = userId => (
    $.ajax({
        url: `/api/users/${userId}`,
        method: "GET"
    })
) 