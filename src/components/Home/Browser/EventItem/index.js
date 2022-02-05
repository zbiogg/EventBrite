import style from '../../Browser/Browser.module.css'
import clsx from 'clsx';
import iconHeart from '../../../../assets/icons/heart.png'
import iconUser from '../../../../assets/icons/user.png'
import imgBgEvent from '../../../../assets/img/bgEvent.png'
import iconLocation from '../../../../assets/icons/location.png'
import { useState,useEffect} from 'react';
import {Link} from 'react-router-dom'
import {getEventInfo} from '../../../../services/firebase'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

function EventItem(props) {
    const [dataEvent, setDataEvent] = useState(null);
    useEffect(() =>{
        getEventInfo(props.id, data =>{
            setDataEvent(data);
           });

        return () =>{
            setDataEvent(null);
        } 
    },[props.id,props.categoryID,props.image]);
    return (
        
        <Link to={"event/"+props.id} className={clsx(style.wrapItemEvent, 'col-sm-6 col-lg-4 col-xl-3')}
        
        >
            <div className={style.itemEvent}>
                <div className={style.wrapImageEvent}
                // style={{backgroundImage: `url(${imgBgEvent})`}}
                >
                    <LazyLoadImage
                    style={{display: dataEvent?dataEvent.bgUrl?'block':'none':''}}
                    className={style.imgEvent}
                    effect="blur"
                    src={dataEvent?dataEvent.bgUrl:''} />
                   
                    <span className={style.wrapButtonFavorite}>
                        <img src={iconHeart} width="24px" height="24px" alt="favorite"/>
                    </span>
                </div>
                <div className={style.wrapEventInfo}>

                    <div className={style.wrapCtgOfEvent}>

                        <div className={clsx(style.imgCtgOfEvent)}
                            style={{backgroundColor: dataEvent?dataEvent.ctgColor:'', backgroundImage: `url(${dataEvent?dataEvent.ctgIconUrl:''})`}}
                           
                        ></div>

                        <span className={style.eventCtgName} style={{color: dataEvent?dataEvent.ctgColor:''}}>
                            {dataEvent?dataEvent.ctgOriginName:''}
                        </span>
                    </div>
                    <h5 className={style.eventName}>{dataEvent?dataEvent.name:''}</h5>
                    <div className={style.wrapEventMember}>
                        <img src={iconUser} width="16px" height="16px" alt="member" />
                        <span>{dataEvent?dataEvent.quantity:''} người</span>
                    </div>
                    <div className={style.wrapEventLocation}>
                        <img src={iconLocation} width="16px" height="16px" alt="location"/>
                        <span>{dataEvent?dataEvent.location.substring(0,props.location.indexOf("(")):''}</span>
                    </div>
                </div>
            </div>
           
        </Link>
    );
}

export default EventItem;
