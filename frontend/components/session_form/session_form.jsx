import React from "react"
import { Link } from "react-router-dom"

class SessionForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = this.props.information
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    update(field) {
        return e => {
            this.setState({ [field]: e.currentTarget.value })
        }
    }

    handleSubmit() {
        this.props.processForm(this.state)
        .then(() => this.props.history.push('/'))
    }

    render() {
        let additionalinformation 
        if (this.props.formType === "Create Account") {
            additionalinformation = 
            <label>Name
                <input type="text" value={this.state.name} onChange={this.update("name")}/>
            </label>
        }
        return(
            <div id="formdiv">
                <h3>{this.props.formType}</h3>
                <form onSubmit={this.handleSubmit}>
                <div>
                    {additionalinformation}
                </div>
                <div>
                <label>Username 
                    <input type="text" value={this.state.username} onChange={this.update("username")}/>
                </label>
                </div>
                <div>
                <label>Password 
                    <input type="password" value={this.state.password} onChange={this.update("password")}/>
                </label> 
                </div>
               
                <input type="submit" value={this.props.submitType}/>
                </form>
                <div>
                    {this.props.formType === "Sign-In" ? (
                        <Link to={`/signup`}>Create your Herozon Account</Link>
                    ) : (
                        <Link to={`/login`}>Sign-In to your Herozon Account</Link>
                    )}
                </div>
            </div>
        )
    }
}

export default SessionForm