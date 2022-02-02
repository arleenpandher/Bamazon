import React from "react"
import NavBarContainer from "../nav_bar/nav_bar_container"
import {Link} from "react-router-dom"
import {FaLock} from "react-icons/fa"
import {MdPinDrop} from "react-icons/md"

class ProductShow extends React.Component {

    constructor(props) {
        super(props)
        this.state = this.props.cartitem
        this.update = this.update.bind(this)
        this.addToCart = this.addToCart.bind(this)
        this.removereview = this.removereview.bind(this)
    }

    componentDidMount() {
        this.props.fetchproduct(this.props.match.params.productId)
        this.props.fetchreviews(this.props.match.params.productId)
        if (this.props.currentUser) {
            this.props.fetchcartitems(this.props.currentUser.id)
        }
    }

    update(e) {
        // console.log(this.state)
        return e => (
            this.setState({ ["quantity"]: e.currentTarget.value })
            // console.log(this.state)
        )
    }

   
    addToCart(e) {
        console.log(this.state)
        e.preventDefault()
        if (this.props.cart[this.props.productId]) {
            this.props.updateCart({cart_id: this.props.cart[this.props.productId].cartId, 
            user_id: this.props.currentUser.id, product_id: this.props.productId, quantity: this.props.cart[this.props.productId].quantity + 1})
        } else {
            this.props.addtocart({product_id: this.props.productId, quantity: 1})
        }
    }

    removereview(e) {
        e.preventDefault()
        {console.log(e.currentTarget.value)}
        this.props.deletereview(e.currentTarget.value)
    }

    render() {
        if (!this.props.product) return null 
        
        return (
            <div>
                <header>
                    <NavBarContainer />
                </header>
                <div id="productshowpagediv">
                    <img id="productshowpageimg" src={this.props.product.photoUrl}/>
                    <div id="productshowdescription">
                        <span id="productshowtitle">{this.props.product.title} - {this.props.product.description}</span>
                        <span id="productshowratings">Ratings: 4 stars</span>
                        <span id="productshowprice">Price: ${this.props.product.cost}</span>
                        <div id="hnavlineupdate">
                        </div>
                        <span id="aboutthishero">About this Hero:</span>
                        <span>Draco Malfoy has been a known enemy of BuckBeak since 1998.
                        In fact, during his Magical creatures class Buckbeak had attacked Draco, due 
                        his terrible treatment of Buckbeak.  In fact, Draco's Father almost had BuckBeak killed
                        Therefore, be cautious before purchasing Draco's services.
                        </span>
                    </div>
                    <div id="productshowaddtocart">
                        <div id="productshowaddtocartfirst">
                            <span id="productshowprice">${this.props.product.cost}</span>
                            <span>$9.53 Transportation Desposit to Canada</span>
                            <span id="servicedate">Service Date: <span id="boldservicedate">Tuesday, February 8</span></span>
                            <span>Order within <span id="orderwith">6 hrs 17 mins</span></span>
                        </div>
                        <div id="productshowpindrop">
                            <MdPinDrop/>&nbsp;&nbsp;&nbsp;&nbsp;
                            <span>Deliver to Toronto Ontario</span>
                        </div>
                        <span id="productshowinstock">In Stock.</span>
                        <div id="productshowaddtocartsecond">
                        <select id="quantitydropdown" onChange={this.update}>
                            <option disabled selected>Qty</option>
                            <option value={1}>Qty: 1</option>
                            <option value={2}>Qty: 2</option>
                            <option value={3}>Qty: 3</option>
                        </select>
                        <button id="productshowaddtocartbtn" value={this.props.product.id} onClick={this.addToCart}>Add to Cart</button>
                        </div>
                        <div id="securetransaction">
                            <FaLock  />&nbsp;&nbsp;       
                            <span>Secure transaction</span>
                        </div>
                        <div id="shippingdiv">
                            <span>Ships from &nbsp;&nbsp;  <span id="innershippingdiv">Herozon.com</span></span>
                            <span>Sold by &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <span id="innershippingdiv">Herozon.com</span></span>
                        </div>
                        <div id="returnpolicy">
                            <span>Return policy: <span id="innerreturnpolicy">Not Eligible for Return, Refund or Replacement</span></span>
                            <span>Support: <span id="innerreturnpolicy">Free Herozon tech support included</span></span>
                        </div>
                    </div>
                </div>
                <div id="horizontallineinproductshow"></div>
                <div>
                    <div id="productshowreviewdiv">
                        <div id="productshowreview">
                            <span id="reviewthisproduct">Review this product</span>
                            <span id="shareyourthoughts">Share your thoughts with other customers</span>
                            <Link id="linktocreatereview" to={`/products/${this.props.productId}/reviews`}>Write a customer review</Link>
                        </div>
                        <div id="productshowreview3">
                            <h3 id="allreviewheader">All Reviews</h3>
                            {this.props.reviews.map(review => (
                                <div id="productshowreview2" key={review.id}>
                                    <span>{review.user}</span>
                                    <span>{review.title}</span>
                                    <span>{review.body}</span>
                                    <span>{review.ratings}</span>
                                    <div>
                                        {this.props.currentUser.id === review.userId ? (
                                            <div>
                                                <button>Edit</button>
                                                {console.log(review.id)}
                                                <button value={review.id} onClick={this.removereview}>Delete</button>
                                            </div>
                                        ) : (
                                        <div></div>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ProductShow 