import { createStore, applyMiddleware, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';
import boqReducer from "../reducers/boq/boqReducer";
import labourReducer from "../reducers/labour/labourReducer";
import materialReducer from "../reducers/material/materialReducer";
import machineryReducer from "../reducers/machinery/machineryReducer";
import {boqCodeSaga} from "../sagas/boq/boqSaga";
import {labourSaga} from "../sagas/labour/labourSaga";
import {materialSaga} from "../sagas/material/materialSaga";
import {machinerySaga} from "../sagas/machinery/machinerySaga";

const reducer = combineReducers({
    boq: boqReducer,
    labour: labourReducer,
    material: materialReducer,
    machinery: machineryReducer
});

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    reducer,
    applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(boqCodeSaga);
sagaMiddleware.run(labourSaga);
sagaMiddleware.run(materialSaga);
sagaMiddleware.run(machinerySaga);

export default store;
