import { connect } from "react-redux"
import Splash from "./splash"
import {fetchServices} from "../../actions/service_actions"

const mapStateToProps = state => ({
    services: Object.values(state.entities.services)
})

const mapDispatchToProps = dispatch => ({
    fetchservices: () => (dispatch(fetchServices()))
})

export default connect(mapStateToProps, mapDispatchToProps)(Splash)