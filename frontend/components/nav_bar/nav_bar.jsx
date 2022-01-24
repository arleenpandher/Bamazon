import React from "react"
import { Link } from "react-router-dom"
import Logo from "../../../app/assets/images/logo2.png"
import Pindrop from "../../../app/assets/images/pindrop.png"

const NavBar = ({currentUser, logout}) => {

    // const display = currentUser ? (
    //     <div>
    //         <h3>Welcome {currentUser.name}</h3>
    //         <button onClick={logout}>Logout</button>
    //     </div>
    // ) : (
    //     <div>
    //         {console.log(currentUser)}
    //         <Link to={`/signup`}>Create Account</Link>
    //         <Link to={`/login`}>Sign-In</Link>
    //     </div>
    // )

    return (
        <div>
            <header id="header">
                <div id="one">
                    <div>
                        <img id="navimage" src={Logo}></img>
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
                        <option selected="selected" value="one">All</option>
                        <option value="two">Choice 2</option>
                        <option value="three">Choice 3</option>
                    </select>
                    <input id="navsearchtext"type="text" value="unknown"/>
                    <input id="navsearchbutton" type="submit" value="search"/>
                </div>
                <div id="three">
                    Bye
                </div>
            </header>
        </div>
    )
}

export default NavBar