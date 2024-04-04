import { call, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import { fetchLabourRequest, fetchLabourSuccess, fetchLabourFailure } from '../../actions/labour/labourActions';
import { FETCH_LABOUR_REQUEST } from '../../actions/actionTypes';

function fetchLabourApi() {

    const requestBody = {
        requestBody: {},
        requestHeader: {
            requestId: "1676541979935",
            timestamp: "2023-02-16T10:06:17.152Z",
            channel: "dpr-ui",
            userId: "10"
        }
    };

    return axios.post('http://localhost:8085/civil/dpr/api/v1.0/ui-manager/labour/list', requestBody)
        .then(response => response.data)
        .catch(error => { throw error; });
}

function* fetchLabourSaga() {
    try {
        const response = yield call(fetchLabourApi);
        const labourList = response.responseBody.map(item => ({
            labourType: item.labourType,
            labourRate: item.labourRate,
        }));
        yield put(fetchLabourSuccess(labourList));
    } catch (e) {
        yield put(fetchLabourFailure(e.message));
    }
}

export function* labourSaga() {
    yield takeLatest(FETCH_LABOUR_REQUEST, fetchLabourSaga);
}
