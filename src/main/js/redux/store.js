import { combineReducers, createStore } from "redux";

import pedingRequestsCounterReducer from "./reducers/pendingRequestsCounterReducer";

const rootReducer = combineReducers({
    pendingRequestsCounter: pedingRequestsCounterReducer,
});

const store = createStore(rootReducer);

export default store;