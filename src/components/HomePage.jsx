import Navbar from './Navbar';

export default function HomePage(){

    return (
        <>
            <Navbar />
            
            <div className='homepage'>
                <nav className='homepage-navbar'>
                    <div className='homepage-navbar-section'>
                        <div className='homepage-navbar-section-option'>
                            <ion-icon name="home-sharp"></ion-icon>
                            <p>Início</p>
                        </div>
                        <div className='homepage-navbar-section-option'>
                            <ion-icon name="caret-forward-circle-outline"></ion-icon>
                            <p>Shorts</p>
                        </div>
                        <div className='homepage-navbar-section-option'>
                            <ion-icon name="play"></ion-icon>
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
                        login
                    </div>
                    <div className='homepage-navbar-section'>
                        explorar
                    </div>
                    <div className='homepage-navbar-section'>
                        procurar
                    </div>
                    <div className='homepage-navbar-section'>
                        mais
                    </div>
                    <div className='homepage-navbar-section'>
                        configurações
                    </div>
                    <div className='homepage-navbar-section'>
                        sobre
                    </div>
                </nav>
                <main className='homepage-main'>
                    main
                </main>
            </div>
        </>
    );
}