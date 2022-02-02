import React from "react"
import NavBarContainer from "../nav_bar/nav_bar_container"
import {Link} from "react-router-dom"
import HerozonBasicImage from "../../../app/assets/images/Herozon_Basic.png"

class ProductIndex extends React.Component {
    constructor(props) {
        super(props)
        // this.state = this.props.productinfo
        this.addToCart = this.addToCart.bind(this)
    }

    componentDidMount() {
        this.props.fetchproducts(this.props.serviceId)
        this.props.fetchservices()
        if (this.props.user) {
            this.props.fetchcartitems(this.props.user.id)
        }
    }

    addToCart(e) {
        e.preventDefault()
        if (this.props.cart[e.currentTarget.value]) {
            this.props.updateCart({cart_id: this.props.cart[e.currentTarget.value].cartId, 
                user_id: this.props.user.id, product_id: e.currentTarget.value, quantity: this.props.cart[e.currentTarget.value].quantity+1})
        } else {
            this.props.addtocart({product_id: e.currentTarget.value, quantity: 1})
        }
    }


    render() {
        if (!this.props.products.length) return null
        return (
            <div>
                <header>
                    <NavBarContainer/>
                </header>
                <div id="BasicHeadImg">
                    {/* <span>{this.props.services[this.props.serviceId].title}</span> */}
                    <img id="BasicHeadImage" src={HerozonBasicImage}></img>
                </div>
                <div id="entirelowernavbar">
                    <div id="lowernavbartext">
                        {this.props.services.map(service => (
                            <Link id="lowernavbarentries" key={service.id} to={`/services/${service.id}/products`}>{service.title.toUpperCase()}</Link>
                        ))}
                    </div>
                    <div id="hnavline">
                    </div>
                </div>
                <div id="CHECK3000">
                <div id="productindexbox">
                    {this.props.products.map(product => (
                        <Link id="productindextitle" key={product.id} to={`/products/${product.id}`}>
                            <div id="productindexdiv">
                                <img id="productindeximage" src={product.photoUrl}/>
                                <span id="productindextitle">{product.title} - Powerful wizard and has been able to successful ride with Buckbeak</span>
                                <span>Ratings</span>
                                <span>Cost</span>
                                <button id="productindexaddtocartbtn" value={product.id} onClick={this.addToCart}>Add to Cart!</button>
                            </div>
                        </Link>)
                    )}
                </div>

                </div>
            </div>


        )
    }
}

export default ProductIndex 