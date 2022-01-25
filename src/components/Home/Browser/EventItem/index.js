import style from '../../Browser/Browser.module.css'
import clsx from 'clsx';
import iconHeart from '../../../../assets/icons/heart.png'
import iconUser from '../../../../assets/icons/user.png'
import iconLocation from '../../../../assets/icons/location.png'
import imgBgEvent from '../../../../assets/img/bgEvent.png'
import { useState,useEffect} from 'react';
import {storage,database} from '../../../../lib/firebase'
function EventItem(props) {
    const [image, setImage] = useState(imgBgEvent);
    const [imageCtg, setImageCtg] = useState(imgBgEvent);
    const [colorCtg, setColorCtg] = useState('#f00');
    useEffect(() =>{
        storage.ref("event")
        .child(props.id)
        .child("background")
        .child(props.image)
        .getDownloadURL()
        .then((url) =>{
            setImage(url);
        });

        database.ref("Categories").on("value",snapshot =>{
            if(snapshot.val()!==null){
                snapshot.forEach(item =>{
                    if(item.child("id").val()==props.categoryID){
                        var ctgOriginID;
                        if(item.hasChild("parent_id")){
                            ctgOriginID = item.child("parent_id").val();
                        }else{
                            ctgOriginID = item.child("id").val();
                            setColorCtg(item.child("color").val());
                        }
                        storage.ref("category")
                        .child(ctgOriginID+".png")
                        .getDownloadURL()
                        .then((url) =>{
                            setImageCtg(url);
                        });
                    }
                });
            }
            
        });

        
        return () =>{
            setImage('');
            setImageCtg('')
        } 
    },[]);
    return (
        <div className={clsx(style.wrapItemEvent, 'col-sm-6 col-lg-4 col-xl-3')}>
            <div className={style.itemEvent}>
                <div className={style.wrapImageEvent}>
                    <img className={style.imgEvent}
                        src={image} alt="imgEvent"
                    />
                    <span className={style.wrapButtonFavorite}>
                        <img src={iconHeart} width="24px" height="24px" alt="favorite"/>
                    </span>
                </div>
                <div className={style.wrapEventInfo}>

                    <div className={style.wrapCtgOfEvent}>

                        <img className={clsx(style.imgCtgOfEvent)}
                            style={{backgroundColor: colorCtg}}
                            src = {imageCtg}
                            width="100%" height="100%" alt="ctgImg"/>

                        <span className={style.eventCtgName}>
                            Game
                        </span>
                    </div>
                    <h5 className={style.eventName}>{props.name}</h5>
                    <div className={style.wrapEventMember}>
                        <img src={iconUser} width="16px" height="16px" alt="member" />
                        <span>{props.member} người</span>
                    </div>
                    <div className={style.wrapEventLocation}>
                        <img src={iconLocation} width="16px" height="16px" alt="location"/>
                        <span>{props.location.substring(0,props.location.indexOf("("))}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EventItem;
