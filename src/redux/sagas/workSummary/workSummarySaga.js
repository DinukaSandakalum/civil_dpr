import { call, put, takeLatest } from 'redux-saga/effects';
import { createWorkSummarySuccess, createWorkSummaryFailure } from '../../actions/workSummary/workSummaryActions';
import {CREATE_WORK_SUMMARY_REQUEST} from "../../actions/actionTypes";
import axios from 'axios';

function* createWorkSummary(action) {
    console.log("create work summary: ", action);
    try {
        const response = yield call(axios.post, 'http://localhost:8085/civil/dpr/api/v1.0/ui-manager/worksummary/create',
            action.payload,
            {
            headers: { 'Content-Type': 'application/json' }
        });
        yield put(createWorkSummarySuccess(response.data));
    } catch (error) {
        yield put(createWorkSummaryFailure(error.message));
    }
}

export function* workSummarySaga() {
    yield takeLatest(CREATE_WORK_SUMMARY_REQUEST, createWorkSummary);
}