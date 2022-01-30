import React from "react"
import NavBarContainer from "../nav_bar/nav_bar_container"

class ProductShow extends React.Component {

    constructor(props) {
        super(props)
        this.state = this.props.cartitem
        // this.update = this.update.bind(this)
        this.addToCart = this.addToCart.bind(this)
    }

    componentDidMount() {
        console.log(this.props.match)
        this.props.fetchproduct(this.props.match.params.productId)
    }

    // update(field) {
    //     return e => {
    //         this.setState({ [field]: e.currentTarget.value })
    //     }
    // }

    addToCart(e) {
        e.preventDefault()
        this.props.addtocart({product_id: productId, quantity: 1})
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
                        <span id="productshowprice">Price: $78.89</span>
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
                            <span id="productshowprice">$78.89</span>
                            <span>$9.53 Transportation Desposit to San Francisco</span>
                            <span id="servicedate">Service Date: <span>Tuesday, February 8</span></span>
                        </div>
                        <span>In Stock.</span>
                        <select>
                            <option disabled selected>Quantity</option>
                            <option value={1}>1</option>
                            <option value={2}>2</option>
                            <option value={3}>3</option>
                        </select>
                        <button value={this.props.product.id} onClick={this.addToCart}>Add to Cart</button>
                        <span>Secure transaction</span>
                        <span>Ships from <span>Herozon.com</span></span>
                        <span>Sold by <span>Herozon.com</span></span>
                        <span>Return policy: <span>Eligible for Return, Refund or Replacement</span></span>
                        <span>Support: <span>Free Herozon tech support included</span></span>
                    </div>
                </div>
            </div>
        )
    }
}

export default ProductShow 