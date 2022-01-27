import { combineReducers } from "redux";

import usersReducer from "./users_reducer";
import ServicesReducer from "./services_reducer";
import ProductsReducer from "./products_reducer";


const entitiesReducer = combineReducers({
    users: usersReducer,
    services: ServicesReducer,
    products: ProductsReducer
  });

export default entitiesReducer;

