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
        <div className='workInfo' onClick={(e) => closeWorkInfo(e.target)} ref={workInfo}>    
            <div className='workInfo_container flex_between'>
                <div className='workInfo_preview'>
                    <img className='workInfo_preview_image' ref={image} src={item.src[activeImage]}></img>
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
                            <><div className='flex_between'>
                                <p className='workInfo_label'>стек:</p><p className='workInfo_text'>{item.stack}</p>
                            </div><br/></>}
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

{/* <div className='workInfo_titleBlock'>
                    <div className='workInfo_titleBlock_im'/>
                    <p className='workInfo_titleBlock_title'>{item.name}</p>
                    <div className='works_list_item_description_line'/>   
                </div> */}
{/* <img className='workInfo_image' ref={image} src={item.src[activeImage]}></img> */}
                    {/* <div className='workInfo_preview_block'>
                        <div className='workInfo_preview_imagearea'> 
                            <img className='workInfo_preview_image' ref={image} src={item.src[activeImage]}></img>
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
                    </div>  */}
                    {/* <div className='workInfo_description_block'>
                        {item.http && <><span className='workInfo_label'>адрес сайта: </span><a href={item.http} className='workInfo_http'>{item.http}</a><br/><br/></>}
                        {item.date && <><p className='workInfo_text'><span className='workInfo_label'>дата: </span>{item.date}</p><br/></>}
                        {item.type && <><p className='workInfo_text'><span className='workInfo_label'>тип: </span>{item.type}</p><br/></>}
                        {item.stack && <><p className='workInfo_text'><span className='workInfo_label'>стек: </span>{item.stack}</p><br/></>}
                        {item.description && <><p className='workInfo_text'><span className='workInfo_label'>описание: </span>{item.description}</p><br/></>}
                    </div>  */}