import { FETCH_MATERIAL_REQUEST, FETCH_MATERIAL_SUCCESS, FETCH_MATERIAL_FAILURE } from '../../actions/actionTypes';

const initialState = {
    loading: false,
    materialList: [],
    error: '',
};

const materialReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_MATERIAL_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case FETCH_MATERIAL_SUCCESS:
            return {
                loading: false,
                materialList: action.payload,
                error: '',
            };
        case FETCH_MATERIAL_FAILURE:
            return {
                loading: false,
                materialList: [],
                error: action.payload,
            };
        default:
            return state;
    }
};

export default materialReducer;
