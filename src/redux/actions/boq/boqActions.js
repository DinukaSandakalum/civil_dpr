import { FETCH_BOQ_REQUEST, FETCH_BOQ_SUCCESS, FETCH_BOQ_FAILURE } from '../actionTypes';

export const fetchBoqRequest = () => ({
    type: FETCH_BOQ_REQUEST,
});

export const fetchBoqSuccess = (boqList) => ({
    type: FETCH_BOQ_SUCCESS,
    payload: boqList,
});

export const fetchBoqFailure = (error) => ({
    type: FETCH_BOQ_FAILURE,
    payload: error,
});
