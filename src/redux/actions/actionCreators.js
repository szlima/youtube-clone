import {
    LOAD_FEED_START, LOAD_FEED_SUCCESS, LOAD_FEED_ERROR,
    LOAD_VIDEOPAGE_START, LOAD_VIDEOPAGE_SUCCESS, LOAD_VIDEOPAGE_ERROR
} from './actionTypes';

import {
    UNAVAILABLE_PAGE, UNAVAILABLE_VIDEO
} from './actionMessages';

import {
    getFeedHomepage, getVideoData
} from '../../utils/functions';

const loadFeedStart= () => ({
    type: LOAD_FEED_START
});

const loadFeedSuccess= ({tagsFilter, ...videosFeed}) => ({
    type: LOAD_FEED_SUCCESS,
    payload: {
        tagsFilter,
        videosFeed
    }
});

const loadFeedError= () => ({
    type: LOAD_FEED_ERROR,
    payload: {
        msg: UNAVAILABLE_PAGE
    }
});

export const loadFeedAction= () => {
    return dispatch => {

        dispatch(loadFeedStart());

        getFeedHomepage()
            .then(([
                tagsFilter, popularVideos, newsVideos,
                sportsVideos, musicVideos
            ]) => dispatch(loadFeedSuccess({
                tagsFilter, popularVideos, newsVideos,
                sportsVideos, musicVideos
            })))
            .catch(() => dispatch(loadFeedError()));
    };
};

const loadVideopageStart= () => ({
    type: LOAD_VIDEOPAGE_START
});

const loadVideopageSuccess= video => ({
    type: LOAD_VIDEOPAGE_SUCCESS,
    payload: {
        video
    }
});

const loadVideopageError= () => ({
    type: LOAD_VIDEOPAGE_ERROR,
    payload: {
        msg: UNAVAILABLE_VIDEO
    }
});

export const loadVideopageAction= videoId => {
    return dispatch => {

        dispatch(loadVideopageStart());

        getVideoData(videoId)
            .then(res => dispatch(loadVideopageSuccess(res)))
            .catch(() => dispatch(loadVideopageError()));
    };
};