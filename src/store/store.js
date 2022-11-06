import { composeWithDevTools } from "redux-devtools-extension";
import { combineReducers, applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import authReducer from "./reducers/authReducer";
import snackbarReducer from "./reducers/snackbarActions";
import friendsReducer from "./reducers/friendsReducer";
import chatReducer from "./reducers/chatReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  snackbar: snackbarReducer,
  friends: friendsReducer,
  chat: chatReducer,
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
