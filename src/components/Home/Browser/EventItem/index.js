import style from '../../Browser/Browser.module.css'
import clsx from 'clsx';
import iconHeart from '../../../../assets/icons/heart.png'
import iconUser from '../../../../assets/icons/user.png'
import iconLocation from '../../../../assets/icons/location.png'
import { useState,useEffect} from 'react';
import {storage,database} from '../../../../lib/firebase'
import {Link} from 'react-router-dom'
import {getEventInfo} from '../../../../services/firebase'

function EventItem(props) {
    // const [isLoadedImage, setIsLoadedImage] = useState(false);
    // const [isLoadedIconCtg, setIsLoadedIconCtg] = useState(false);
    const [dataEvent, setDataEvent] = useState(null);
    const [image, setImage] = useState('');
    const [name, setName] = useState('');
    const [imageCtg, setImageCtg] = useState('');
    const [colorCtg, setColorCtg] = useState('');
    // function setImageLoaded(){
    //     setIsLoadedImage(true);
    // }
    // function setIconCtgLoaded(){
    //     setIsLoadedIconCtg(true);
    // }
    useEffect(() =>{
        getEventInfo(props.id, data =>{
            setDataEvent(data);
           });
        // storage.ref("event")
        // .child(props.id)
        // .child("background")
        // .child(props.image)
        // .getDownloadURL()
        // .then((url) =>{
        //     setImage(url);
        // });

        // database.ref("Categories").on("value",snapshot =>{
        //     if(snapshot.val()!==null){
        //         snapshot.forEach(item =>{
        //             if(item.child("id").val().toString()===props.categoryID){
        //                 var ctgOriginID;
        //                 var ctgOriginName;
        //                 if(item.hasChild("parent_id")){
        //                     ctgOriginID = item.child("parent_id").val();
        //                     ctgOriginName = snapshot.child(item.child("parent_id").val()).child("name").val();
        //                     setColorCtg(snapshot.child(item.child("parent_id").val()).child("color").val());
        //                 }else{
        //                     ctgOriginID = item.child("id").val();
        //                     ctgOriginName = item.child("name").val();
        //                     setColorCtg(item.child("color").val());
        //                 }
        //                 setName(ctgOriginName);
        //                 storage.ref("category")
        //                 .child(ctgOriginID+".png")
        //                 .getDownloadURL()
        //                 .then((url) =>{
        //                     setImageCtg(url);
        //                 });
        //             }
        //         });
        //     }
            
        // });

        
        return () =>{
            // setImage('');
            // setImageCtg('')
            setDataEvent(null);
        } 
    },[props.id,props.categoryID,props.image]);
    return (
        
        <Link to={"event/"+props.id} className={clsx(style.wrapItemEvent, 'col-sm-6 col-lg-4 col-xl-3')}
        
        >
            <div className={style.itemEvent}>
                <div className={style.wrapImageEvent}
                style={{backgroundImage: `url(${dataEvent?dataEvent.imageUrl:''})`}}>
                    {/* <img className={style.imgEvent}
                        src={image} alt="imgEvent"
                        onLoad={setImageLoaded}
                        style={{display: isLoadedImage?'':'none'}}
                        
                    /> */}
                   
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
