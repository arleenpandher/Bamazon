import React from "react"
import NavBarContainer from "../nav_bar/nav_bar_container"
import {Link} from "react-router-dom"
import HerozonBasicImage from "../../../app/assets/images/Herozon_Basic.png"
import Hero from "../../../app/assets/images/EmptyCart.png"
import {FaCheckCircle} from "react-icons/fa"

class CartIndex extends React.Component {
    constructor(props) {
        super(props)
        this.removeitem = this.removeitem.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
  
    }



    componentDidMount() {
        this.props.fetchallcart(this.props.userId)
    }

    removeitem(e) {
        e.preventDefault()
        this.props.deletecartItem(e.currentTarget.value)
    }

    handleSubmit() {
        this.props.cartproducts.forEach(cartitem => {
            this.props.newTransactions({quantity: cartitem.quantity, product_id: cartitem.id})
            this.props.deletecartItem(cartitem.cartId)
        })
    }

    render() {
        if (!Object.values(this.props.cartproducts).length) {
            return (
                <div>
                    <NavBarContainer/>
                    <div id="emptycartindex">
                        <span id="emptycartindextext">Your Herozon Cart is Empty.</span>
                        <span id="emptycartindextext2">Your shopping cart lives to serve. Give it purpose - fill it with different wizards, sponges, tributes, and more.</span>
                        <span id="emptycartindextext2">Herozon has given the heros an opportunity to provide services to everyone, don't miss your chance.</span>
                        <div id="hemptycartindexline"></div>
                        <img id="emptycartindeximg" src={Hero}/>
                    </div>
                </div>
            )
        }
        let total = 0
        let quantity = 0
        this.props.cartproducts.forEach(product => {
            total += (product.cost*product.quantity)
            quantity += product.quantity  
        })
        return(
            // <div>{console.log(this.props.cartproducts)}</div>
            <div id="outermostcartindexdiv">
                <header>
                    <NavBarContainer/>
                </header>
                <div id="cartindexoutterdiv">
                    <div id="cartindexborder">
                    <h1 id="shoppingcartheader">Shopping Cart</h1>
                    <h3 id="shoppingcartprice">Price</h3>
                    <div id="hnavlineupdate"></div>
                    {this.props.cartproducts.map((product) => {
                        return(
                            <div id="minicartindexdiv2">
                            <div id="minicartindexdiv" key={product.cart_id}>
                                 <img id="cartindeximage" src={product.photoUrl}/>
                                 <div id="innercartindexdiv">
                                    <span id="producttitleinreview">{product.title} - {product.description}</span>
                                    <span id="cartindexinstock">In Stock</span>
                                    <span id="randominfocartindex">Sold and Fulfilled by Herozon</span>
                                    <span id="randominfocartindex">Not Eligible for FREE Shipping </span>
                                    
                                    <div id="bottomcartindexrow">
                                        <span id="quantitycartindex">Quantity: {product.quantity}</span>&nbsp;&nbsp;&nbsp;&nbsp;
                                        <div id="vlineincart"></div>
                                        <button id="deletebtncartindex" value={product.cartId} onClick={this.removeitem}>Delete</button>
                                    </div>    
                                </div>
                                <div id="innerpricecartindex">
                                <span id="cartindexprice">${product.cost}</span>
                                </div>
                            </div>
                            <div id="hnavlineupdate202"></div>
                            </div>
                        )
                    })}
                    </div>
                    <div id="totalpricediv">
                        <div id="shippingfontincheckout">
                            <FaCheckCircle/>&nbsp;&nbsp;&nbsp;&nbsp;
                            <span>Your order qualifies from FREE shipping
                            (excludes remote locations).
                            </span>
                        </div>
                        <span id="checkoutotalprice">Total ({quantity} items): <span id="checkoutotalprice2">${total.toFixed(2)}</span></span>
                        <button id="proceedtocheckoutbtn" onClick={this.handleSubmit}>Proceed to checkout</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default CartIndex