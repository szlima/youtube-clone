import axios from 'axios';
import {KEY_API_YOUTUBE} from '../data/keys';
import {HTTP_COMMENTS} from './urls';

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

export const getCommentsList= async videoId => {
    
    return await axios.get(HTTP_COMMENTS + new URLSearchParams({
        key: KEY_API_YOUTUBE,
        part: 'snippet,replies',
        videoId,
        maxResults: 10,
        textFormat:'plainText'
    })).then(res => res.data)
        .catch(err => console.error(err));
};