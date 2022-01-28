/* eslint-disable jsx-a11y/role-supports-aria-props */
/* eslint-disable jsx-a11y/anchor-is-valid */
import './bootstrap-menu-hover.css'
import clsx from 'clsx';
import style from './Header.module.css'
import more from '../../assets/icons/more.png'
import search from '../../assets/icons/search.png'
import logo from '../../assets/logo.png'
import right_arrow from '../../assets/icons/right-arrow.png'
import trending from '../../assets/icons/trending.png'
import close from '../../assets/icons/close.png'
import announcement from '../../assets/icons/announcement.png'
import heart from '../../assets/icons/heart.png'
import plus from '../../assets/icons/plus.png'
import ticket from '../../assets/icons/ticket.png'
import userLogin from '../../assets/icons/user-signin.png'


function showSearch(){
    var x = document.getElementById("search-box");
    x.style.display = "block";
}


function searchBoxClose(){
    var x = document.getElementById("search-box");
    x.style.display = "none";
}

function signIn(){
    var x = document.getElementById("login");
    x.style.display = "block";
    var y = document.getElementById("header-normal");
    y.style.display = "none";
}

function logout(){
    var x = document.getElementById("login");
    x.style.display = "none";
    var y = document.getElementById("header-normal");
    y.style.display = "block";
}

