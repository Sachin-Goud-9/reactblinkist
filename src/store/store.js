import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import ReduxThunk from "redux-thunk";
import bookReducer from './reducer';

const mainReducer = combineReducers({ books: bookReducer });
export default createStore(
    mainReducer,
    composeWithDevTools(applyMiddleware( ReduxThunk ))
);