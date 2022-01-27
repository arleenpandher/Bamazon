import React from "react"
import NavBarContainer from "../nav_bar/nav_bar_container"

class ProductShow extends React.Component {

    constructor(props) {
        super(props)
    }

    componentDidMount() {
        console.log(this.props.match)
        this.props.fetchproduct(this.props.match.params.productId)
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
                </div>
            </div>
        )
    }
}

export default ProductShow 