function Header() {
    return (
        <div>
            <div className={style.searchBox} id="search-box">

                <div className={clsx('container-fluid','d-flex', 'justify-content-end')}>
                    <span><img src={close} width="30px" onClick={searchBoxClose} role="button"  alt =""/></span>
                </div>

                <div className={clsx('row')}>
                    <div className={clsx("col-md-6")}>
                        <form className={style.searchInput}>
                            <span><img className={style.searchBoxIcon} src={search} alt=""/></span>
                            <input className={style.searchInputText} type="text" placeholder="Search for anything"/>
                            <span><img className={style.searchBoxIcon} src={right_arrow} alt="" /></span>
                        </form>
                    </div>
                    <div className={clsx('col-md-6', 'suggest-div')}>
                        <div className={style.list}>
                            <ul className={style.suggestList}>
                                <li className={style.suggestItem}>
                                    <div className={style.suggestTitle}>
                                        <span><img src={announcement} width="15px" alt="" /></span>
                                        <span className={style.suggest}>Suggested</span> 
                                    </div>
                                </li>
                                <li className={style.suggestItem}><a href="#">Online</a></li>
                                <li className={style.suggestItem}><a href="#">Today</a></li>
                                <li className={style.suggestItem}><a href="#">This Week</a></li>
                                <li className={style.suggestItem}><a href="#">This month</a></li>
                                <li className={style.suggestItem}><a href="#">Food & drink</a></li>
                                <li className={style.suggestItem}><a href="#">Farm</a></li>
                                <li className={style.suggestItem}><a href="#">Pet</a></li>
                                <li className={style.suggestItem}><a href="#">Car & man</a></li>
                                <li className={style.suggestItem}><a href="#">Game</a></li>
                                <li className={style.suggestItem}>
                                    <div className={style.suggestTitle}>
                                        <span><img src={trending} alt="" width="15px" style={{marginBottom: '1%'}}/></span>
                                        <span className={style.suggest}>Trending</span> 
                                    </div>
                                </li>
                                <li className={style.suggestItem}><a href="#">Bitcoin</a></li>
                                <li className={style.suggestItem}><a href="#">Dance</a></li>
                                <li className={style.suggestItem}><a href="#">Geting over it</a></li>
                                <li className={style.suggestItem}><a href="#">Anime</a></li>
                                <li className={style.suggestItem}><a href="#">Genshin impact</a></li>
                                <li className={style.suggestItem}><a href="#">Honkai impact</a></li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
            <div className={clsx('container-fluid', style.header)} id="header">
                <div className={clsx('row')}>
                    <div className={clsx('col')}>
                        <div className={clsx('row')}>
                            <span className={clsx('col-md-3', 'text-center', 'align-middile')}><a className={style.NavLogo} href="#"><img className={style.logoHeader} src={logo} alt=""/></a></span>
                            <div className={clsx('col')} >
                                <div className={style.searchNav} onClick={showSearch} role="button">
                                    <span><img className={style.searchIcon} src={search} alt=""/></span>
                                    <span>Click to search</span>
                                </div>
                            </div>
                        </div>  
                    </div>
                    <div className={clsx('col')} id="header-normal">
                        <ul className={clsx(style.headerNav, 'justify-content-end')}>
                            <li className={clsx(style.item, 'dropdown',style.web)}>
                                <a className={clsx('nav-link', 'dropdown-toggle')} href="#" id="navbarDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Organize
                                </a>
                                <div className={clsx('dropdown-menu')} aria-labelledby="navbarDropdown">
                                    <a className={clsx('dropdown-item')} href="#">Why Yamemoim?</a>
                                    <a className={clsx('dropdown-item')} href="#">Pricing</a>
                                </div>
                            </li>
                            <li className={clsx(style.item, 'dropdown',style.web)}>
                                <a className={clsx('nav-link', 'dropdown-toggle')} href="#" id="navbarDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Help
                                </a>
                                <div className={clsx('dropdown-menu')} aria-labelledby="navbarDropdown">
                                    <a className={clsx('dropdown-item')} href="#">Action</a>
                                    <a className={clsx('dropdown-item')} href="#">Another action</a>
                                </div>
                            </li>
                            <li className={clsx(style.item, style.mobile)}><a><span><img role="button" onClick={showSearch} src={search} alt="" width="20px"/></span></a></li>
                            <li className={clsx(style.item, 'dropdown', style.mobile)}>
                                <a className={clsx('nav-link')} href="#" id="navbarDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <span><img src={more} style={{width: 20}} alt=""/></span>
                                </a>
                                <div className={clsx('dropdown-menu')} aria-labelledby="navbarDropdown">
                                    <a className={clsx('dropdown-item')} href="#">Organize</a>
                                    <a className={clsx('dropdown-item')} href="#">Help</a>
                                    <a className={clsx('dropdown-item', style.createEvent)} href="#">Create an event</a>
                                </div>
                            </li>
                            <li className={clsx(style.item, style.createEvent, style.web)}><a href="#" className={clsx('nav-link')} role="button">Create an event</a></li>
                            <li className={style.item}><a className={clsx('nav-link')} onClick={signIn} href="#">Sign in</a></li>    
                        </ul>
                    </div>
                    <div className={clsx('col', style.login)} id="login">
                        <ul className={clsx(style.headerNav, 'justify-content-end')}>
                            <li className={clsx(style.item, style.createEvent, style.web)}>
                                <a href="#" className={clsx('nav-link')}>
                                    <div className={clsx('text-center')}>
                                        <img src={plus} alt="" width="20px"/><br/>
                                        Create an event
                                    </div>
                                </a>
                            </li>
                            <li className={clsx(style.item, style.web)}>
                                <a href="#" className={clsx('nav-link')}>
                                    <div className={clsx('text-center')}>
                                        <img src={heart} alt="" width="20px"/><br/>
                                        Like
                                    </div>
                                </a>
                            </li>
                            <li className={clsx(style.item, style.web)}>
                                <a href="#" className={clsx('nav-link')}>
                                    <div className={clsx('text-center')}>
                                        <img src={ticket} alt="" width="20px"/><br/>
                                        Ticket
                                    </div>
                                </a>
                            </li>
                            <li className={clsx(style.item , 'dropdown')}>
                                <a className={clsx('nav-link', 'dropdown-toggle')} href="#" id="navbarDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <img src={userLogin} alt="" width="36px"/>  yamemoim@gmail.com
                                </a>
                                <div className={clsx('dropdown-menu')} aria-labelledby="navbarDropdown">
                                    <a className={clsx('dropdown-item')} href="#" onClick={logout}>Log out</a>
                                </div>
                            </li>    
                        </ul>
                    </div>
                </div>
            </div>
            
        </div>
    );
}

export default Header;
