import HomePage from "./HomePage";
import VideoPage from "./VideoPage";

export default function App() {

  const videoTeste= {
    id: 'LlMKAh438nA',
    snippet: {
      title: 'Mariza canta "Foi Deus" no palco do Parque Eduardo VII e Papa Francisco aplaude',
      channelTitle: 'Observador',
      publishedAt: "2023-08-03T17:51:14Z",
      tags: [ "JMJ", "Jornada Mundial da Juventude", "papa Francisco", "papa", "cantora Mariza", "fado", "Lisboa 2023"],
      description: 'Fez-se silêncio para ouvir cantar o fado. Mariza subiu ao palco do Parque Eduardo VII com o tema "Foi Deus". No final, o Papa aplaudiu sorridente e fez um sinal de aprovação com o polegar.',
      subscribed: '215 mil inscritos',
      likes: '10 mil',
      views: '579137',
      comments: '802',
      channelId: 'UC35F6ktZodINwjQZjuwLcjg',
      thumbnails: 'https://yt3.ggpht.com/ytc/AOPolaQdfKVrYjJfxJUASweZb613Bfg-SzTmZ3oSp6z7XOM=s88-c-k-c0x00ffffff-no-rj'
    }
  };

  return (
    <>
      {/* <VideoPage video={videoTeste}/> */}
      <HomePage />
    </>
  )
}
