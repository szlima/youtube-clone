import {
    LOAD_FEED_START, LOAD_FEED_SUCCESS, LOAD_FEED_ERROR
} from './actionTypes';

import {getFeedHomepage} from '../../utils/functions';

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
        msg: 'Não foi possível carregar a página'
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