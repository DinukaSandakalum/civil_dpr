import { createStore, applyMiddleware, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';
import boqReducer from "../reducers/boq/boqReducer";
import {watcherSaga} from "../sagas/boq/boqSaga";

const reducer = combineReducers({
    boq: boqReducer,
});

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    reducer,
    applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(watcherSaga);

export default store;
