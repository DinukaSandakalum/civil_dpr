import { call, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import { fetchMachineryRequest, fetchMachinerySuccess, fetchMachineryFailure } from '../../actions/machinery/machineryActions';
import { FETCH_MACHINERY_REQUEST } from '../../actions/actionTypes';

function fetchMachineryApi() {

    const requestBody = {
        requestBody: {},
        requestHeader: {
            requestId: "1676541979935",
            timestamp: "2023-02-16T10:06:17.152Z",
            channel: "dpr-ui",
            userId: "10"
        }
    };

    return axios.post('http://localhost:8085/civil/dpr/api/v1.0/ui-manager/machinery/list', requestBody)
        .then(response => response.data)
        .catch(error => { throw error; });
}

function* fetchMachinerySaga() {
    try {
        const response = yield call(fetchMachineryApi);
        const machineryList = response.responseBody.map(item => ({
            machineryType: item.machineryType,
            machineryUom: item.uom,
            machineryRate: item.machineryRate,
        }));
        yield put(fetchMachinerySuccess(machineryList));
    } catch (e) {
        yield put(fetchMachineryFailure(e.message));
    }
}

export function* machinerySaga() {
    yield takeLatest(FETCH_MACHINERY_REQUEST, fetchMachinerySaga);
}
