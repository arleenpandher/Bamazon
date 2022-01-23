import React from "react"
import { Link } from "react-router-dom"

const NavBar = ({currentUser, logout}) => {

    const display = currentUser ? (
        <div>
            <h3>Welcome {currentUser.name}</h3>
            <button onClick={logout}>Logout</button>
        </div>
    ) : (
        <div>
            {console.log(currentUser)}
            <Link to={`/signup`}>Create Account</Link>
            <Link to={`/login`}>Sign-In</Link>
        </div>
    )

    return (
        <div>
            {display}
        </div>
    )
}

export default NavBar