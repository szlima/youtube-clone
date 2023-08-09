import Navbar from "./Navbar";

export default function VideoPage({video}){

    return (
        <>
            <Navbar />
            <div className="videopage">
                {video ?
                    <div className="videopage-available">
                        <main className="videopage-available-player">
                            <div className="videopage-available-player-video">

                                <h1>{video.snippet.title}</h1>
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