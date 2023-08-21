
import {getInfoDate} from '../utils/functions';

export default function CompactVideo(){

    const video= {
        title: 'Hino Oficial | JMJ Lisboa 2023 | Vídeo Oficial',
        channel: 'Lisboa 2023',
        views: '1 mi de visualizações',
        publishedAt: '2021-08-03T17:51:14Z',
        videoLength: '5:58'
    };
    
    return (
       <>
        <div className='compact-video'>
            <div className='compact-video-img'>
                <div className='image'></div>
                <span className='compact-video-img-duration'>{video.videoLength}</span>
            </div>
            <div className='compact-video-info'>
                <div className='compact-video-info-logo'></div>
                <div className='compact-video-info-text'>
                                      
                </div>
                <ion-icon name="ellipsis-vertical-outline"></ion-icon>
            </div>
        </div>
       </>
    );
};