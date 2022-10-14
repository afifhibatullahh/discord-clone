import { composeWithDevTools } from "redux-devtools-extension";
import { combineReducers, applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import authReducer from "./reducers/authReducer";
import snackbarReducer from "./reducers/snackbarActions";

const rootReducer = combineReducers({
  auth: authReducer,
  snackbar: snackbarReducer,
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
