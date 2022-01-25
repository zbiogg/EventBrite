/* eslint-disable jsx-a11y/role-supports-aria-props */
/* eslint-disable jsx-a11y/anchor-is-valid */

import  './Header.css'
import more from '../../assets/icons/more.png'
import search from '../../assets/icons/search.png'
import logo from '../../assets/logo.png'
import right_arrow from '../../assets/icons/right-arrow.png'
import trending from '../../assets/icons/trending.png'
import close from '../../assets/icons/close.png'
import announcement from '../../assets/icons/announcement.png'

function showSearch(){
    var x = document.getElementById("search-box");
    x.style.display = "block";

}

function searchBoxClose(){
    var x = document.getElementById("search-box");
    x.style.display = "none";
}

function Header() {
    return (
        <div>
            <div className="search-box" id="search-box">

<div className="container-fluid d-flex justify-content-end">
    <span><img src={close} width="30px" onClick={searchBoxClose} role="button"  alt =""/></span>
</div>

<div className="row">
    <div className="col-md-6">
        <form className="search-input">
            <span><img className="search-box-icon" src={search} alt=""/></span>
            <input className="search-input-text" type="text" placeholder="Search for anything"/>
            <span><img className="search-box-icon" src={right_arrow} alt="" /></span>
        </form>
    </div>
    <div className="col-md-6 suggest-div">
        <div className="list">
            <ul className="suggest-list">
                <li className="suggest-item">
                    <div className="suggest-title">
                        <span><img src={announcement} width="15px" alt="" /></span>
                        <span className="suggest">Suggested</span> 
                    </div>
                </li>
                <li className="suggest-item"><a href="#">Online</a></li>
                <li className="suggest-item"><a href="#">Today</a></li>
                <li className="suggest-item"><a href="#">This Week</a></li>
                <li className="suggest-item"><a href="#">This month</a></li>
                <li className="suggest-item"><a href="#">Food & drink</a></li>
                <li className="suggest-item"><a href="#">Farm</a></li>
                <li className="suggest-item"><a href="#">Pet</a></li>
                <li className="suggest-item"><a href="#">Car & man</a></li>
                <li className="suggest-item"><a href="#">Game</a></li>
                <li className="suggest-item">
                    <div className="suggest-title">
                        <span><img src={trending} alt="" width="15px" style={{marginBottom: '1%'}}/></span>
                        <span className="suggest">Trending</span> 
                    </div>
                </li>
                <li className="suggest-item"><a href="#">Bitcoin</a></li>
                <li className="suggest-item"><a href="#">Dance</a></li>
                <li className="suggest-item"><a href="#">Geting over it</a></li>
                <li className="suggest-item"><a href="#">Anime</a></li>
                <li className="suggest-item"><a href="#">Genshin impact</a></li>
                <li className="suggest-item"><a href="#">Honkai impact</a></li>
            </ul>
        </div>
    </div>
</div>

</div>
<div className="container-fluid header">
<div className="row">
    <div className="col">
        <div className="row left">
            <span className="col-md-3 text-center align-middle"><a className="nav-logo" href="#"><img className="logo-header" src={logo} alt=""/></a></span>
            <div className="col" >
                <div className="search-nav" onClick={showSearch} role="button">
                    <span><img className="search-icon" src={search} alt=""/></span>
                    <span>Click to search</span>
                </div>
            </div>
        </div>  
    </div>
    <div className="col">
        <ul className="header-nav justify-content-end">
            <li className="item dropdown web">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Organize
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <a className="dropdown-item" href="#">Why Yamemoim?</a>
                    <a className="dropdown-item" href="#">Pricing</a>
                </div>
            </li>
            <li className="item dropdown web">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                   Help
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <a className="dropdown-item" href="#">Action</a>
                    <a className="dropdown-item" href="#">Another action</a>
                </div>
            </li>
            <li className="item mobile"><a><span><img role="button" onClick={showSearch} src={search} alt="" width="20px"/></span></a></li>
            <li className="item dropdown mobile">
                <a className="nav-link" href="#" id="navbarDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                   <span><img src={more} style={{width: 20}} alt=""/></span>
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <a className="dropdown-item" href="#">Organize</a>
                    <a className="dropdown-item" href="#">Help</a>
                    <a className="dropdown-item create-event" href="#">Create an event</a>
                </div>
            </li>
            <li className="item create-event web"><a href="#" className="nav-link" role="button">Create an event</a></li>
            <li className="item"><a className="nav-link" role="button" href="#">Sign in</a></li>    
        </ul>
    </div>
</div>
</div>






        </div>
    );
}

export default Header;
