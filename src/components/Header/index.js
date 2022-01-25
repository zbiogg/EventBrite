
import  './Header.css'

function Header() {
    return (
        <div>
            <div className="search-box">
                hi
            </div>
            <div className="container-fluid header">
                <div className="row">
                    <div className="col">
                        <div className="row">
                            <span className="col-md-3 text-center align-middle">
                                <a className="nav-logo" href="#">
                                    <img className="logo-header" src="../../img/logo.png" /></a></span>
                            <div className="col-md-7 search-nav" >
                                <img className="search-icon" src="../../img/icons/search.png" />
                                Click to search
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <ul className="header-nav justify-content-end">
                            <li className="item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Organize
                                </a>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <a className="dropdown-item" href="#">Why Yamemoim?</a>
                                    <a className="dropdown-item" href="#">Pricing</a>
                                </div>
                            </li>
                            <li className="item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Help
                                </a>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <a className="dropdown-item" href="#">Action</a>
                                    <a className="dropdown-item" href="#">Another action</a>
                                </div>
                            </li>
                            <li className="item create-event"><a href="#" className="nav-link" role="button">Create an event</a></li>
                            <li className="item"><a className="nav-link" role="button" href="#">Sign in</a></li>
                        </ul>
                    </div>
                </div>
            </div>





        </div>
    );
}

export default Header;
