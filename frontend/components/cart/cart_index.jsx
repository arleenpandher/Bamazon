import React from "react"
import NavBarContainer from "../nav_bar/nav_bar_container"
import {Link} from "react-router-dom"
import HerozonBasicImage from "../../../app/assets/images/Herozon_Basic.png"

class CartIndex extends React.Component {
    constructor(props) {
        super(props)
        this.removeitem = this.removeitem.bind(this)
    }

    componentDidMount() {
        this.props.fetchallcart(this.props.userId)
    }

    removeitem(e) {
        e.preventDefault()
        this.props.deletecartItem(e.currentTarget.value)
    }

    render() {
        if (!Object.values(this.props.cartproducts).length) return null
        // let obj = {} 
        // this.props.cartIds.forEach(cartId => {
        //     if (!obj[cartId]) obj[cartId] = 0 
        //     obj[cartId] += 1
        // })
        // obj = Object.entries(obj)
        // obj.forEach(subarray => {
        //     subarray[0] = Number(subarray[0])
        // })
        // console.log(obj)
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
                                    <span id="cartindexprice">$78.99</span>
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
                        <span>Total (3 items): $99.99</span>
                        <button>Proceed to checkout</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default CartIndex