import React from "react"
import NavBarContainer from "../nav_bar/nav_bar_container"
import {Link} from "react-router-dom"
import {FaLock} from "react-icons/fa"
import {MdPinDrop} from "react-icons/md"
import {BsPersonCircle} from "react-icons/bs"
import { FaStar } from "react-icons/fa"
import Footer from "../Footer"

class ProductShow extends React.Component {

    constructor(props) {
        super(props)
        this.state = this.props.cartitem
        this.update = this.update.bind(this)
        this.addToCart = this.addToCart.bind(this)
        this.removereview = this.removereview.bind(this)
        this.forcesignin = this.forcesignin.bind(this)
        
    }

    componentDidMount() {
        this.props.fetchproduct(this.props.match.params.productId)
        this.props.fetchreviews(this.props.match.params.productId)
        if (this.props.currentUser) {
            this.props.fetchcartitems(this.props.currentUser.id)
        }
    }

    update(e) {
        this.setState({ quantity: e.currentTarget.value }, () => {return null})
    }

    forcesignin(e) {
        e.preventDefault()
        this.props.history.push('/login')
    }

    servicedate(date) {
        let newdate = new Date(date)
        let months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
        let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        let year = newdate.getFullYear()
        let month = newdate.getMonth()
        let day = newdate.getDate()
        let nday = newdate.getDay()
        let currentmonth = months[month]
        let currentday = days[nday] 
        let fulldate = `${currentday} ${currentmonth} ${day}, ${year}`
        return fulldate
    }
   
   
    addToCart(e) {
        e.preventDefault()
        if (this.props.cart[this.props.productId]) {
            this.props.updateCart({cart_id: this.props.cart[this.props.productId].cartId, 
            user_id: this.props.currentUser.id, product_id: this.props.productId, quantity: parseInt(this.props.cart[this.props.productId].quantity) + parseInt(this.state.quantity)})
        } else {
            this.props.addtocart({product_id: this.props.productId, quantity: this.state.quantity})
        }
    }

    removereview(e) {
        e.preventDefault()
        let totalratings = 0
        this.props.reviews.map(review => {
            totalratings += review.ratings
        })
        let newrating = (totalratings - this.props.review[e.currentTarget.value].ratings)/(this.props.reviews.length - 1)
        this.props.deletereview(e.currentTarget.value)
        this.props.updateproductratings({id: this.props.product.id, ratings: newrating})
    }

    render() {
        if (!this.props.product) return null
        console.log(this.props.product.ratings)
        let array = new Array(this.props.product.ratings)
        let narray = new Array(5 - this.props.product.ratings)

        const display = this.props.reviews.length ? (
            <div id="productshowreview3">
            <h3 id="allreviewheader">All Reviews</h3>
            {this.props.reviews.map(review => (
                <div id="productshowreview2" key={review.id}>
                    <div id="personreviewdiv">
                        <BsPersonCircle size={25}/>&nbsp;&nbsp;&nbsp;&nbsp;
                        <span id="reviewerpersonfont">{review.user}</span>
                    </div>
                    <span id="ratingsandtitlediv">
                    {[...Array(5)].map((star,i) => {
                            const ratingvalue = i + 1
                            return (
                                <FaStar key={i} size={15} color={ratingvalue <= review.ratings ? "#ffc107" : "#e4e5e9"}/>
                            )
                        })}
                    
                     &nbsp;&nbsp;&nbsp; {review.title}</span>
                    <span id="reviewedincanada">Reviewed in Canada on {this.servicedate(review.createdAt)}</span>
                    <span margin-bottom={"10px;"} font-size={"15px;"}>{review.body}</span>
                    <div>
                        {this.props.currentUser && this.props.currentUser.id === review.userId ? (
                            <div>
                                <button id="reviewdeletebtn" value={review.id} onClick={this.removereview}>Delete</button>
                            </div>
                        ) : (
                        <div></div>
                        )}
                    </div>
                </div>
            ))}
        </div>
        ) : (
            null
        )
        return (
            <div>
                <header>
                    <NavBarContainer />
                </header>
                <div id="productshowpagediv">
                    <img id="productshowpageimg" src={this.props.product.photoUrl}/>
                    <div id="productshowdescription">
                        <span id="productshowtitle">{this.props.product.title} - {this.props.product.description}</span>
                        <span id="productshowratings">
                            {[...Array(5)].map((star,i) => {
                                const ratingvalue = i + 1
                                return (
                                    <FaStar key={i} size={20} color={ratingvalue <= this.props.product.ratings ? "#ffc107" : "#e4e5e9"}/>
                                )
                            })}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <span id="productshowratingtext">{this.props.reviews.length} ratings</span>
                        </span>
                        <span id="productshowprice">Price: ${this.props.product.cost}</span>
                        <div id="hnavlineupdate">
                        </div>
                        <span id="aboutthishero">About this Hero:</span>
                        <span>
                            {this.props.product.about}
                        </span>
                    </div>
                    <div id="productshowaddtocart">
                        <div id="productshowaddtocartfirst">
                            <span id="productshowprice">${this.props.product.cost}</span>
                            <span>$9.53 Transportation Desposit to Canada</span>
                            <span id="servicedate">Service Date: <span id="boldservicedate">{this.servicedate(Date.now())}</span></span>
                            <span>Order within <span id="orderwith">6 hrs 17 mins</span></span>
                        </div>
                        <div id="productshowpindrop">
                            <MdPinDrop/>&nbsp;&nbsp;&nbsp;&nbsp;
                            <span>Deliver to Toronto Ontario</span>
                        </div>
                        <span id="productshowinstock">In Stock.</span>
                        <div id="productshowaddtocartsecond">
                        <select id="quantitydropdown" onChange={this.update}>
                            <option value={1}>Qty: 1</option>
                            <option value={2}>Qty: 2</option>
                            <option value={3}>Qty: 3</option>
                        </select>
                        {this.props.currentUser ? (
                                <button id="productshowaddtocartbtn" value={this.props.product.id} onClick={this.addToCart}>Add to Cart</button>
                        ) : (
                            <button id="productshowaddtocartbtn" value={this.props.product.id} onClick={this.forcesignin}>Add to Cart</button>
                        )}
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
                            {this.props.currentUser ? (
                                <Link id="linktocreatereview" to={`/products/${this.props.productId}/reviews`}>Write a customer review</Link>
                            ) : (
                                <Link id="linktocreatereview" to={`/login`}>Write a customer review</Link>
                            )}
                        </div>
                        <div>
                            {display}
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}

export default ProductShow 