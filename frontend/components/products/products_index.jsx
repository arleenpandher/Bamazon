import React from "react"
import NavBarContainer from "../nav_bar/nav_bar_container"
import {Link} from "react-router-dom"
import HerozonBasicImage from "../../../app/assets/images/Herozon_Basic.png"

class ProductIndex extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchproducts(this.props.serviceId)
        this.props.fetchservices()
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
                            </div>
                        </Link>)
                    )}
                </div>
            </div>


        )
    }
}

export default ProductIndex 