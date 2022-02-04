import React from "react"
import NavBar from "../nav_bar/nav_bar_container"
import Footer from "../Footer"
import {Link} from "react-router-dom"
import {FcCheckmark} from "react-icons/fc"

class checkOutMessage extends React.Component {
    
    render() {
        return(
            <div>
                <NavBar />
                <div id="checkoutbox">
                    <span id="checkouttext"><FcCheckmark size={35} />       Thank you for placing an order with Herozon</span>
                    <span id="checkouttext2">If you require more information regarding your order, please visit <Link to={`/users/${this.props.user.id}/profile`}>your profile</Link></span>
                </div>
                <footer id="footerincheckout">
                    <Footer />
                </footer>
                
            </div>
        )
    }
}


export default checkOutMessage