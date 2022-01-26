import { combineReducers } from "redux";

import usersReducer from "./users_reducer";
import ServicesReducer from "./services_reducer";


const entitiesReducer = combineReducers({
    users: usersReducer,
    services: ServicesReducer,
  });

export default entitiesReducer;

