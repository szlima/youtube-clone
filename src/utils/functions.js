import axios from 'axios';
import {KEY_API_YOUTUBE} from '../data/keys';
import {
    HTTP_COMMENTS, HTTP_SEARCH,
    HTTP_CHANNELS, HTTP_VIDEOS,
    HTTP_VIDEO_CATEGORIES, URL_CHANNEL
} from './urls';

export const getFeedHomepage= async () => {

    const tagsFilter= getVideoCategories();
    const popularVideos= getVideos(6, 0);
    const newsVideos= getVideos(3, 25);
    const sportsVideos= getVideos(3, 17);
    const musicVideos= getVideos(3, 10);

    return Promise.all([
        tagsFilter, popularVideos, newsVideos,
        sportsVideos, musicVideos
    ]).then(res => {
        if(res.some(p => (!p | (!p.length && p!=tagsFilter))))
            throw new Error('Ocorreu um erro na resolução das Promises.');
        return res;
    });
};

export const getCompactVideoData= async (videoId, channelId) => {

    const videoData= getVideoData(videoId);
    const channelData= getChannelData(channelId);

    return Promise.all([
        videoData, channelData
    ]).then(res => {
        if(res.some(p => !p))
            throw new Error('Ocorreu um erro na resolução das Promises.');
        return res;
    });
};

export const getFullVideoData= async videoId => {

    const video= await getVideoData(videoId);

    const channelData= getChannelData(video.snippet.channelId);
    const comments= getCommentsList(videoId);
    const relatedVideos= getRelatedVideosList(video.snippet.tags);

    return Promise.all([
        channelData, comments, relatedVideos
    ]).then(res => {
        if(res.some(p => !p))
            throw new Error('Não foi possível carregar todos os dados relacionados ao vídeo.');
        return [video, ...res];
    });
};

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

export const getInfoComments= totalComments => Number(totalComments).toLocaleString();

const getInfoCount= total => {

    const getFloor= measure => Math.floor(total/measure);

    const billion= (() => getFloor(1000000000))();
    const million= (() => getFloor(1000000))();
    const thousand= (() => getFloor(1000))();

    return billion >= 1 ?
        `${billion} bi` :
        million >= 1 ?
            `${million} mi` :
            thousand >= 1 ?
                `${thousand} mil` :
                `${total}`;
};

export const getInfoViews= totalViews => {

    const info= getInfoCount(totalViews);

    if(info.includes('bi') || info.includes('mi'))
        return `${info} de visualizações`;

    return `${info} visualizaç${totalViews==1 ? 'ão' : 'ões'}`;
};

export const getInfoSubscribers= totalSubscribers => {
    const info= getInfoCount(totalSubscribers);

    if(info.includes('bi') || info.includes('mi'))
        return `${info} de inscritos`;

    return `${info} inscrito${totalSubscribers==1 ? '' : 's'}`;
};

export const getInfoLikes= totalLikes => getInfoCount(totalLikes);

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
};

const getCommentsList= async videoId => {
    
    return await axios.get(HTTP_COMMENTS + new URLSearchParams({
        key: KEY_API_YOUTUBE,
        part: 'snippet,replies',
        videoId,
        maxResults: 10,
        order: 'relevance',
        textFormat:'plainText'
    })).then(res => res.data);
};

const getRelatedVideosList= async tags => {

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
    })).then(res => res.data);
}

export const getChannelData= async channelId => {

    return await axios.get(HTTP_CHANNELS + new URLSearchParams({
        key: KEY_API_YOUTUBE,
        part: 'snippet, statistics',
        id: channelId,
        maxResults: 1
    })).then(res => {
        if(!res.data.items[0])
            throw new Error('Canal não encontrado.');
        return res.data.items[0];
    });
};

const getVideoData= async videoId => {

    return await axios.get(HTTP_VIDEOS + new URLSearchParams({
        key: KEY_API_YOUTUBE,
        part: 'snippet, contentDetails, statistics',
        id: videoId,
        maxResults: 1
    })).then(res => {
        if(!res.data.items[0])
            throw new Error('Vídeo não encontrado.');
        return res.data.items[0];
    });
};

const getVideoCategories= async () => {

    return await axios.get(HTTP_VIDEO_CATEGORIES + new URLSearchParams({
        key: KEY_API_YOUTUBE,
        part: 'snippet',
        regionCode: 'BR',
        hl: 'pt'
    })).then(res => res.data.items.map(
        aux => ({
            title: aux.snippet.title.split(/(\s|\/)/)[0],
            id: aux.id
        })
    ));
};

const getVideos= async (maxResults, videoCategoryId) => {

    return await axios.get(HTTP_VIDEOS + new URLSearchParams({
          key: KEY_API_YOUTUBE,
          part: 'snippet',
          chart: 'mostPopular',
          regionCode: 'BR',
          hl: 'pt',
          maxResults,
          videoCategoryId
    })).then(res => res.data.items);
};

export const getURLChannel= channelId => URL_CHANNEL.concat(channelId);