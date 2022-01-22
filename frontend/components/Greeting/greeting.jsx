import React from 'react'
import { Link } from 'react-router-dom'

const Greeting = ({currentUser, logout}) => {

    const display = currentUser ? (
        <div>
            <h1>Welcome {currentUser.username}</h1>
            <button onClick={() => logout()}>Logout</button>
            <Link to={`/`}>Benches</Link>
        </div>
    ) : (
        <div>
            <Link to={`/signup`}>Sign Up</Link>
            <Link to={`/login`}>Login</Link>
        </div>
    )

    return (
        <header>
            <div>
                {display}
            </div>
        </header>
    )
}

export default Greeting 