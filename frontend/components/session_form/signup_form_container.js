import { connect } from "react-redux"
import { signUp, clearErrors } from "../../actions/session_actions"
import SessionForm from "./session_form"

const mapStateToProps = state => ({
    errors: state.errors.session,
    formType: "Create account",
    information: {
        name: "",
        username: "",
        password: ""
    },
    submitType: "Create your Herozon account"
})

const mapDispatchToProps = dispatch => ({
    processForm: user => dispatch(signUp(user)),
    clearErrors: () => dispatch(clearErrors())
})

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm)