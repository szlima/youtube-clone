
import {
    getInfoDate, getURLVideo, getURLChannel
} from '../utils/functions';

export default function CompactVideo({video}){

    const _video= {
        views: '1 mi de visualizações',//
        videoLength: '5:58'//
    };
    
    return (
        <>
            <a href={getURLVideo(video.id.videoId)} className='compact-video'>
                <div className='compact-video-img'>
                    <img className='image' src={video.snippet.thumbnails.high.url}/>
                    <span className='compact-video-img-duration'>{_video.videoLength}</span>
                </div>
                <div className='compact-video-info'>
                    <div className='compact-video-info-logo'></div>
                    <div className='compact-video-info-text'>
                        <a href={getURLVideo(video.id.videoId)} className='compact-video-info-text-title'>{video.snippet.title}</a>
                        <div className='compact-video-info-text-data'>
                            <a href={getURLChannel(video.snippet.channelId)} className='compact-video-info-text-data-channel'>{video.snippet.channelTitle}</a>
                            <span className='compact-video-info-text-data-info'>
                                <span className='compact-video-info-text-data-info-views'>{_video.views}</span>
                                <span className='compact-video-info-text-data-info-publishedAt'>{getInfoDate(video.snippet.publishedAt)}</span>
                            </span>
                        </div>
                    </div>
                    <ion-icon name="ellipsis-vertical-outline"></ion-icon>
                </div>
            </a>
        </>
    );
};