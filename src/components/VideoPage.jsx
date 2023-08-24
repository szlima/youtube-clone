import Youtube from 'react-youtube';
import Navbar from "./Navbar";
import Comment from './Comment';
import CompactVideo from './CompactVideo';

import {
    getInfoDate, getCommentsList, getRelatedVideosList
} from '../utils/functions';

import {useState, useEffect} from 'react';

export default function VideoPage({video}){
    const [comments, setComments]= useState(null);
    const [relatedVideos, setRelatedVideos]= useState(null);

    const youtubeStyle= {
        paddingBottom: 'calc( 100% / (16/9) )' //aspect ratio
    };

    useEffect(() => {
        getCommentsList(video.id)
            .then(res => setComments(res))
            .catch(err => console.error(err));

        getRelatedVideosList(video.snippet.tags)
            .then(res => setRelatedVideos(res))
            .catch(err => console.error(err));
    }, []);

    return (
        <>
            <Navbar />
            <div className="videopage">
                {video ?
                    <div className="videopage-available">
                        <main className="videopage-available-player">
                            <div className="videopage-available-player-video">
                                <Youtube className='youtube'
                                    videoId={video.id}
                                    style={youtubeStyle}
                                />
                                <h1>{video.snippet.title}</h1>
                            </div>
                            <div className="videopage-available-player-metadata">
                                <div className="videopage-available-player-metadata-actions">
                                    <div className='action-buttons'>
                                        <div className='channel-data'>
                                            <div className='channel-data-logo'></div>
                                            <div className='channel-data-info'>
                                                <a href='#' className='channel-data-info-name'>{video.snippet.channelTitle}</a>
                                                <span className='channel-data-info-subscribed'>{video.snippet.subscribed}</span>
                                            </div>
                                        </div>
                                        <div className='channel-subscription'>
                                            <button>Inscrever-se</button>
                                        </div>
                                    </div>
                                    <div className='action-buttons'>
                                        <div className='action-buttons-wrap'>
                                            <div className='video-likes'>
                                                <ion-icon name="thumbs-up-outline"></ion-icon>
                                                <span>{video.snippet.likes}</span>
                                            </div>
                                            <ion-icon name="thumbs-down-outline"></ion-icon>
                                        </div>
                                        <div className='action-buttons-wrap'>
                                            <ion-icon name="arrow-redo-outline"></ion-icon>
                                            <span>Compartilhar</span>
                                        </div>
                                        <div className='action-buttons-wrap'>
                                            <ion-icon name="ellipsis-horizontal-outline"></ion-icon>
                                        </div>
                                    </div>
                                </div>
                                <div className='videopage-available-player-metadata-description'>
                                    <div className='description-views'>
                                        <span className='views'>{video.snippet.views}</span>
                                        <span className='published-at'>{getInfoDate(video.snippet.publishedAt)}</span>
                                    </div>
                                    <div className='description-text'>
                                        <span className='description'>{video.snippet.description}</span>
                                        <span className='show-more'>Mostrar mais</span>
                                    </div>
                                </div>
                            </div>
                            <div className='videopage-available-player-comments'>
                                <div className={`videopage-available-player-comments-wrap ${comments?.pageInfo.totalResults > 0 ? '' : 'no-comment-list'}`}>
                                    <div className='videopage-available-player-comments-header'>
                                        <span className='total-comments'>Comentários<span className='total-comments-number'>{video.snippet.comments}</span></span>
                                        <span className='expand-comments'>
                                            <ion-icon name="chevron-expand-outline"></ion-icon>
                                        </span>
                                        <span className='sorting-comments'>
                                            <ion-icon name="filter-outline"></ion-icon>
                                            <span className='sorting-comments-text'>Ordenar por</span>
                                        </span>
                                    </div>
                                    <div className='videopage-available-player-comments-new'>
                                        <ion-icon name="person-circle-outline"></ion-icon>
                                        <input type='text' placeholder='Adicione um comentário...'/>
                                    </div>
                                    <div className='videopage-available-player-comments-list'>
                                        {
                                            comments?.items.map(value => <Comment comment={value} key={value.id}/>)
                                        }
                                    </div>
                                </div>
                            </div>
                        </main>
                        <nav className="videopage-available-related">
                            {
                                relatedVideos?.items.map(value => {
                                    if(value.id.videoId === video.id)
                                        return;
                                    return <CompactVideo video={value} key={value.id.videoId}/>;
                                })
                            }
                        </nav>
                    </div>
                :
                    <main className="videopage-unavailable">
                        <img src='../src/img/unavailable_video.png' alt='Vídeo não encontrado'/>
                        <h1>Este vídeo não está mais disponível</h1>
                        <button>Ir para a página inicial</button>
                    </main>
                }
            </div>
        </>
    );
}