import { FETCH_MATERIAL_REQUEST, FETCH_MATERIAL_SUCCESS, FETCH_MATERIAL_FAILURE } from '../actionTypes';

export const fetchMaterialRequest = () => ({
    type: FETCH_MATERIAL_REQUEST,
});

export const fetchMaterialSuccess = (boqList) => ({
    type: FETCH_MATERIAL_SUCCESS,
    payload: boqList,
});

export const fetchMaterialFailure = (error) => ({
    type: FETCH_MATERIAL_FAILURE,
    payload: error,
});