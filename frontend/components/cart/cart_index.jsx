import React from "react"
import NavBarContainer from "../nav_bar/nav_bar_container"
import {Link} from "react-router-dom"
import HerozonBasicImage from "../../../app/assets/images/Herozon_Basic.png"
import Hero from "../../../app/assets/images/EmptyCart.png"

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
            <div id="outtermostcartindexdiv">
                <header>
                    <NavBarContainer/>
                </header>
                <div id="cartindexoutterdiv">
                <div id="cartindexborder">
                    <h1>Shopping Cart</h1>
                    <div id="hnavlineupdate"></div>
                    {this.props.cartproducts.map((product) => {
                        return(
                        
                            <div id="minicartindexdiv" key={product.cart_id}>
                                 <img id="cartindeximage" src={product.photoUrl}/>
                                 <div id="innercartindexdiv">
                                    <span>{product.title}</span>
                                    <span id="cartindexprice">{product.cost}</span>
                                    <span id="cartindexinstock">In Stock</span>
                                    <span>Department: Flying Lessons</span>
                                    <div>
                                        <span>Quantity: {product.quantity}</span>
                                        <button value={product.cartId} onClick={this.removeitem}>Delete</button>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                    </div>
                    <div id="totalpricediv">
                        <span>Total ({quantity} items): ${total.toFixed(2)}</span>
                        <button onClick={this.handleSubmit}>Proceed to checkout</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default CartIndex