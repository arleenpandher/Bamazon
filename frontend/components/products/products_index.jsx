import React from "react"
import NavBarContainer from "../nav_bar/nav_bar_container"
import {Link} from "react-router-dom"

class ProductIndex extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchproducts(this.props.serviceId)
    }

    render() {
        if (!this.props.products.length) return null
        return (
            <div>
                <header>
                    <NavBarContainer/>
                </header>
                <div>
                    <div>
                        {this.props.products.map(product => (
                            <Link key={product.id} to={`/products/${product.id}`}>
                                <div id="productindexdiv">
                                <img id="productindeximage" src={product.photoUrl}/>
                                <span>{product.title}</span>
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