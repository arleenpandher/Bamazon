import { combineReducers } from "redux";

import sessionErrorsReducer from "./session_errors_reducer";
import ReviewErrorReducer from "./review_errors_reducer"

const errorsReducer = combineReducers({
  session: sessionErrorsReducer,
  review: ReviewErrorReducer
});

export default errorsReducer;