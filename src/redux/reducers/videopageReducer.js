import {
    LOAD_VIDEOPAGE_START, LOAD_VIDEOPAGE_SUCCESS, LOAD_VIDEOPAGE_ERROR
} from '../actions/actionTypes';

const initialState= {
    loadingVideo: false,    
    errorVideo: '',
    video: null,
    channelData: null,
    comments: null,
    relatedVideos: null
};

export default function videopageReducer(state=initialState, action){

    switch(action.type){
        case LOAD_VIDEOPAGE_START:
            return {
                ...state,
                loadingVideo: true,
                errorVideo: '',
                video: null,
                channelData: null,
                comments: null,
                relatedVideos: null
            };

        case LOAD_VIDEOPAGE_SUCCESS:
            return {
                ...state,
                loadingVideo: false,
                errorVideo: '',
                video: action.payload.video,
                channelData: action.payload.channelData,
                comments: action.payload.comments,
                relatedVideos: action.payload.relatedVideos
            };

        case LOAD_VIDEOPAGE_ERROR:
            return {
                ...state,
                loadingVideo: false,
                errorVideo: action.payload.msg,
                video: null,
                channelData: null,
                comments: null,
                relatedVideos: null
            };

        default:
            return state;
    }
};