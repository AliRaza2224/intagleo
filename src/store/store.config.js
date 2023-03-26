import {
    legacy_createStore as createStore,
    applyMiddleware,
    combineReducers,
    compose
} from "redux"

import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import thunk from "redux-thunk"
import promise from "redux-promise-middleware"
import AuthReducer from "./reducers/user.reducers";


const routeReducers = combineReducers({
    auth: AuthReducer
});

const persistConfig = ({
    key: 'root',
    storage
})


const middleware = applyMiddleware(promise, thunk)

let composeHancers = compose;

const persistedReducer = persistReducer(persistConfig, routeReducers)

export const STORE = createStore(persistedReducer, composeHancers(middleware))

export const PERSISTOR = persistStore(STORE)

