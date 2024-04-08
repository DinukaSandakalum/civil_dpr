import { call, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import { fetchWorkItemRequest, fetchWorkItemSuccess, fetchWorkItemFailure } from '../../actions/workItem/workItemActions';
import { FETCH_WORK_ITEM_REQUEST } from '../../actions/actionTypes';

function fetchWorkItemApi() {

    const requestBody = {
        requestBody: {},
        requestHeader: {
            requestId: "1676541979935",
            timestamp: "2023-02-16T10:06:17.152Z",
            channel: "dpr-ui",
            userId: "10"
        }
    };

    return axios.post('http://localhost:8085/civil/dpr/api/v1.0/ui-manager/workitem/list', requestBody)
        .then(response => response.data)
        .catch(error => { throw error; });
}

function* fetchWorkItemSaga() {
    try {
        const response = yield call(fetchWorkItemApi);
        const workItemList = response.responseBody.map(item => ({
            workItemId: item.workItemId,
            workDescription: item.workDescription,
            plannedStartDate: item.plannedStartDate,
            plannedEndDate: item.plannedEndDate
        }));
        yield put(fetchWorkItemSuccess(workItemList));
    } catch (e) {
        yield put(fetchWorkItemFailure(e.message));
    }
}

export function* workItemSaga() {
    yield takeLatest(FETCH_WORK_ITEM_REQUEST, fetchWorkItemSaga);
}
