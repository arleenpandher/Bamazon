import React from "react"
import NavBar from "../nav_bar/nav_bar_container"

class Profile extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchtransactions()
    }

    render() {
        if (!this.props.transactions.length) return null 
        return(
            <div>
                <NavBar />
                {this.props.transactions.map(transaction => (
                    <div>
                        <span>{transaction.title}</span>
                        <span>{transaction.quantity}</span>
                        <span>{transaction.description}</span>
                    </div>
                ))}
            </div>
        )
    }
}

export default Profile 
