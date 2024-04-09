import {
    FETCH_WORK_SUMMARY_REQUEST, FETCH_WORK_SUMMARY_SUCCESS, FETCH_WORK_SUMMARY_FAILURE
} from '../actionTypes';

export const fetchWorkSummaryRequest = (payload) => ({
    type: FETCH_WORK_SUMMARY_REQUEST,
    payload: payload,
});

export const fetchWorkSummarySuccess = (workSummaryList) => ({
    type: FETCH_WORK_SUMMARY_SUCCESS,
    payload: workSummaryList,
});

export const fetchWorkSummaryFailure = (error) => ({
    type: FETCH_WORK_SUMMARY_FAILURE,
    payload: error,
});