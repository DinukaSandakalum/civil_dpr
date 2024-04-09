import {
    CREATE_WORK_SUMMARY_REQUEST,
    CREATE_WORK_SUMMARY_SUCCESS,
    CREATE_WORK_SUMMARY_FAILURE
} from '../actionTypes';

export const createWorkSummaryRequest = (payload) => ({
    type: CREATE_WORK_SUMMARY_REQUEST,
    payload: payload,
});

export const createWorkSummarySuccess = () => ({
    type: CREATE_WORK_SUMMARY_SUCCESS
});

export const createWorkSummaryFailure = (error) => ({
    type: CREATE_WORK_SUMMARY_FAILURE,
    payload: error,
});
