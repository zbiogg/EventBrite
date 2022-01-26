import style from '../../Browser/Browser.module.css'
function CategoryItem(props) {
    return (
        <li className={style.categoryItem}>
            <span className={style.categoryName}>{props.name}</span>
        </li>
    );
}

export default CategoryItem;
