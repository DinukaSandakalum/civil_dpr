import { call, put, takeLatest } from 'redux-saga/effects';
import { fetchUserSuccess, fetchUserFailure } from '../../actions/user/userActions';
import {FETCH_USER_REQUEST} from "../../actions/actionTypes";
import axios from 'axios';

function* fetchUserDetails(action) {
    try {
        const response = yield call(axios.post, 'http://localhost:8085/civil/dpr/api/v1.0/ui-manager/user/detail', {
            requestBody: {
                userName: action.payload.userName,
                password: action.payload.password,
            },
            requestHeader: {
                requestId: "1676541979935",
                timestamp: "2023-02-16T10:06:17.152Z",
                channel: "dpr-ui",
                userId: "10"
            }
        }, {
            headers: { 'Content-Type': 'application/json' }
        });
        yield put(fetchUserSuccess(response.data));
    } catch (error) {
        yield put(fetchUserFailure(error.message));
    }
}

export function* userSaga() {
    yield takeLatest(FETCH_USER_REQUEST, fetchUserDetails);
}