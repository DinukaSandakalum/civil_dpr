import { FETCH_WORK_ITEM_REQUEST, FETCH_WORK_ITEM_SUCCESS, FETCH_WORK_ITEM_FAILURE } from '../actionTypes';

export const fetchWorkItemRequest = () => ({
    type: FETCH_WORK_ITEM_REQUEST,
});

export const fetchWorkItemSuccess = (workItemList) => ({
    type: FETCH_WORK_ITEM_SUCCESS,
    payload: workItemList,
});

export const fetchWorkItemFailure = (error) => ({
    type: FETCH_WORK_ITEM_FAILURE,
    payload: error,
});