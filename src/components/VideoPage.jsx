import Navbar from "./Navbar";

export default function VideoPage({video}){

    return (
        <>
            <Navbar />
            <div className="videopage">
                {video ?
                    <div className="videopage-available">
                        {video}
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