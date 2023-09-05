import {useState, useEffect} from 'react';

import {
    getInfoDate, getInfoViews,
    getInfoDuration, getVideoData,
    getURLVideo, getURLChannel
} from '../utils/functions';

export default function CompactVideo({video}){
    const [videoData, setVideoData]= useState(null);

    useEffect(() => {
        getVideoData(video.id.videoId)
            .then(res => setVideoData(res))
            .catch(err => console.error(err));
    }, []);
    
    return (
        <>
            <a href={getURLVideo(video.id.videoId)} className='compact-video'>
                <div className='compact-video-img'>
                    <img className='image' src={video.snippet.thumbnails.high.url}/>
                    <span className='compact-video-img-duration'>{getInfoDuration(videoData?.contentDetails.duration)}</span>
                </div>
                <div className='compact-video-info'>
                    <div className='compact-video-info-logo'></div>
                    <div className='compact-video-info-text'>
                        <a href={getURLVideo(video.id.videoId)} className='compact-video-info-text-title'>{video.snippet.title}</a>
                        <div className='compact-video-info-text-data'>
                            <a href={getURLChannel(video.snippet.channelId)} className='compact-video-info-text-data-channel'>{video.snippet.channelTitle}</a>
                            <span className='compact-video-info-text-data-info'>
                                <span className='compact-video-info-text-data-info-views'>{getInfoViews(videoData?.statistics.viewCount)}</span>
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