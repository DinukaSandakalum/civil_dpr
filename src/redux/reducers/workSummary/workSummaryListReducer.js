import {
    FETCH_WORK_SUMMARY_FAILURE, FETCH_WORK_SUMMARY_SUCCESS, FETCH_WORK_SUMMARY_REQUEST
} from '../../actions/actionTypes';

const initialState = {
    loading: false,
    workSummaryList: [],
    error: '',
};

const workSummaryListReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_WORK_SUMMARY_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case FETCH_WORK_SUMMARY_SUCCESS:
            return {
                loading: false,
                workSummaryList: action.payload,
                error: '',
            };
        case FETCH_WORK_SUMMARY_FAILURE:
            return {
                loading: false,
                workSummaryList: [],
                error: action.payload,
            };
        default:
            return state;
    }
};

export default workSummaryListReducer;
