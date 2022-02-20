import React from "react"
import NavBar from "../nav_bar/nav_bar_container"
import {BsPersonCircle} from "react-icons/bs"
import {Link} from "react-router-dom"
import {BiShoppingBag} from "react-icons/bi"
import Footer from "../Footer"
import { FaStar } from "react-icons/fa"

class Profile extends React.Component {
    constructor(props) {
        super(props)
        this.addToCart = this.addToCart.bind(this)
    }

    componentDidMount() {
        if (this.props.currentUser) {
            this.props.fetchtransactions()
            this.props.fetchcartitems(this.props.currentUser.id)
            this.props.fetchreviews(this.props.currentUser.id)
        }
    }

    transactiondate(date) {
        let newdate = new Date(date)
        let months = ["Jan","Feb","Mar","Apr","May","Jun","July","Aug","Sept","Oct","Nov","Dec"];
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

    transactiontime(date) {
        let newdate = new Date(date)
        let hour = newdate.getHours()
        let minutes = newdate.getMinutes()
        let period = ""
        if (hour <= 11) period = "AM"
        if (hour > 11) {
            period = "PM"
            if (hour === 12) hour = 12 
            if (hour > 12) hour = hour - 12
        }
        let fulltime = `${hour}:${minutes} ${period}`
        return fulltime
    }

    servicetitle(title) {
        let newTitle = title.split()
        newTitle.forEach((word,idx) => {
            let update = word[0].toUpperCase() + word.slice(1).toLowerCase()
            newTitle[idx] = update
        })
        return newTitle.join(" ")
    }

    lastorder() {
        if (Object.values(this.props.transactions).length) {
            let t = Object.values(this.props.transactions)
            let last = t.pop()
            let newdate = new Date(last.createdAt)
            let months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
            let year = newdate.getFullYear()
            let month = newdate.getMonth()
            let day = newdate.getDate()
            let nday = newdate.getDay()
            let currentmonth = months[month]
            let fulldate = `${currentmonth} ${day}, ${year}`
            return fulldate
        }
    }

    addToCart(e) {
        e.preventDefault()
        if (this.props.cart[e.currentTarget.value]) {
            this.props.updateCart({cart_id: this.props.cart[e.currentTarget.value].cartId, 
                user_id: this.props.currentUser.id, product_id: e.currentTarget.value, quantity: this.props.cart[e.currentTarget.value].quantity+1})
        } else {
            this.props.addtocart({product_id: e.currentTarget.value, quantity: 1})
        }
    }

    render() {
        const display = this.props.transactions.length ? (
                            <div id="alltransactionsdiv">
                                {this.props.transactions.map(transaction => (
                                    <div key={transaction.id} id="individualtransactionbox">
                                        <div id="transactionprofilecol">
                                            <span id="deliveredtransactiontext">Service Date: {this.transactiondate(transaction.createdAt)}</span>
                                            <span id="packagetransactiontxt">
                                                {transaction.service ? (
                                                    <span id="packagetransactiontxt">{this.servicetitle(transaction.service)} provided to {this.props.currentUser.name} @ {this.transactiontime(transaction.createdAt)}</span>
                                                ) : (
                                                    null
                                                )}
                                            </span>
                                            <span id="quantitytransactiontxt">Quantity: {transaction.quantity}</span>
                                            <div id="transactionprofileprodinfo">
                                                <img id="transactionimage"src={transaction.photoUrl}/>
                                                <span id="moretransactiondetails">{transaction.title} - {transaction.description}</span>
                                            </div>
                                        </div>
                                        <div id="transactionbuttons">
                                            <button value={parseInt(transaction.productId)} onClick={this.addToCart} id="buyagainbtn"><BiShoppingBag/>&nbsp;&nbsp;&nbsp;&nbsp; Buy it again</button>
                                            <Link to={`/products/${transaction.productId}/reviews`}id="buyagainbtn">Write a product review</Link>
                                            <Link to={`/products/${transaction.productId}`} id="buyagainbtn">View your hero</Link>
                                            <Link to={`/services/${transaction.serviceId}/products`} id="buyagainbtn">View similar heros</Link>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            ) : (
                                null
                            )

        
        const reviewinfo = this.props.reviews.length ? (
            <div id="reviewinfodiv1">
                
                {this.props.reviews.map((review, idx) => (
                    <div key={idx} id="reviewonprofile">
                        <h5 id="h5reviewtitle">Review #{idx+1}</h5>
                        <span id="herotitleprofile">Hero: {review.name}</span>
                        <span id="servicetitleprofile">Service: {review.service}</span>
                        <span id="starsinprofile">
                        {[...Array(5)].map((star,i) => {
                            const ratingvalue = i + 1
                            return (
                                <FaStar key={i} size={15} color={ratingvalue <= review.ratings ? "#ffc107" : "#e4e5e9"}/>
                            )
                        })}
                        </span>
                        <span>{review.title}</span>
                        <span>{review.body}</span>
                    </div>
                ))}
            </div>
        ) : (
            null
        )

        let total = 0
        let quantity = 0 
        this.props.transactions.forEach(transaction => {
            total += (transaction.quantity * transaction.cost)
            quantity += transaction.quantity
        })
        return(
            <div>
                <NavBar />
                <h3 id="youroders">Your Orders</h3>
                <div>
                    <div id="profileandorderdiv">
                        <div>
                            <div id="profile">
                                <BsPersonCircle id="inneruserinfoprofile" size={350}/>
                                <span id="profilename">Name: {this.props.currentUser.name}</span>
                                <span id="profilename">Username: {this.props.currentUser.username}</span>
                            </div>
                            <h3 id="reviewsinprofileheader">Your Reviews</h3>
                            {reviewinfo}
                        </div>
                        <div id="profileorders">
                            <div id="innertopprofilediv">
                            <div id="toprowofprofile">
                                <div id="toprowprofilestart">
                                    <span id="topprofilestarttext"> LATEST ORDER PLACED</span>
                                    <span>{this.lastorder()}</span>
                                </div>
                                <div id="toprowprofilestart">
                                    <span id="topprofilestarttext">TOTAL</span>
                                    <span>${total.toFixed(2)}</span>
                                </div>
                                <div id="toprowprofilestart">
                                    <span id="topprofilestarttext">QUANTITY</span>
                                    <span>{quantity} items</span>
                                </div>
                                <div id="toprowprofilestart">
                                    <span id="topprofilestarttext">SHIP TO</span>
                                    <span id="topprofileusernametext">{this.props.currentUser.name}</span>
                                </div>
                            </div>
                            <div id="toprowprofileend">
                                <span id="topprofilestarttext">ORDER #702-5932004-7148203</span>
                                <span id="topprofileusernametext">View order details</span>
                            </div>
                            </div>
                            {display}
                    </div>
                </div>
                {/* {this.props.transactions.map(transaction => (
                    <div>
                        <span>{transaction.title}</span>
                        <span>{transaction.quantity}</span>
                        <span>{transaction.description}</span>
                    </div>
                ))} */}
            </div>
            <Footer />
            </div>
        )
    }
}

export default Profile 
