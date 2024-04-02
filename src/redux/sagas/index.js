import { all } from 'redux-saga/effects';
import watchFetchBoqData from "../sagas"

// Here you would import your other sagas and fork them in this root saga
export default function* rootSaga() {
    yield all([
        watchFetchBoqData(),
        // add other watchers here
    ]);
}