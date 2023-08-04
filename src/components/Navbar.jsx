
export default function Navbar(){

    return (
        <>
            <nav className="navbar">
                <div className='navbar-toggle'>
                    <ion-icon name="menu-outline"></ion-icon>
                    <img src='../src/img/logo.png' alt='Logo do Youtube'/>
                </div>

                <div className='navbar-search'>
                    <div className='navbar-search-text'>
                        <input type='text' placeholder='Pesquisar'/>
                        <ion-icon name="search-outline"></ion-icon>
                    </div>
                    <ion-icon name="mic-outline"></ion-icon>
                </div>

                <div className='navbar-user'>
                    <ion-icon name="ellipsis-vertical-outline"></ion-icon>
                    <button>
                        <ion-icon name="person-circle-outline"></ion-icon>
                        <span>Fazer login</span>
                    </button>
                </div>
            </nav>
        </>
    );
}