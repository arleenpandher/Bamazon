import { combineReducers } from "redux";

import usersReducer from "./users_reducer";
import ServicesReducer from "./services_reducer";
import ProductsReducer from "./products_reducer";
import CartReducer from "./cart_reducer"


const entitiesReducer = combineReducers({
    users: usersReducer,
    services: ServicesReducer,
    products: ProductsReducer,
    carts: CartReducer
  });

export default entitiesReducer;

