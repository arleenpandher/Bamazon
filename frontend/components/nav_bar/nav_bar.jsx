import React from "react"
import { Link, Redirect } from "react-router-dom"
// import Logo from "../../../app/assets/images/logo2.png"
// import Pindrop from "../../../app/assets/images/pindrop.png"

import {AiOutlineSearch} from "react-icons/ai"

class NavBar extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            serviceId: "",
            productId: "",
            searchedParams: [],
            userinput: ""
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.productsearch = this.productsearch.bind(this)
        this.showElement = this.showElement.bind(this)
    }

    componentDidMount() {
        this.props.fetchallservices()
        if (this.props.currentUser) {
            this.props.fetchallcart(this.props.currentUser)
        } 
    }

    updatesearch(field) {
        return e => {
            // console.log(e.currentTarget.value)
            this.setState({ [field]: e.currentTarget.value })
            this.props.fetchserviceproducts(e.currentTarget.value)
            .then(() => {
                // return (
                //     console.log(this.props.products)
                // )
                 const initarray = this.props.products.filter(ele => this.state.serviceId == ele.serviceId)
                 this.setState({ ["searchedParams"]:  initarray})
            })
            // return (
            //     console.log(this.props.products)
            // )
            // const initarray = this.props.products.filter(ele => )
            // this.setState({ ["searchedParams"]:  initarray}, () => {return null})
        }
    }

    handleSubmit() {
        if (!this.state.productId.length && this.state.serviceId.length) {
            this.props.history.push(`/services/${this.state.serviceId}/products`)
        }
    }

    showElement() {
        return(
            <div id="searchdropdown">
                {console.log("ENETERED")}
                {this.state.searchedParams.map((prod,idx) => (
                    <span key={idx}>{prod.title}</span>
                ))}
            </div>
        )
    }

    productsearch(e) {
        return e => {
            this.setState({ ["userinput"]: e.currentTarget.value })
            const searchWord = e.currentTarget.value
            const newFilter = this.state.searchedParams.filter((prod) => {
                return prod.title.toLowerCase().includes(searchWord.toLowerCase())
            })
            this.setState({ ["searchedParams"]:  newFilter})
        }
    }

    render() {
        // if (!this.props.currentUser.itemsincart) return null
        console.log(this.state)
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
                            <Link id="navbarlogintext" onClick={logout} to={`/login`}>Sign Out</Link>
                            <Link id="navbarlogintext" to={`/users/${currentUser.id}/profile`}>View Profile</Link>
                        </div>
                    </div>

                        <div id="cartdiv">
                            <Link id="cartlink" to={`/users/${currentUser.id}/carts`}>
                                <img id="cartnavbar" src={window.cart}></img>
                                <span id="quantitycounttext">{count}</span>
                            </Link>
                            {/* <span id="quantitycounttext">{count}</span> */}
                        </div>
                </div>
                ) : (
                <div id="three">

                    <div id="navdropdown">
                        <button id="navdropdownbtn">Hello, Sign in</button>
                        <div id="navdropdowncontentinit">
                            <Link id="navbarlogintext" to={`/login`}>Login</Link>
                            <Link id="navbarlogintext" to={`/signup`}>Sign Up</Link>
                        </div>
                    </div>
                    {/* <span id="cartitemcount">{count}</span> */}
                    <div id="cartdiv">
                        <Link id="cartlink" to={`/login`}>
                            <img id="cartnavbar" src={window.cart}></img>
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
                        <img id="navimage" src={window.logo3}></img>
                    </Link>
                    </div>
                    <div id="deliverybar">
                        <img id="pindropimage" src={window.pindrop}></img>
                        <div id="deliverytext">
                            <span id="toptext">Deliver to</span>
                            <span id="bottomtext">Canada</span> 
                        </div>
                    </div>
                </div>
                <div id="two">
                    <select onChange={this.updatesearch("serviceId")} id="navallbar">
                        <option value={"all"}>All</option>
                        {this.props.services.map((ser,idx) => (
                            <option key={idx} value={ser.id}>{ser.title}</option>
                        ))}
                    </select>
                    
                    <input id="navsearchtext"type="text" 
                    // onChange={this.productsearch()
                    //     .then(() =>(
                    //     <div id="searchdropdownctx">
                    //         {console.log(this.state.searchedParams)}
                    //         {this.state.searchedParams.map(prod => (
                    //         <span>{prod.title}</span>
                    //         ))}
                    //     </div>
                    // ))
                    /> 
                    <button onClick={this.handleSubmit} id="navsearchbutton" type="submit">
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