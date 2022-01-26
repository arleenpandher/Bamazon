import { fetchservices } from "../utils/service_api_util";

export const RECEIVE_SERVICES = "RECEIVE_SERVICES"

const receiveServices = services => ({
    type: RECEIVE_SERVICES,
    services 
})

export const fetchServices = () => dispatch => (
    fetchservices()
    .then(services => dispatch(receiveServices(services)))
)