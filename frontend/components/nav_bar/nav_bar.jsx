import React from "react"
import { Link, Redirect } from "react-router-dom"
// import Logo from "../../../app/assets/images/logo2.png"
// import Pindrop from "../../../app/assets/images/pindrop.png"

import {AiOutlineSearch} from "react-icons/ai"
import ProductShow from "../products/product_show"

class NavBar extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            searcharray: [],
            userinput: ""
        }
        this.search = this.search.bind(this)
        this.servicesearch = this.servicesearch.bind(this)
        this.all = this.all.bind(this)
    }
    

    componentDidMount() {
        this.props.fetchallservices()
        this.props.allProducts()
        .then(this.all)
        if (this.props.currentUser) {
            this.props.fetchallcart(this.props.currentUser)
        } 
    }

    all(e) {
        this.setState({ searcharray: this.props.products }, () => {return null})
    }

    search(e) {
        this.setState({ userinput: e.currentTarget.value})
        const searchWord = e.currentTarget.value 
        const newFilter = this.state.searcharray.filter((product) => {
            return product.title.toLowerCase().includes(searchWord.toLowerCase())
        })
        this.setState({searcharray: newFilter })
    }

    servicesearch(e) {
        console.log(e.currentTarget.value)
        if (e.currentTarget.value === "all") {
            this.setState({searcharray: this.props.products}, () => {return null})
        } else {
            let newFilter = []
            this.props.products.forEach(product => {
                if (product.serviceId == e.currentTarget.value) {
                    newFilter.push(product)
            }})
            console.log(newFilter)
            this.setState({searcharray: newFilter }, () => {return null})
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
                    <select onChange={this.servicesearch} id="navallbar">
                        <option value="all">All</option>
                        {this.props.services.map((ser,idx) => (
                            <option key={idx} value={ser.id}>{ser.title}</option>
                        ))}
                    </select>
                    <div id="newsearchdiv">
                        <input onChange={this.search} id="navsearchtext" type="text" />
                        <div id="searchresults">
                            {this.state.searcharray.map((product,idx) => (
                            <span id="innersearchresults" key={idx}>
                                {/* <span onClick={this.searchclick}>{product.title}</span> */}
                                <Link to={`/products/${product.id}`}>{product.title}</Link>
                            </span>
                            ))}
                        </div> 
                    </div>
                    <button  id="navsearchbutton" type="submit">
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