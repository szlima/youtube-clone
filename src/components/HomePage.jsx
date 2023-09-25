import {useState, useEffect} from 'react';
import {
    getVideoCategories, getVideos
} from '../utils/functions';

import Navbar from './Navbar';
import CompactVideo from './CompactVideo';

export default function HomePage(){
    const [tagsFilter, setTagsFilter]= useState(null);
    const [popularVideos, setPopularVideos]= useState(null);
    const [newsVideos, setNewsVideos]= useState(null);

    useEffect(() => {
        getVideoCategories()
            .then(res => setTagsFilter(res.map(
                aux => ({
                    title: aux.snippet.title.split(/(\s|\/)/)[0],
                    id: aux.id
                })
            ))).catch(err => console.error(err));

        getVideos(6, 0)
            .then(res => setPopularVideos(res))
            .catch(err => console.error(err));

        getVideos(3, 25)
            .then(res => setNewsVideos(res))
            .catch(err => console.error(err));

    }, []);

    return (
        <>
            <Navbar />
            <div className='homepage'>
                <nav className='homepage-navbar'>
                    <div className='homepage-navbar-section'>
                        <div className='homepage-navbar-section-option active-navbar'>
                            <ion-icon name="home-sharp"></ion-icon>
                            <p>Início</p>
                        </div>
                        <div className='homepage-navbar-section-option'>
                            <ion-icon name="caret-forward-circle-outline"></ion-icon>
                            <p>Shorts</p>
                        </div>
                        <div className='homepage-navbar-section-option'>
                            <ion-icon name="play-outline"></ion-icon>
                            <p>Inscrições</p>
                        </div>
                    </div>
                    <div className='homepage-navbar-section'>
                        <div className='homepage-navbar-section-option'>
                            <ion-icon name="folder-open-outline"></ion-icon>
                            <p>Biblioteca</p>
                        </div>
                        <div className='homepage-navbar-section-option'>
                            <ion-icon name="timer-outline"></ion-icon>
                            <p>Histórico</p>
                        </div>
                    </div>
                    <div className='homepage-navbar-section'>
                        <p>Faça login para curtir vídeos, comentar e se inscrever.</p>
                        <button>
                            <ion-icon name="person-circle-outline"></ion-icon>
                            <span>Fazer login</span>
                        </button>
                    </div>
                    <div className='homepage-navbar-section'>
                        <h3>Explorar</h3>
                        <div className='homepage-navbar-section-option'>
                            <ion-icon name="flame-outline"></ion-icon>
                            <p>Em alta</p>
                        </div>
                        <div className='homepage-navbar-section-option'>
                            <ion-icon name="bag-handle-outline"></ion-icon>
                            <p>Shopping</p>
                        </div>
                        <div className='homepage-navbar-section-option'>
                            <ion-icon name="musical-note-outline"></ion-icon>
                            <p>Música</p>
                        </div>
                        <div className='homepage-navbar-section-option'>
                            <ion-icon name="videocam-outline"></ion-icon>
                            <p>Filmes</p>
                        </div>
                        <div className='homepage-navbar-section-option'>
                            <ion-icon name="radio-outline"></ion-icon>
                            <p>Ao vivo</p>
                        </div>
                        <div className='homepage-navbar-section-option'>
                            <ion-icon name="game-controller-outline"></ion-icon>
                            <p>Jogos</p>
                        </div>
                        <div className='homepage-navbar-section-option'>
                            <ion-icon name="newspaper-outline"></ion-icon>
                            <p>Notícias</p>
                        </div>
                        <div className='homepage-navbar-section-option'>
                            <ion-icon name="trophy-outline"></ion-icon>
                            <p>Esportes</p>
                        </div>
                        <div className='homepage-navbar-section-option'>
                            <ion-icon name="bulb-outline"></ion-icon>
                            <p>Aprender</p>
                        </div>
                    </div>
                    <div className='homepage-navbar-section'>
                        <div className='homepage-navbar-section-option'>
                            <ion-icon name="add-circle-outline"></ion-icon>
                            <p>Procurar canais</p>
                        </div>
                    </div>
                    <div className='homepage-navbar-section'>
                        <h3>Mais do YouTube</h3>
                        <div className='homepage-navbar-section-option'>
                            <ion-icon name="logo-youtube"></ion-icon>
                            <p>Youtube Premium</p>
                        </div>
                        <div className='homepage-navbar-section-option'>
                            <ion-icon name="logo-youtube"></ion-icon>
                            <p>Youtube Music</p>
                        </div>
                        <div className='homepage-navbar-section-option'>
                            <ion-icon name="logo-youtube"></ion-icon>
                            <p>Youtube Kids</p>
                        </div>
                    </div>
                    <div className='homepage-navbar-section'>
                        <div className='homepage-navbar-section-option'>
                            <ion-icon name="settings-outline"></ion-icon>
                            <p>Configurações</p>
                        </div>
                        <div className='homepage-navbar-section-option'>
                            <ion-icon name="flag-outline"></ion-icon>
                            <p>Histórico de denúncias</p>
                        </div>
                        <div className='homepage-navbar-section-option'>
                            <ion-icon name="help-circle-outline"></ion-icon>
                            <p>Ajuda</p>
                        </div>
                        <div className='homepage-navbar-section-option'>
                            <ion-icon name="information-circle-outline"></ion-icon>
                            <p>Enviar feedback</p>
                        </div>
                    </div>
                    <div className='homepage-navbar-section'>
                        <div className='homepage-navbar-section-option'>
                            <a href='#'>Sobre</a>
                            <a href='#'>Imprensa</a>
                            <a href='#'>Direitos autorais</a>
                            <a href='#'>Entre em contato</a>
                            <a href='#'>Criadores de conteúdo</a>
                            <a href='#'>Publicidade</a>
                            <a href='#'>Desenvolvedores</a>
                        </div>
                        <div className='homepage-navbar-section-option'>
                            <a href='#'>Termos</a>
                            <a href='#'>Privacidade</a>
                            <a href='#'>Política e segurança</a>
                            <a href='#'>Como funciona o Youtube</a>
                            <a href='#'>Testar os novos recursos</a>
                        </div>
                        <div className='homepage-navbar-section-option'>
                            <p>© 2023 Google LLC</p>
                        </div>
                    </div>
                </nav>
                <main className='homepage-main'>
                    <div className='homepage-main-filter'>
                        <div className='homepage-main-filter-set'>
                            <div key='filter-all' className='homepage-main-filter-set-option active-filter-option'>Tudo</div>
                            {
                                tagsFilter?.map(tag =>
                                    <div key={`filter-${tag.id}`} className='homepage-main-filter-set-option'>{tag.title}</div>
                                )
                            }
                        </div>
                        <ion-icon name="chevron-forward-outline"></ion-icon>
                    </div>
                    <div className='homepage-main-feed'>
                        <div className='homepage-main-feed-promo'>
                            <ion-icon name="close-outline"></ion-icon>
                            <img src='../src/img/youtube-premium1.png'/>
                            <p>Assista tudo que gosta sem anúncios</p>
                            <button>Baixe agora</button>
                        </div>
                        <div className='homepage-main-feed-videos'>
                            {
                                popularVideos?.map(value => <CompactVideo video={value} id={value.id} key={value.id}/>)
                            }
                        </div>
                        <div className='homepage-main-feed-videos videos-set-compact'>
                            {
                                newsVideos?.map(value => <CompactVideo video={value} id={value.id} key={value.id}/>)
                            }
                        </div>
                    </div>
                </main>
            </div>
        </>
    );
}