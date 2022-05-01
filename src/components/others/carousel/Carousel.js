import { useState, useEffect, useRef } from "react";

import './carousel.scss';

const items = [
  {jsx: <div>1</div>, id: 0},
  {jsx: <div>2</div>, id: 1},
  {jsx: <div>3</div>, id: 2},
  {jsx: <div>4</div>, id: 3},
]


export default function Carousel({activeRoute, links}) {
    const [activeSlide, setActiveSlide] = useState(activeRoute)
    const staticJsx = useRef();
    const targetJsx = useRef();

    useEffect(() => {
        if(activeRoute != activeSlide) {
          staticJsx.current.className = activeRoute > activeSlide ? 'carousel_block animation_outLeft':'carousel_block animation_outRight'
          targetJsx.current.className = activeRoute > activeSlide ? 'carousel_block animation_inRight':'carousel_block animation_inLeft'
            targetJsx.current.addEventListener('animationend', () => {
              targetJsx.current ? targetJsx.current.className = 'carousel_block' : null
          }, {once: true})
          staticJsx.current.addEventListener('animationend', () => {
            setActiveSlide(activeRoute)
            staticJsx.current.className = 'carousel_block outScreen'
        }, {once: true})
        }
    }, [activeRoute, activeSlide]);

    return (        
        <div className='carousel'>
            {links.map((item, i) => 
            (activeSlide === item.id || activeRoute === item.id) ? 
            <div className='carousel_block' ref={activeSlide === item.id ? staticJsx : targetJsx} key={i}>{item.jsx}</div>   
            : null
            )}
        </div>        
    )
}