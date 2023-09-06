import {useState, useEffect} from 'react';

import {
    getInfoDate, getInfoViews,
    getInfoDuration, getVideoData, getChannelData,
    getURLVideo, getURLChannel
} from '../utils/functions';

export default function CompactVideo({video}){
    const [videoData, setVideoData]= useState(null);
    const [channelData, setChannelData]= useState(null);

    useEffect(() => {
        getVideoData(video.id.videoId)
            .then(res => setVideoData(res))
            .catch(err => console.error(err));

        getChannelData(video.snippet.channelId)
            .then(res => setChannelData(res))
            .catch(err => console.error(err));
    }, []);
    
    return (
        <>
            <div className='compact-video'>
                <a href={getURLVideo(video.id.videoId)} className='compact-video-img'>
                    <img className='image' src={video.snippet.thumbnails.high.url}/>
                    <span className='compact-video-img-duration'>{getInfoDuration(videoData?.contentDetails.duration)}</span>
                </a>
                <div className='compact-video-info'>
                    <a href={getURLChannel(video.snippet.channelId)}>
                        <img className='compact-video-info-logo' src={channelData?.snippet.thumbnails.default.url}/>
                    </a>
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
            </div>
        </>
    );
};