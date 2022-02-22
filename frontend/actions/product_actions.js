import { fetchproducts, fetchproduct, updateRatings, allProducts } from "../utils/product_api_util";

export const RECEIVE_PRODUCTS = "RECEIVE_PRODUCTS"
export const RECEIVE_PRODUCT = "RECEIVE_PRODUCT"

const receiveProducts = (products) => ({
    type: RECEIVE_PRODUCTS,
    products 
})

const receiveProduct = product => ({
    type: RECEIVE_PRODUCT,
    product 
})

export const fetchProducts = serviceId => dispatch => (
    fetchproducts(serviceId)
    .then(products => dispatch(receiveProducts(products)))
)

export const fetchallProducts = () => dispatch => (
    allProducts()
    .then(products => dispatch(receiveProducts(products)))
)

export const fetchProduct = productId => dispatch => (
    fetchproduct(productId)
    .then(product => dispatch(receiveProduct(product)))
)

export const updateratings = product => dispatch => (
    updateRatings(product)
    .then(product => dispatch(receiveProduct(product)))
)

