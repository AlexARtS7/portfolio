import { useState, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './workInfo.scss';

export default function WorkInfo() {
    const dispatch = useDispatch();
    const item = useSelector(state => state.workInfo);
    const [activeImage, setActiveImage] = useState(0);
    const image = useRef();

    const closeWorkInfo = (e) => {
        if(e.name === 'controls') return;
        dispatch({type: 'SET_WORKINFO', payload: null});
    };

    const onImageClick = (i) => {
        // setActiveImage(i);
        image.current.className = 'workInfo_preview_imagearea_item workInfo_animation_in';
        image.current.addEventListener('animationend', () => {
            setActiveImage(i);
            image.current.className = 'workInfo_preview_imagearea_item workInfo_animation_out';
        }, {once: true})
    };

    return (
        <div className='workInfo' onClick={(e) => closeWorkInfo(e.target)}>
            <div className='workInfo_block'>
                <div className='workInfo_block_backimage'/>
                <div className='workInfo_titleBlock'>
                    <div className='workInfo_titleBlock_im'/>
                    <p className='workInfo_titleBlock_title'>{item.name}</p>
                    <div className='works_list_item_description_line'/>   
                </div>
                <div className='workInfo_container'>
                    <div className='workInfo_preview_block flex_between'>
                        <div className='workInfo_preview_imagearea'>
                            <img className='workInfo_preview_imagearea_item' ref={image} src={item.src[activeImage]}></img>
                        </div>
                        <div className='workInfo_preview_controls'>
                            {item.src.map((s,i) => 
                                <img className='workInfo_preview_controls_item' 
                                    name='controls' 
                                    src={s} 
                                    key={i}
                                    onClick={() => onImageClick(i)}
                                    />                                        
                                )}
                        </div>
                    </div> 
                    <div className='workInfo_description_block'>
                        {item.http && <><span className='workInfo_label'>адрес сайта: </span><a href={item.http} className='workInfo_http'>{item.http}</a><br/><br/></>}
                        {item.date && <><p className='workInfo_text'><span className='workInfo_label'>дата: </span>{item.date}</p><br/></>}
                        {item.type && <><p className='workInfo_text'><span className='workInfo_label'>тип: </span>{item.type}</p><br/></>}
                        {item.stack && <><p className='workInfo_text'><span className='workInfo_label'>стек: </span>{item.stack}</p><br/></>}
                        {item.description && <><p className='workInfo_text'><span className='workInfo_label'>описание: </span>{item.description}</p><br/></>}
                    </div> 
                </div>                              
            </div>
        </div>
    )
}