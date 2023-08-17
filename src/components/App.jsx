import VideoPage from "./VideoPage";

export default function App() {

  const videoTeste= {
    id: 'LlMKAh438nA',
    snippet: {
      title: 'Mariza canta "Foi Deus" no palco do Parque Eduardo VII e Papa Francisco aplaude',
      channelTitle: 'Observador',
      publishedAt: "2023-08-03T17:51:14Z",
      description: 'Fez-se silêncio para ouvir cantar o fado. Mariza subiu ao palco do Parque Eduardo VII com o tema "Foi Deus". No final, o Papa aplaudiu sorridente e fez um sinal de aprovação com o polegar.',
      subscribed: '214 mil inscritos',
      likes: '9,3 mil',
      views: '501 mil visualizações'
    }
  };

  return (
    <>
      <VideoPage video={videoTeste}/>
    </>
  )
}
