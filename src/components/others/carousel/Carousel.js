import { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";

import './carousel.scss';

export default function Carousel({links}) {
  const dispatch = useDispatch();
    const [activeSlide, setActiveSlide] = useState(0);
    const [firstStart, setFirstStart] = useState(true);
    const activeRoute = useSelector(state => state.activeRoute);
    const workInfo = useSelector(state => state.workInfo);
    const staticJsx = useRef();
    const targetJsx = useRef();

    useEffect(() => {
        if(activeRoute != activeSlide && !firstStart) {
          staticJsx.current.className = activeRoute > activeSlide ? 
            'carousel_block animation_outLeft':'carousel_block animation_outRight'
          targetJsx.current.className = activeRoute > activeSlide ? 
            'carousel_block animation_inRight':'carousel_block animation_inLeft'

          targetJsx.current.addEventListener('animationend', () => {
            targetJsx.current ? targetJsx.current.className = 'carousel_block' : null
          }, {once: true})
          staticJsx.current.addEventListener('animationend', () => {
            setActiveSlide(activeRoute);
            if(workInfo) dispatch({type: 'SET_WORKINFO', payload: null});
            staticJsx.current.className = 'carousel_block outScreen'
        }, {once: true})
        };

        if(firstStart && activeRoute != -1) {
          setFirstStart(false);
          setActiveSlide(activeRoute);
        };        
    }, [activeRoute, activeSlide]);

    return (        
        <div className='carousel'>
            {!firstStart && links.map((item, i) => 
              <div 
                className={(activeSlide === item.id || activeRoute === item.id) ? 'carousel_block' : 'outScreen'} 
                ref={activeSlide === item.id ? staticJsx : activeRoute === item.id ? targetJsx : null} 
                key={i}>
                  {item.jsx}
              </div>             
            )}
        </div>        
    )
}