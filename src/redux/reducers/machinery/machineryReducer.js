import { FETCH_MACHINERY_REQUEST, FETCH_MACHINERY_SUCCESS, FETCH_MACHINERY_FAILURE } from '../../actions/actionTypes';

const initialState = {
    loading: false,
    machineryList: [],
    error: '',
};

const machineryReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_MACHINERY_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case FETCH_MACHINERY_SUCCESS:
            return {
                loading: false,
                machineryList: action.payload,
                error: '',
            };
        case FETCH_MACHINERY_FAILURE:
            return {
                loading: false,
                machineryList: [],
                error: action.payload,
            };
        default:
            return state;
    }
};

export default machineryReducer;
