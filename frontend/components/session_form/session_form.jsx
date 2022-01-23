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
        if (this.props.formType === "Create account") {
            additionalinformation = 
            <label id="formlabel">Your Name
                <input id="forminput" type="text" value={this.state.name} onChange={this.update("name")}/>
            </label>
        }
        return(
            <div id={this.props.formType === "Create account" ? "formdivsignup" : "formdivlogin"}>
                <h3 id="formheader">{this.props.formType}</h3>
                <form id="innerform" onSubmit={this.handleSubmit}>
                <div>
                    {additionalinformation}
                </div>
                <div>
                <label id="formlabel">Username 
                    <input id="forminput" type="text" value={this.state.username} onChange={this.update("username")}/>
                </label>
                </div>
                <div>
                <label id="formlabel">Password 
                    <input id="forminput" type="password" value={this.state.password} onChange={this.update("password")}/>
                </label> 
                </div>
               
                <input id="submitform" type="submit" value={this.props.submitType}/>
                </form>
                <div id="linkform">
                    {this.props.formType === "Sign-In" ? (
                        <Link to={`/signup`}>Create your Herozon account</Link>
                    ) : (
                        <p>Already have an account? <Link to={`/login`}>Sign-In</Link></p>
                    )}
                </div>
            </div>
        )
    }
}

export default SessionForm