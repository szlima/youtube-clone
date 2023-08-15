import Youtube from 'react-youtube';
import Navbar from "./Navbar";

export default function VideoPage({video}){

    const youtubeStyle= {
        paddingBottom: 'calc( 100% / (16/9) )' //aspect ratio
    };

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

                                    </div>
                                </div>
                            </div>
                        </main>
                        <nav className="videopage-available-related">
                            {'nav'}
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