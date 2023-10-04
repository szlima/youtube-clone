import {
    LOAD_VIDEOPAGE_START, LOAD_VIDEOPAGE_SUCCESS, LOAD_VIDEOPAGE_ERROR
} from '../actions/actionTypes';

const initialState= {
    loadingVideo: false,    
    errorVideo: '',
    video: null
};

export default function videopageReducer(state=initialState, action){

    switch(action.type){
        case LOAD_VIDEOPAGE_START:
            return {
                ...state,
                loadingVideo: true,
                errorVideo: '',
                video: null
            };

        case LOAD_VIDEOPAGE_SUCCESS:
            return {
                ...state,
                loadingVideo: false,
                errorVideo: '',
                video: action.payload.video
            };

        case LOAD_VIDEOPAGE_ERROR:
            return {
                ...state,
                loadingVideo: false,
                errorVideo: action.payload.msg,
                video: null
            };

        default:
            return state;
    }
};