import {
    LOAD_FEED_START, LOAD_FEED_SUCCESS, LOAD_FEED_ERROR
} from '../actions/actionTypes';

const initialState= {
    loadingFeed: false,
    errorFeed: '',
    videosFeed: {},
    tagsFilter: []
};

export default function homepageReducer(state= initialState, action){

    switch(action.type){
        case LOAD_FEED_START:
            return {
                ...state,
                loadingFeed: true,
                errorFeed: '',
                videosFeed: {},
                tagsFilter: []
            };

        case LOAD_FEED_SUCCESS:
            return {
                ...state,
                loadingFeed: false,
                errorFeed: '',
                videosFeed: action.payload.videosFeed,
                tagsFilter: action.payload.tagsFilter
            };

        case LOAD_FEED_ERROR:
            return {
                ...state,
                loadingFeed: false,
                errorFeed: action.payload.msg,
                videosFeed: {},
                tagsFilter: []
            };
        
        default:
            return state;
    }
};