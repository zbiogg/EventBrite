import style from '../../Browser/Browser.module.css'
import clsx from 'clsx';
function ShimmerEventItem() {
  return (
    <div className={clsx(style.wrapItemEvent, 'col-sm-6 col-lg-4 col-xl-3')}
    >
        <div className={style.itemEvent}>
            <div className={style.wrapImageEvent}
                style={{ backgroundColor: '#a0a0a0'}}>
            </div>
            <div className={style.wrapEventInfo}>
                <div className={style.wrapCtgOfEvent}>
                    <div className={clsx(style.imgCtgOfEvent)}
                    ></div>
                    <span style={{width: '50%', height:'20px', backgroundColor: '#a0a0a0'}}>  
                    </span>
                </div>
                <div style={{width: '100%', height:'20px', backgroundColor: "#a0a0a0", marginTop:'15px'}}></div>
                <div style={{width: '80%', height:'20px', backgroundColor: "#a0a0a0", marginTop:'15px'}}></div>
                <div style={{width: '60%', height:'20px', backgroundColor: "#a0a0a0", marginTop:'15px'}}></div>
            </div>
        </div>
    </div>
    
  );
}

export default ShimmerEventItem;
