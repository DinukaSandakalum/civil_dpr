import { FETCH_BOQ_REQUEST, FETCH_BOQ_SUCCESS, FETCH_BOQ_FAILURE } from '../../actions/actionTypes';

const initialState = {
    loading: false,
    boqList: [],
    error: '',
};

const boqReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_BOQ_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case FETCH_BOQ_SUCCESS:
            return {
                loading: false,
                boqList: action.payload,
                error: '',
            };
        case FETCH_BOQ_FAILURE:
            return {
                loading: false,
                boqList: [],
                error: action.payload,
            };
        default:
            return state;
    }
};

export default boqReducer;
