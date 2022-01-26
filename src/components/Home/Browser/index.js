import clsx from 'clsx';
import style from './Browser.module.css'
import CategoryItem from './CategoryItem'
import EventItem from './EventItem'
import {database} from '../../../lib/firebase'
import { useState,useEffect} from 'react';
import iconDown from '../../../assets/icons/arrow-down.png'
 

function Browser() {
    function getActive(id){
        const newList = listCtg.map((ctg) => ({
            ...ctg,
            active: false, // just for example
          }));
       
        const index = listCtg.findIndex(newList => newList.id==id);
        newList[index].active = true;
        setListCtg(newList);
    }
    const [listCtg,setListCtg] = useState([{
        "id" : 0,
        "name": "All",
        "active": true
    }]);
    const [listEventNationWide,setListEventNationWide] = useState([]);
    const [listEventCity,setListEventCity] = useState([]);
    useEffect(() =>{
        database.ref("Categories").on("value",snapshot =>{
            if(snapshot.val()!==null){
                snapshot.forEach(item =>{
                    if(!item.hasChild("parent_id")){
                        setListCtg(listCtg =>[...listCtg, {...item.val(),'active':false}]);
                  
                    }
                });
            }else{
                setListCtg([]);
            }
            
        });
        console.log(listCtg);
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
            <div className={style.wrapPickLocation}>
                <span className={style.labelPickLocation}>Meetings In</span>
                <img className={style.iconDropLocation} src={iconDown} alt="down" />
                <div className={style.wrapOptions}>Thành phố Hà Nội</div>
            </div>
            <div className={style.wrapListCategory}>
                <ul className={style.listCategory}>
                    {Object.values(listCtg).map((item,index) =>{
                        return <CategoryItem 
                        name ={item.name} 
                        id={item.id} 
                        color={item.color} 
                        key={index}
                        getActive ={getActive.bind(item.id)}
                        active = {item.active}
                        />
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
