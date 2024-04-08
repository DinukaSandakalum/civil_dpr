import { FETCH_WORK_ITEM_REQUEST, FETCH_WORK_ITEM_SUCCESS, FETCH_WORK_ITEM_FAILURE } from '../../actions/actionTypes';

const initialState = {
    loading: false,
    workItemList: [],
    error: '',
};

const workItemReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_WORK_ITEM_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case FETCH_WORK_ITEM_SUCCESS:
            return {
                loading: false,
                workItemList: action.payload,
                error: '',
            };
        case FETCH_WORK_ITEM_FAILURE:
            return {
                loading: false,
                workItemList: [],
                error: action.payload,
            };
        default:
            return state;
    }
};

export default workItemReducer;
