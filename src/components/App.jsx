import VideoPage from "./VideoPage";

export default function App() {

  const videoTeste= {
    id: 'LlMKAh438nA',
    snippet: {
      title: 'Mariza canta "Foi Deus" no palco do Parque Eduardo VII e Papa Francisco aplaude',
      channelTitle: 'Observador',
      subscribed: '214 mil inscritos'
    }
  };

  return (
    <>
      <VideoPage video={videoTeste}/>
    </>
  )
}
