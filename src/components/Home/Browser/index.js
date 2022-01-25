import clsx from 'clsx';
import style from './Browser.module.css'
import CategoryItem from './CategoryItem'
import EventItem from './EventItem'
import {database} from '../../../lib/firebase'
import { useState,useEffect} from 'react';
 

function Browser() {
    const [listCtg,setListCtg] = useState([]);
    const [listEventNationWide,setListEventNationWide] = useState([]);
    const [listEventCity,setListEventCity] = useState([]);
    useEffect(() =>{
        database.ref("Categories").on("value",snapshot =>{
            if(snapshot.val()!==null){
                snapshot.forEach(item =>{
                    if(!item.hasChild("parent_id")){
                        setListCtg(listCtg =>[...listCtg, item.val()]);
                  
                    }
                });
            }else{
                setListCtg([]);
            }
            
        });
        database.ref("Events").on("value",snapshot =>{
            if(snapshot.val()!==null){
                snapshot.forEach(item =>{
                    if(item.child("type").val()==="event"){
                        setListEventNationWide(listEventNationWide =>[...listEventNationWide, item.val()]);
                        if(item.child("location").val().includes("Thành phố Hà Nội")){
                            setListEventCity(listEventCity => [...listEventCity, item.val()]);
                        }
                    }
                });
            }else{
                setListEventNationWide([]);
                setListEventCity([]);
            }
            
        });
        return () =>{
            setListCtg([]);
            setListEventNationWide([]);
            setListEventCity([]);
        }
        
    
    },[]);
  
    return (
        <div className={clsx(style.wrapContainerSearchEvent, 'container-fluid')}>
            <div className={style.wrapListCategory}>
                <ul className={style.listCategory}>
                    {Object.values(listCtg).map((item,index) =>{
                        return <CategoryItem name ={item.name} color={item.color} key={index}/>
                    })}
                </ul>
                
            </div>
            <div className={style.resultListEvent}>
                <div className={style.resultEventLocation}>
                    <h4 className={style.titleResultEvent}>MEETING IN LOCATION CITY</h4>
                    <div className={clsx(style.wrapListEvent, 'row')}>
                    {Object.values(listEventCity).map((item,index) =>{
                            return (
                            <EventItem
                                name ={item.name} 
                                location={item.location} 
                                member={item.quantity} 
                                key={index}
                                id = {item.id}
                                image = {item.image}
                                categoryID ={item.category_id}
                             />
                             )
                        })}
                    </div>
                    <div className={style.wrapBtnSeeMore}>
                        <button  className={style.btnSeeMore}>See more</button>
                    </div>
                </div>
                <div className={style.hrCustom}></div>
                <div className={style.resulEventMationwide}>
                    <h4 className={style.titleResultEvent}>MEETING IN NATIONWIDE</h4>
                    <div className={clsx(style.wrapListEvent, 'row')}>
                        {Object.values(listEventNationWide).map((item,index) =>{
                            return (
                            <EventItem
                                name ={item.name} 
                                location={item.location} 
                                member={item.quantity} 
                                key={index}
                                id = {item.id}
                                image = {item.image}
                                categoryID ={item.category_id}
                             />
                             )
                        })}
                    </div>
                    <div className={style.wrapBtnSeeMore}>
                        <button  className={style.btnSeeMore}>See more</button>
                    </div>
                </div>


            </div>
        </div>


    );
}

export default Browser;
