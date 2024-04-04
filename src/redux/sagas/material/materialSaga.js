import { call, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import { fetchMaterialRequest, fetchMaterialSuccess, fetchMaterialFailure } from '../../actions/material/materialActions';
import { FETCH_MATERIAL_REQUEST } from '../../actions/actionTypes';

function fetchMaterialApi() {

    const requestBody = {
        requestBody: {},
        requestHeader: {
            requestId: "1676541979935",
            timestamp: "2023-02-16T10:06:17.152Z",
            channel: "dpr-ui",
            userId: "10"
        }
    };

    return axios.post('http://localhost:8085/civil/dpr/api/v1.0/ui-manager/material/list', requestBody)
        .then(response => response.data)
        .catch(error => { throw error; });
}

function* fetchMaterialSaga() {
    try {
        const response = yield call(fetchMaterialApi);
        const materialList = response.responseBody.map(item => ({
            materialName: item.materialName,
            materialUom: item.uom,
            materialRate: item.materialRate,
        }));
        yield put(fetchMaterialSuccess(materialList));
    } catch (e) {
        yield put(fetchMaterialFailure(e.message));
    }
}

export function* materialSaga() {
    yield takeLatest(FETCH_MATERIAL_REQUEST, fetchMaterialSaga);
}
