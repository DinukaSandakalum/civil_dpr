import { FETCH_LABOUR_REQUEST, FETCH_LABOUR_SUCCESS, FETCH_LABOUR_FAILURE } from '../../actions/actionTypes';

const initialState = {
    loading: false,
    labourList: [],
    error: '',
};

const labourReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_LABOUR_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case FETCH_LABOUR_SUCCESS:
            return {
                loading: false,
                labourList: action.payload,
                error: '',
            };
        case FETCH_LABOUR_FAILURE:
            return {
                loading: false,
                labourList: [],
                error: action.payload,
            };
        default:
            return state;
    }
};

export default labourReducer;
