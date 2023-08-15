import VideoPage from "./VideoPage";

export default function App() {

  const videoTeste= {
    id: 'LlMKAh438nA',
    snippet: {
      title: 'Mariza canta "Foi Deus" no palco do Parque Eduardo VII e Papa Francisco aplaude',
      channelTitle: 'Observador',
      subscribed: '214 mil inscritos',
      likes: '9,3 mil'
    }
  };

  return (
    <>
      <VideoPage video={videoTeste}/>
    </>
  )
}
