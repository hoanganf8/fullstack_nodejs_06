import {
  combineReducers,
  legacy_createStore as createStore,
  applyMiddleware,
} from "redux";
import { thunk } from "redux-thunk";
import { composeWithDevTools } from "@redux-devtools/extension";
import { counterReducer } from "./reducers/counterReducer";
import { todoReducer } from "./reducers/todoReducer";
// import { loggerMiddleware } from "./middlewares/loggerMiddleware";
// import { fetchTodoMiddleware } from "./middlewares/fetchTodoMiddleware";
const rootReducer = combineReducers({
  counter: counterReducer,
  todo: todoReducer,
});
const middlewares = [
  // loggerMiddleware,
  // fetchTodoMiddleware
  thunk,
];
export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middlewares))
);
