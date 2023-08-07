import Navbar from "./Navbar";

export default function VideoPage({video}){

    return (
        <>
            <Navbar />
            <div className="videopage">
                {video ? 'video'
                :
                <main className="videopage-unavailable">
                    
                    <h1>Este vídeo não está mais disponível</h1>
                    
                </main>
                }
            </div>
        </>
    );
}