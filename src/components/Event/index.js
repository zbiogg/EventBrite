import Header from '../Header'
import Footer from '../Footer'
import { BrowserRouter as  useParams, useSearchParams } from 'react-router-dom'
import style from './Event.module.css'
import clsx from 'clsx';
import iconUser from '../../assets/icons/user.png'
import iconFavorite from '../../assets/icons/heart.png'
import iconShare from '../../assets/icons/share.png'
import iconLocation from '../../assets/icons/location.png'
import { useState,useEffect } from 'react';
import {getEventInfo} from '../../services/firebase'
 Event = ({match}) => {
    const [dataEvent, setDataEvent] = useState(null);
    // let {id} = useParams(); bug in here
    // console.log(id);
    var eventID= "1641616791_Sil";
    useEffect(() => {
       getEventInfo(eventID, data =>{
        setDataEvent(data);
       });
    }, []);
    return (
        <div>
            <Header />
            <div className="container">
                <div className={clsx(style.wrapHeader, 'row')}>
                    <div className={clsx(style.image, 'col-lg-8')}

                        style={{ backgroundImage: `url(${dataEvent?dataEvent.imageUrl:''})` }}
                    ></div>
                    <div className={clsx(style.wrapAbout, 'col-lg-4')}>
                        <div className={style.about}>
                            <div className={style.wrapCtgOfEvent}>

                                <div className={clsx(style.imgCtgOfEvent)}
                                    style={{ backgroundColor: dataEvent?dataEvent.ctgColor:'', backgroundImage: `url(${dataEvent?dataEvent.ctgIconUrl:''})` }}

                                ></div>

                                <span className={style.eventCtgName} style={{ color: dataEvent?dataEvent.ctgColor:'' }}>
                                    {dataEvent?dataEvent.ctgOriginName:''}
                                </span>
                            </div>
                            <h5 className={style.eventName}>{dataEvent?dataEvent.name:''}</h5>
                            <div className={style.wrapEventMember}>
                                <img src={iconUser} width="16px" height="16px" alt="member" />
                                <span>Member: {dataEvent?dataEvent.quantity:''} người</span>
                            </div>
                            <div className={style.wrapEventLocation}>
                                <img src={iconLocation} width="16px" height="16px" alt="location" />
                                <span>Location: {dataEvent?dataEvent.location.substring(0,dataEvent.location.indexOf("(")):''}</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={style.wrapActions}>
                    <div className={style.wrapOptionEvent}>
                        <span title="Share Event" className={style.iconOptionEvent} style={{backgroundImage: `url(${iconShare})`}}></span>
                        <span title="Share Event" className={style.iconOptionEvent} style={{backgroundImage: `url(${iconFavorite})`}}></span>
                    </div>
                    <div className={style.wrapBtnJoin}>
                        <button className={clsx(style.btnJoin,'btn btn-success')}>Join Event</button>
                    </div>
                </div>
                <div className={clsx(style.wrapInfo,'row')}>
                    <div className={clsx(style.wrapDesciption, 'col-lg-8')}>
                        <span className={style.titleDesciption}>Desciption Event</span>
                        <div className={style.desciption} dangerouslySetInnerHTML={{ __html: dataEvent?dataEvent.description:'' }} />
                    </div>
                    <div className={clsx(style.wrapParticipant,'col-lg-4')}>
                    <span className={style.titleParticipants}>Participants</span>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Event;
