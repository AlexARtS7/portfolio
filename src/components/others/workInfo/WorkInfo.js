import { useState, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './workInfo.scss';

export default function WorkInfo() {
    const dispatch = useDispatch();
    const item = useSelector(state => state.workInfo);
    const [activeImage, setActiveImage] = useState(0);
    const image = useRef();
    const workInfo = useRef();

    const closeWorkInfo = (e) => {
        if(e.id === 'controls' || e.id === 'controlLeft' || e.id === 'controlRight') return;
        dispatch({type: 'SET_WORKINFO', payload: null});   
    };

    const onControlsClick = (action) => {
        let res = activeImage + action;
        if(res < 0) res = item.src.length - 1;
        if(res > item.src.length - 1) res = 0;  
        setActiveImage(res);
    };

    const onImageClick = (i) => {
        // image.current.className = 'workInfo_preview_imagearea_item workInfo_animation_in';
        // image.current.addEventListener('animationend', () => {
        //     setActiveImage(i);
        //     image.current.className = 'workInfo_preview_imagearea_item workInfo_animation_out';
        // }, {once: true})
        setActiveImage(i)
    };
    
    return (
        <div className='workInfo' onClick={(e) => closeWorkInfo(e.target)} ref={workInfo}>    
            <div className='workInfo_container flex_between'>
                <div className='workInfo_preview'>
                    <img className='workInfo_preview_image' ref={image} src={item.src[activeImage]} draggable='false'></img>
                    <div 
                        className='workInfo_preview_controls_left' 
                        onClick={() => onControlsClick(-1)}
                        id='controlLeft'>&lsaquo;</div>
                    <div 
                        className='workInfo_preview_controls_right' 
                        onClick={() => onControlsClick(+1)}
                        id='controlRight'>&rsaquo;</div>
                    <div className='workInfo_preview_controls flex_center'>
                        {item.src.map((s,i) => 
                            <img 
                                className={activeImage === i ?
                                'workInfo_preview_controls_image workInfo_preview_controls_image_active':
                                'workInfo_preview_controls_image'}
                                onClick={() => onImageClick(i)}
                                id='controls'
                                draggable='false'
                                key={i}
                                src={s}/>)}
                    </div>
                </div>
                <div className='workInfo_description'>
                    <div className='workInfo_description_nameblock'>
                        <p>{item.name}</p>
                        <div className='workInfo_description_line'/> 
                    </div>
                    <div className='workInfo_description_descriptionblock'>
                        {item.date && 
                            <><div className='flex_between'>
                                <p className='workInfo_label'>дата:</p><p className='workInfo_text'>{item.date}</p>
                            </div><br/></>}  
                        {item.type && 
                            <><div className='flex_between'>
                                <p className='workInfo_label'>тип:</p><p className='workInfo_text'>{item.type}</p>
                            </div><br/></>} 
                        {item.http && 
                            <><div className='flex_between'>
                                <p className='workInfo_label'>адрес:</p><a className='workInfo_http' href={item.http}>{item.http}</a>
                            </div><br/></>} 
                        {item.stack && 
                            <><span className='workInfo_label'>стек: </span>
                            <p className='workInfo_justifytext'>{item.stack}</p><br/></>}
                        {item.frameworks && 
                            <><span className='workInfo_label'>фреймворки: </span>
                            <p className='workInfo_justifytext'>{item.frameworks}</p><br/></>}
                        {item.description && 
                            <><span className='workInfo_label'>описание: </span>
                            <p className='workInfo_justifytext'>{item.description}</p><br/></>}
                        {item.history && 
                            <><span className='workInfo_label'>история: </span>
                            <p className='workInfo_justifytext'>{item.history}</p><br/></>}
                        {item.ps && 
                            <><span className='workInfo_label'>P.S.: </span>
                            <p className='workInfo_justifytext'>{item.ps}</p><br/></>}
                    </div>
                </div>
            </div> 
        </div>
    )
}
               