import { FETCH_LABOUR_REQUEST, FETCH_LABOUR_SUCCESS, FETCH_LABOUR_FAILURE } from '../actionTypes';

export const fetchLabourRequest = () => ({
    type: FETCH_LABOUR_REQUEST,
});

export const fetchLabourSuccess = (boqList) => ({
    type: FETCH_LABOUR_SUCCESS,
    payload: boqList,
});

export const fetchLabourFailure = (error) => ({
    type: FETCH_LABOUR_FAILURE,
    payload: error,
});