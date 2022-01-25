/* eslint-disable jsx-a11y/alt-text */
import clsx  from 'clsx';
import style from './Browser.module.css'
import iconHeart from '../../../assets/icons/heart.png'
import iconUser from '../../../assets/icons/user.png'
import iconLocation from '../../../assets/icons/location.png'
function Browser() {
    return (
        <div className={style.wrapContainerSearchEvent}>
            <div className={style.wrapListCategory}>
                <ul className={style.listCategory}>
                    <li className={style.categoryItem}>
                        <span className={style.categoryName}>All</span>
                    </li>
                </ul>
            </div>
            <div className={style.resultListEvent}>
                <div className={style.resultEventLocation}>
                    <h4 className={style.titleResultEvent}>MEETING IN LOCATION CITY</h4>
                    <div className={clsx(style.wrapListEvent, 'row')}>
                        {/* "wrap-item-event col-sm-6 col-lg-4 col-xl-3 */}
                        <div className={clsx(style.wrapItemEvent, 'col-sm-6 col-lg-4 col-xl-3')}>
                            <div className={style.itemEvent}>
                                <div className={style.wrapImageEvent}>
                                    <img className={style.imgEvent}
                                        src="https://firebasestorage.googleapis.com/v0/b/yamemoim-76929.appspot.com/o/event%2F2320917954_gnut%2Fbackground%2Fbg.png?alt=media&token=7e1c0320-969e-4897-a88d-fea673c1d797"
                                         />
                                    <span className={style.wrapButtonFavorite}>
                                        <img src={iconHeart} width="24px" height="24px"  />
                                    </span>
                                </div>
                                <div className={style.wrapEventInfo}>

                                    <div className={style.wrapCtgOfEvent}>

                                        <img className={style.imgCtgOfEvent}
                                            src="https://firebasestorage.googleapis.com/v0/b/yamemoim-76929.appspot.com/o/category%2F1.png?alt=media&token=9a4aa03d-648a-479d-803a-1bf3cda7cd08"
                                             width="100%" height="100%" />

                                        <span className={style.eventCtgName}>
                                            Game
                                        </span>
                                    </div>
                                    <h5 className={style.eventName}>VCS Championship 2022</h5>
                                    <div className={style.wrapEventMember}>
                                        <img src={iconUser} width="16px" height="16px"  />
                                        <span>89 người</span>
                                    </div>
                                    <div className={style.wrapEventLocation}>
                                        <img src={iconLocation} width="16px" height="16px"  />
                                        <span>Quận Thanh Xuân</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                       
                    </div>
                    <div className={style.wrapBtnSeeMore}>
                        <button className={style.btnSeeMore}>See more</button>
                    </div>
                </div>

                <div className={style.hrCustom}></div>

                <div className={style.resulEventMationwide}>
                <h4 className={style.titleResultEvent}>MEETING IN NATIONWIDE</h4>
                    <div className={clsx(style.wrapListEvent, 'row')}>
                        {/* "wrap-item-event col-sm-6 col-lg-4 col-xl-3 */}
                        <div className={clsx(style.wrapItemEvent, 'col-sm-6 col-lg-4 col-xl-3')}>
                            <div className={style.itemEvent}>
                                <div className={style.wrapImageEvent}>
                                    <img className={style.imgEvent}
                                        src="https://firebasestorage.googleapis.com/v0/b/yamemoim-76929.appspot.com/o/event%2F2320917954_gnut%2Fbackground%2Fbg.png?alt=media&token=7e1c0320-969e-4897-a88d-fea673c1d797"
                                         />
                                    <span className={style.wrapButtonFavorite}>
                                        <img src={iconHeart} width="24px" height="24px"  />
                                    </span>
                                </div>
                                <div className={style.wrapEventInfo}>

                                    <div className={style.wrapCtgOfEvent}>

                                        <img className={style.imgCtgOfEvent}
                                            src="https://firebasestorage.googleapis.com/v0/b/yamemoim-76929.appspot.com/o/category%2F1.png?alt=media&token=9a4aa03d-648a-479d-803a-1bf3cda7cd08"
                                             width="100%" height="100%" />

                                        <span className={style.eventCtgName}>
                                            Game
                                        </span>
                                    </div>
                                    <h5 className={style.eventName}>VCS Championship 2022</h5>
                                    <div className={style.wrapEventMember}>
                                        <img src={iconUser} width="16px" height="16px"  />
                                        <span>89 người</span>
                                    </div>
                                    <div className={style.wrapEventLocation}>
                                        <img src={iconLocation} width="16px" height="16px"  />
                                        <span>Quận Thanh Xuân</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                       
                    </div>
                    <div className={style.wrapBtnSeeMore}>
                        <button className={style.btnSeeMore}>See more</button>
                    </div>
                </div>


            </div>
        </div>


    );
}

export default Browser;
