import React from "react"
import NavBar from "../nav_bar/nav_bar_container"
import {BsPersonCircle} from "react-icons/bs"
import {Link} from "react-router-dom"
import {BiShoppingBag} from "react-icons/bi"

class Profile extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchtransactions()
    }

    render() {
        if (!this.props.transactions.length) return null
        let total = 0
        let quantity = 0 
        this.props.transactions.forEach(transaction => {
            total += (transaction.quantity * transaction.cost)
            quantity += transaction.quantity
        })
        return(
            <div>
                <NavBar />
                <div>
                    <div id="profileandorderdiv">
                        <div id="profile">
                                <BsPersonCircle id="inneruserinfoprofile" size={350}/>
                                <span id="profilename">Name: {this.props.currentUser.name}</span>
                                <span id="profilename">Username: {this.props.currentUser.username}</span>
                        </div>
                        <div id="profileorders">
                            <div id="innertopprofilediv">
                            <div id="toprowofprofile">
                                <div id="toprowprofilestart">
                                    <span id="topprofilestarttext">ORDER PLACED</span>
                                    <span>January 18, 2022</span>
                                </div>
                                <div id="toprowprofilestart">
                                    <span id="topprofilestarttext">TOTAL</span>
                                    <span>${total}</span>
                                </div>
                                <div id="toprowprofilestart">
                                    <span id="topprofilestarttext">QUANTITY</span>
                                    <span>{quantity} items</span>
                                </div>
                                <div id="toprowprofilestart">
                                    <span id="topprofilestarttext">SHIP TO</span>
                                    <span id="topprofileusernametext">{this.props.currentUser.name}</span>
                                </div>
                            </div>
                            <div id="toprowprofileend">
                                <span id="topprofilestarttext">ORDER #702-5932004-7148203</span>
                                <span id="topprofileusernametext">View order details</span>
                            </div>
                            </div>
                            <div id="alltransactionsdiv">
                                {this.props.transactions.map(transaction => (
                                    <div id="individualtransactionbox">
                                        <div id="transactionprofilecol">
                                            <span id="deliveredtransactiontext">Delivered Jan. 22, 2022</span>
                                            <span id="packagetransactiontxt">Package was handed to {this.props.currentUser.name}</span>
                                            <div id="transactionprofileprodinfo">
                                                <img id="transactionimage"src={transaction.photoUrl}/>
                                                <span id="moretransactiondetails">{transaction.title} - {transaction.description}</span>
                                            </div>
                                        </div>
                                        <div id="transactionbuttons">
                                            <button id="buyagainbtn"><BiShoppingBag/>&nbsp;&nbsp;&nbsp;&nbsp; Buy it again</button>
                                            <Link id="buyagainbtn">Write a product review</Link>
                                            <Link id="buyagainbtn">View your hero</Link>
                                            <Link id="buyagainbtn">View similar heros</Link>
                                        </div>
                                    </div>
                                ))}
                            </div>
                    </div>
                </div>
                {/* {this.props.transactions.map(transaction => (
                    <div>
                        <span>{transaction.title}</span>
                        <span>{transaction.quantity}</span>
                        <span>{transaction.description}</span>
                    </div>
                ))} */}
            </div>
            </div>
        )
    }
}

export default Profile 
