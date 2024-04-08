import { FETCH_USER_REQUEST, FETCH_USER_SUCCESS, FETCH_USER_FAILURE } from '../actionTypes';

export const fetchUserRequest = (userName, password) => ({
    type: FETCH_USER_REQUEST,
    payload: { userName, password },
});

export const fetchUserSuccess = (user) => ({
    type: FETCH_USER_SUCCESS,
    payload: user,
});

export const fetchUserFailure = (error) => ({
    type: FETCH_USER_FAILURE,
    payload: error,
});