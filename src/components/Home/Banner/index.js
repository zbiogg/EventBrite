import './Banner.css'

function Banner() {
    return (

        <div className="feed_header container-fluid">
            <div className="feed-header__bg-box"></div>
            <div className="header__main-bg-wrapper header__main-bg-wrapper--seasonal">
                <img className='header__main-bg'
                    src="https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F99891082%2F174963144412%2F1%2Foriginal.20200430-164830?w=1016&auto=format%2Ccompress&q=75&sharp=10&s=be5cc9aa4646e8daeb55c374bc923a05"
                    alt=""/>
            </div>
            <div className="feed-header__content">
                <div>
                    <h1 className="feed-header__title">
                        <div>
                            <div className="feed-header__title-top">Connect through</div>
                            <div className="feed-header__title-bottom feed-header__title-bottom--seasonal">online events</div>
                        </div>
                        <button className="feed-header__cta-container">
                            <a href="/" className="eds-link">
                                <div className="feed-header__cta-text eds-text-bm eds-text-weight--heavy eds-show-up-md">Browse
                                    events</div>
                                <ion-icon name="arrow-forward-outline"></ion-icon>
                            </a>
                        </button>
                    </h1>
                </div>
            </div>
        </div>

    );
}

export default Banner;
