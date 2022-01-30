import React from "react"
import { Link } from "react-router-dom"
import Logo from "../../../app/assets/images/logo2.png"
import Pindrop from "../../../app/assets/images/pindrop.png"
import Cart from "../../../app/assets/images/amazon-cart.png"
import MagnifyingGlass from "../../../app/assets/images/magnifying-glass.png"
import { fetchAllItemsinCart } from "../../utils/cart_api_util"

class NavBar extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        if (this.props.currentUser) {
            this.props.fetchallcart(this.props.currentUser)
        } 
    }


    render() {
        // if (!this.props.currentUser.itemsincart) return null
        let {currentUser, logout} = this.props
        const display = currentUser ? (
                <div id="three">
                    <div id="navdropdown">
                        <button id="navdropdownbtn">Welcome {currentUser.name}</button>
                        <div id="navdropdowncontent">
                            <Link onClick={logout} to={`/login`}>Sign Out</Link>
                        </div>
                    </div>

                        <span id="cartitemcount">{this.props.totalitemsincart}</span>
                        {/* <img id="cartnavbar" src={Cart}></img> */}
                        <Link to={`/users/${currentUser.id}/carts`}>
                            <img id="cartnavbar" src={Cart}></img>
                        </Link>
                  
                </div>
                ) : (
                <div id="three">    
                    <div id="navdropdown">
                        <button id="navdropdownbtn">Hello, Sign in</button>
                        <div id="navdropdowncontent">
                            <Link to={`/login`}>Login</Link>
                            <Link to={`/signup`}>Sign Up</Link>
                        </div>
                    </div>
                    <img id="cartnavbar" src={Cart}></img>
                </div>
                )
            return (
            <div>
            <nav id="header">
                <div id="one">
                    <div>
                    <Link to="/">
                        <img id="navimage" src={Logo}></img>
                    </Link>
                    </div>
                    <div id="deliverybar">
                        <img id="pindropimage" src={Pindrop}></img>
                        <div id="deliverytext">
                            <span id="toptext">Deliver to</span>
                            <span id="bottomtext">Canada</span> 
                        </div>
                    </div>
                </div>
                <div id="two">
                    <select defaultValue="All" id="navallbar">
                        <option >All</option>
                        <option >Choice 2</option>
                        <option >Choice 3</option>
                    </select>
                    <input id="navsearchtext"type="text"/>
                    <button id="navsearchbutton" type="submit">
                        <img id="searchimg" src={MagnifyingGlass}></img>
                    </button>    
                </div>
                <div id="three">
                    {display}
                </div>
            </nav>
        </div>
        )}
}



export default NavBar