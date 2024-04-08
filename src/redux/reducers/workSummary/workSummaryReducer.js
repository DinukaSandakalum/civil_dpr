import { CREATE_WORK_SUMMARY_REQUEST, CREATE_WORK_SUMMARY_SUCCESS, CREATE_WORK_SUMMARY_FAILURE } from '../../actions/actionTypes';

const initialState = {
    loading: false,
    workSummary: [],
    error: '',
};

const workSummaryReducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_WORK_SUMMARY_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case CREATE_WORK_SUMMARY_SUCCESS:
            return {
                loading: false,
                workSummary: action.payload,
                error: '',
            };
        case CREATE_WORK_SUMMARY_FAILURE:
            return {
                loading: false,
                workSummary: null,
                error: action.payload,
            };
        default:
            return state;
    }
};

export default workSummaryReducer;
