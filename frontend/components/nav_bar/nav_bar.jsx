import React from "react"
import { Link } from "react-router-dom"
import Logo from "../../../app/assets/images/logo2.png"
import Pindrop from "../../../app/assets/images/pindrop.png"
import Cart from "../../../app/assets/images/amazon-cart.png"
import MagnifyingGlass from "../../../app/assets/images/magnifying-glass.png"
import {AiOutlineSearch} from "react-icons/ai"

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
        let count = 0 
        if (this.props.currentUser && this.props.totalitemsincart) {
        this.props.totalitemsincart.forEach(ele => {
            count += ele.quantity
        })}
        let {currentUser, logout} = this.props
        const display = currentUser ? (
                <div id="three">
                    <div id="navdropdown">
                        <button id="navdropdownbtn">Welcome {currentUser.name}</button>
                        <div id="navdropdowncontent">
                            <Link onClick={logout} to={`/login`}>Sign Out</Link>
                            <Link to={`/users/${currentUser.id}/profile`}>Profile</Link>
                        </div>
                    </div>

                        <div id="cartdiv">
                            <Link id="cartlink" to={`/users/${currentUser.id}/carts`}>
                                <img id="cartnavbar" src={Cart}></img>
                            </Link>
                            <span id="quantitycounttext">{count}</span>
                        </div>
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
                    {/* <span id="cartitemcount">{count}</span> */}
                    <div id="cartdiv">
                        <Link id="cartlink" to={`/login`}>
                            <img id="cartnavbar" src={Cart}></img>
                        </Link>
                        <span id="quantitycounttext">{count}</span>
                    </div>
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
                    <select id="navallbar">
                        <option disabled selected>All</option>
                        <option >Choice 2</option>
                        <option >Choice 3</option>
                    </select>
                    <input id="navsearchtext"type="text"/>
                    <button id="navsearchbutton" type="submit">
                        <AiOutlineSearch id="searchimg"/>
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