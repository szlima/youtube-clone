
export default function Navbar(){

    return (
        <>
            <nav className="navbar">
                <div className='navbar-toggle'>
                    <ion-icon name="menu-outline"></ion-icon>
                    <img src='../src/img/logo.png' alt='Logo do Youtube'/>
                </div>

                


                <div className='navbar-user'>
                    <button>
                        <ion-icon name="person-circle-outline"></ion-icon>
                    </button>
                </div>
            </nav>            
        </>
    );
}