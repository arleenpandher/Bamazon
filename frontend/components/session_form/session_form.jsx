import React from "react"
import { Link } from "react-router-dom"
import Logo from "../../../app/assets/images/logo.png"

class SessionForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = this.props.information
        this.handleSubmit = this.handleSubmit.bind(this)
        this.demouser = this.demouser.bind(this)
    }

    componentWillUnmount() {
        this.props.clearErrors()
    }

    update(field) {
        return e => {
            this.setState({ [field]: e.currentTarget.value })
        }
    }

    handleSubmit(e) {
        e.preventDefault()
        this.props.processForm(this.state)
        .then(() => this.props.history.push('/'))
    }


    renderErrors() {
        return(
          <ul>
            {this.props.errors.map((error, i) => (
              <li key={`error-${i}`}>
                {error}
              </li>
            ))}
          </ul>
        );
      }

    demouser(e) {
        e.preventDefault()
        this.props.processForm({username: "The OG Hero", password:"hello123"})
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
        <div>
            <div id="formlogo">
                <Link to="/">
                    <img src={Logo}></img>
                </Link>
            </div>
            <div>
                {this.renderErrors()}
            </div>
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
                <label id="formlabelpassword">Password 
                    <input id="forminput" type="password" placeholder="At least 6 characters" value={this.state.password} onChange={this.update("password")}/>
                </label> 
                </div>
                
                <input id="submitform" type="submit" value={this.props.submitType}/>
                </form>
                <div id="linkform">
                    {this.props.formType === "Sign-In" ? (
                        <div id="innerlinkformdiv">
                            <div id="hloginline"></div>
                            <input id="submitform" onClick={this.demouser} type="submit" value="Login in as Demo User"/>
                            <Link id="linktobuttonlogin" to={`/signup`}> Create your Herozon account</Link>
                        </div>
                    ) : (
                        <p>Already have an account? <Link to={`/login`}>Sign-In</Link></p>
                    )}
                </div>
            </div>
        </div>
        )
    }
}

export default SessionForm