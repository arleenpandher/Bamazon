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
    }

    addToCart(e) {
        e.preventDefault()
        // console.log(this.props.productinfo)
        // console.log(e.currentTarget.value)
        // this.setState({ ["productId"]: e.currentTarget.value })
        // console.log(this.state)
        this.props.addtocart({product_id: e.currentTarget.value, quantity: 1})
    }


    render() {
        if (!this.props.products.length) return null
        return (
            <div>
                <header>
                    <NavBarContainer/>
                </header>
                <div id="BasicHeadImg">
                    <img id="BasicHeadImage" src={HerozonBasicImage}></img>
                </div>
                <div id="entirelowernavbar">
                    <div id="lowernavbartext">
                        {this.props.services.map(service => (
                            <Link key={service.id} to={`/services/${service.id}/products`}>{service.title}</Link>
                        ))}
                    </div>
                    <div id="hnavline">
                    </div>
                </div>
                <div id="productindexbox">
                    {this.props.products.map(product => (
                        <Link key={product.id} to={`/products/${product.id}`}>
                            <div id="productindexdiv">
                                <img id="productindeximage" src={product.photoUrl}/>
                                <span id="productindextitle">{product.title}</span>
                                <button value={product.id} onClick={this.addToCart}>Add to Cart!</button>
                            </div>
                        </Link>)
                    )}
                </div>
            </div>


        )
    }
}

export default ProductIndex 