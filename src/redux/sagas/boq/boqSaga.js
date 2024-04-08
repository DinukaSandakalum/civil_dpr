import { call, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import { fetchBoqRequest, fetchBoqSuccess, fetchBoqFailure } from '../../actions/boq/boqActions';
import { FETCH_BOQ_REQUEST } from '../../actions/actionTypes';

function fetchBoqApi() {

    const requestBody = {
        requestBody: {},
        requestHeader: {
            requestId: "1676541979935",
            timestamp: "2023-02-16T10:06:17.152Z",
            channel: "dpr-ui",
            userId: "10"
        }
    };

    return axios.post('http://localhost:8085/civil/dpr/api/v1.0/ui-manager/boq-code/list', requestBody)
        .then(response => response.data)
        .catch(error => { throw error; });
}

function* fetchBoqSaga() {
    try {
        const response = yield call(fetchBoqApi);
        const boqList = response.responseBody.map(item => ({
            boqId: item.boqId,
            boqCode: item.boqCode,
            boqDescription: item.boqDescription,
        }));
        yield put(fetchBoqSuccess(boqList));
    } catch (e) {
        yield put(fetchBoqFailure(e.message));
    }
}

export function* boqCodeSaga() {
    yield takeLatest(FETCH_BOQ_REQUEST, fetchBoqSaga);
}
