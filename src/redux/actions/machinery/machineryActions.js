import { FETCH_MACHINERY_REQUEST, FETCH_MACHINERY_SUCCESS, FETCH_MACHINERY_FAILURE } from '../actionTypes';

export const fetchMachineryRequest = () => ({
    type: FETCH_MACHINERY_REQUEST,
});

export const fetchMachinerySuccess = (boqList) => ({
    type: FETCH_MACHINERY_SUCCESS,
    payload: boqList,
});

export const fetchMachineryFailure = (error) => ({
    type: FETCH_MACHINERY_FAILURE,
    payload: error,
});