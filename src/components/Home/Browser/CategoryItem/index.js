import style from '../../Browser/Browser.module.css'
import { useState,useEffect} from 'react';
import clsx from 'clsx';
function CategoryItem(props) {
    const [isActive, setActive] = useState(false);
   
   
    const selectCategory =()  =>{
            props.getActive(props.id);
        
    };
    return (
        <li className={style.categoryItem} onClick={selectCategory}>
            <span className={clsx({[style.categoryName]:true,[style.ctgActive]:props.active})}>{props.name}</span>
        </li>
    );
}

export default CategoryItem;
