import './Brower.css'

function Browser() {
    return (
        <div className=" wrap-container-search-event">
            <div className="wrap-list-category">
                <ul className="list-category">
                    <li className="category-item">
                        <span className="category-name">All</span>
                    </li>
                    <li className="category-item">
                        <span className="category-name">Game</span>
                    </li>
                    <li className="category-item">
                        <span className="category-name">Paint</span>
                    </li>
                    <li className="category-item">
                        <span className="category-name">Car</span>
                    </li>
                    <li className="category-item">
                        <span className="category-name">Sport</span>
                    </li>
                    <li className="category-item">
                        <span className="category-name">Travel</span>
                    </li>
                    <li className="category-item">
                        <span className="category-name">Food</span>
                    </li>
                    <li className="category-item">
                        <span className="category-name">Animal</span>
                    </li>
                    <li className="category-item">
                        <span className="category-name">Pet</span>
                    </li>
                    <li className="category-item">
                        <span className="category-name">Others</span>
                    </li>


                </ul>
            </div>
            <div className="result-list-event">
                <div className="result-event-location">
                    <h4 className="title-result-event">MEETING IN LOCATION CITY</h4>
                    <div className="wrap-list-event row">
                        <div className="wrap-item-event col-sm-6 col-lg-4 col-xl-3">
                            <div className="item-event">
                                <div className="wrap-image-event">
                                    <img className="img-event"
                                        src="https://firebasestorage.googleapis.com/v0/b/yamemoim-76929.appspot.com/o/event%2F2320917954_gnut%2Fbackground%2Fbg.png?alt=media&token=7e1c0320-969e-4897-a88d-fea673c1d797"
                                         />
                                    <span className="wrap-button-favorite">
                                        <img src="/img/icons/heart.png" width="24px" height="24px"  />
                                    </span>
                                </div>
                                <div className="wrap-event-info">
                                    <div className="wrap-ctg-of-event">

                                        <img className="img-ctg-of-event"
                                            src="https://firebasestorage.googleapis.com/v0/b/yamemoim-76929.appspot.com/o/category%2F1.png?alt=media&token=9a4aa03d-648a-479d-803a-1bf3cda7cd08"
                                             width="100%" height="100%" />

                                        <span className="event-ctg-name">
                                            Game
                                        </span>
                                    </div>
                                    <h5 className="event-name">VCS Championship 2022</h5>
                                    <div className="wrap-event-member">
                                        <img src="/img/icons/user.png" width="16px" height="16px"  />
                                        <span>89 người</span>
                                    </div>
                                    <div className="wrap-event-location">
                                        <img src="/img/icons/location.png" width="16px" height="16px"  />
                                        <span>Quận Thanh Xuân</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                       
                    </div>
                    <div className="wrap-btn-see-more">
                        <button className="btn btn-see-more">See more</button>
                    </div>
                </div>

                <div className="hr-custom"></div>

                <div className="result-event-nationwide">
                    <h4 className="title-result-event">MEETING IN NATIONWIDE</h4>
                    <div className="wrap-list-event row">
                        <div className="wrap-item-event col-sm-6 col-lg-4 col-xl-3">
                            <div className="item-event">
                                <div className="wrap-image-event">
                                    <img className="img-event"
                                        src="https://firebasestorage.googleapis.com/v0/b/yamemoim-76929.appspot.com/o/event%2F2320917954_gnut%2Fbackground%2Fbg.png?alt=media&token=7e1c0320-969e-4897-a88d-fea673c1d797"
                                         />
                                    <span className="wrap-button-favorite">
                                        <img src="/img/icons/heart.png" width="24px" height="24px"  />
                                    </span>
                                </div>
                                <div className="wrap-event-info">
                                    <div className="wrap-ctg-of-event">

                                        <img className="img-ctg-of-event"
                                            src="https://firebasestorage.googleapis.com/v0/b/yamemoim-76929.appspot.com/o/category%2F1.png?alt=media&token=9a4aa03d-648a-479d-803a-1bf3cda7cd08"
                                             width="100%" height="100%" />

                                        <span className="event-ctg-name">
                                            Game
                                        </span>
                                    </div>
                                    <h5 className="event-name">VCS Championship 2022</h5>
                                    <div className="wrap-event-member">
                                        <img src="/img/icons/user.png" width="16px" height="16px"  />
                                        <span>89 người</span>
                                    </div>
                                    <div className="wrap-event-location">
                                        <img src="/img/icons/location.png" width="16px" height="16px"  />
                                        <span>Quận Thanh Xuân</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                    <div className="wrap-btn-see-more">
                        <button className="btn btn-see-more">See more</button>
                    </div>
                </div>


            </div>
        </div>


    );
}

export default Browser;
