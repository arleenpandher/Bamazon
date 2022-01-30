import React from "react"
import NavBarContainer from "../nav_bar/nav_bar_container"
import {Link} from "react-router-dom"
import HerozonBasicImage from "../../../app/assets/images/Herozon_Basic.png"

class CartIndex extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchallcart(this.props.userId)
    }


    render() {
        if (!Object.values(this.props.cartproducts).length) return null 
        return(
            <div>
                <header>
                    <NavBarContainer/>
                </header>
                <div id="BasicHeadImg">
                    <img id="BasicHeadImage" src={HerozonBasicImage}></img>
                </div>
                <div>
                    {this.props.cartIds.map((cartId) => {
                            {console.log(this.props.cartproducts[cartId].photoUrl)}
                            {console.log(this.props.cartproducts[cartId].title)}
                            return(
                                <div id="CHECK400">
                                <img id="productindeximage" src={this.props.cartproducts[cartId].photoUrl}/>
                                <span id="CHECK300">{this.props.cartproducts[cartId].title}</span>
                                 </div> 
                            )
                    })}
                </div>
            </div>
        )
    }
}

export default CartIndex