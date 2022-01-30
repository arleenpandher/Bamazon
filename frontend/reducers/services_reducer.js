import { RECEIVE_SERVICES } from "../actions/service_actions";

const ServicesReducer = (state={}, action) => {
    Object.freeze(state)
    switch(action.type) {
        case RECEIVE_SERVICES:
            return Object.assign({}, state, action.services)
        default:
            return state 
    }
}

export default ServicesReducer