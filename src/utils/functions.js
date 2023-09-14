import axios from 'axios';
import {KEY_API_YOUTUBE} from '../data/keys';
import {
    HTTP_COMMENTS, HTTP_SEARCH,
    HTTP_CHANNELS, HTTP_VIDEOS,
    HTTP_VIDEO_CATEGORIES,
    URL_WATCH_VIDEO, URL_CHANNEL
} from './urls';

export const getInfoDate= _initialDate => {
    const initialDate= new Date(_initialDate);
    const currentDate= new Date();

    const getDiff= divider => Math.floor((currentDate-initialDate) / divider);
    
    const getDiffMinutes= () => getDiff(1000 * 60);
    const getDiffHours= () => getDiff(1000 * 60 * 60);
    const getDiffDays= () => getDiff(1000 * 60 * 60 * 24);
    const getDiffMonths= () => getDiff(1000 * 60 * 60 * 24 * 30);
    const getDiffYears= () => getDiff(1000 * 60 * 60 * 24 * 30 * 12);
    
    return getDiffYears() > 0 ?        
        `há ${getDiffYears()} ano${getDiffYears()>1? 's' : ''}` :
        getDiffMonths() > 0 ?
            `há ${getDiffMonths()} ${getDiffMonths()>1 ? 'meses' : 'mês'}` :
            getDiffDays() > 0 ?
                `há ${getDiffDays()} dia${getDiffDays()>1 ? 's' : ''}` :
                getDiffHours() > 0 ?
                    `há ${getDiffHours()} hora${getDiffHours()>1 ? 's' : ''}` :
                    getDiffMinutes() > 0 ?
                        `há ${getDiffMinutes()} minuto${getDiffMinutes()>1 ? 's' : ''}` :
                        'há poucos segundos';
};

export const getInfoViews= totalViews => {

    const getFloorViews= measure => Math.floor(totalViews/measure);

    const billionViews= (() => getFloorViews(1000000000))();
    const millionViews= (() => getFloorViews(1000000))();
    const thousandViews= (() => getFloorViews(1000))();

    return billionViews >= 1 ?
        `${billionViews} bi de visualizações` :
        millionViews >= 1 ?
            `${millionViews} mi de visualizações` :
            thousandViews >= 1 ?
                `${thousandViews} mil visualizações` :
                `${totalViews} visualizaç${totalViews==1 ? 'ão' : 'ões'}`;

};

export const getInfoDuration= duration => {

    const getPartsTime= (complete, designator) => {
        const index= complete.search(designator);

        return index === -1 ?
            {
                currentPart: "",
                finalPart: complete
            } :
            {
                currentPart: complete.slice(0, index),
                finalPart: complete.slice(index+1)
            };
    };

    const getInfoTime= () => {

        const {currentPart:hours, finalPart:afterHours}= getPartsTime(duration.replace("PT", ""), "H");
        const {currentPart:minutes, finalPart:afterMinutes}= getPartsTime(afterHours, "M");
        const {currentPart:seconds,}= getPartsTime(afterMinutes, "S");

        return (hours ? `${hours}:` : '') +
            (hours && minutes < 10 ? '0' : '') +
            (minutes ? `${minutes}:` : '0:') +
            (seconds < 10 ? '0' : '') +
            (seconds ? seconds : '0');
    };

    return duration ?
        duration.startsWith("PT") ? getInfoTime() : "+24:00:00"
        : "";
}

export const getCommentsList= async videoId => {
    
    return await axios.get(HTTP_COMMENTS + new URLSearchParams({
        key: KEY_API_YOUTUBE,
        part: 'snippet,replies',
        videoId,
        maxResults: 10,
        order: 'relevance',
        textFormat:'plainText'
    })).then(res => res.data)
        .catch(err => console.error(err));
};

export const getRelatedVideosList= async tags => {

    return await axios.get(HTTP_SEARCH + new URLSearchParams({
        key: KEY_API_YOUTUBE,
        part: 'snippet',
        maxResults: 10,
        regionCode: 'BR',
        type: 'video',
        q: tags.reduce(
            (total, currentValue) =>
            total.concat('|', currentValue)
        )
    })).then(res => res.data)
    .catch(err => console.error(err));
}

export const getChannelData= async channelId => {

    return await axios.get(HTTP_CHANNELS + new URLSearchParams({
        key: KEY_API_YOUTUBE,
        part: 'snippet',
        id: channelId,
        maxResults: 1
    })).then(res => res.data.items[0])
    .catch(err => console.error(err));
};

export const getVideoData= async videoId => {

    return await axios.get(HTTP_VIDEOS + new URLSearchParams({
        key: KEY_API_YOUTUBE,
        part: 'contentDetails, statistics',
        id: videoId,
        maxResults: 1
    })).then(res => res.data.items[0])
    .catch(err => console.error(err));
};

export const getVideoCategories= async () => {

    return await axios.get(HTTP_VIDEO_CATEGORIES + new URLSearchParams({
        key: KEY_API_YOUTUBE,
        part: 'snippet',
        regionCode: 'BR',
        hl: 'pt'
    })).then(res => res.data.items)
    .catch(err => console.error(err));
};

export const getURLVideo= videoId => URL_WATCH_VIDEO.concat(videoId);

export const getURLChannel= channelId => URL_CHANNEL.concat(channelId);