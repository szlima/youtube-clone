import VideoPage from "./VideoPage";

export default function App() {

  const videoTeste= {
    id: 'LlMKAh438nA',
    snippet: {
      title: 'Mariza canta "Foi Deus" no palco do Parque Eduardo VII e Papa Francisco aplaude'
    }
  };

  return (
    <>
      <VideoPage video={videoTeste}/>
    </>
  )
}
