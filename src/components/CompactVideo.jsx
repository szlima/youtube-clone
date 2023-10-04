import {useState, useEffect} from 'react';
import {connect} from 'react-redux';

import {loadVideopageAction} from '../redux/actions/actionCreators';

import {
    getInfoDate, getInfoViews,
    getInfoDuration, getVideoData,
    getChannelData, getURLChannel
} from '../utils/functions';

function CompactVideo({video, id, loadVideopage}){
    const [videoData, setVideoData]= useState(null);
    const [channelData, setChannelData]= useState(null);

    useEffect(() => {
        getVideoData(id)
            .then(res => setVideoData(res))
            .catch(err => console.error(err));

        getChannelData(video.snippet.channelId)
            .then(res => setChannelData(res))
            .catch(err => console.error(err));
    }, []);
    
    return (
        <>
            <div className='compact-video'>
                <div onClick={() => loadVideopage(id)} className='compact-video-img'>
                    <img className='image' src={video.snippet.thumbnails.high.url}/>
                    <span className='compact-video-img-duration'>{getInfoDuration(videoData?.contentDetails.duration)}</span>
                </div>
                <div className='compact-video-info'>
                    <a href={getURLChannel(video.snippet.channelId)}>
                        <img className='compact-video-info-logo' src={channelData?.snippet.thumbnails.default.url}/>
                    </a>
                    <div className='compact-video-info-text'>
                        <p onClick={() => loadVideopage(id)} className='compact-video-info-text-title'>{video.snippet.title}</p>
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

const mapDispatchToProps= dispatch => ({
    loadVideopage: videoId => dispatch(loadVideopageAction(videoId))
});

export default connect(null, mapDispatchToProps)(CompactVideo);