import {connect} from "react-redux";

import {goHomepageAction} from '../redux/actions/actionCreators'

function Navbar({goHomepage}){

    return (
        <>
            <nav className="navbar">
                <div className='navbar-toggle'>
                    <ion-icon name="menu-outline"></ion-icon>
                    <img src='../src/img/logo.png' alt='Logo do Youtube' onClick={goHomepage}/>
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
};


const mapDispatchToProps= dispatch => ({
    goHomepage: () => dispatch(goHomepageAction())
});

export default connect(null, mapDispatchToProps)(Navbar);