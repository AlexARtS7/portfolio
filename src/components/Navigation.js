import { useState, useEffect } from "react";

import { Link, useLocation } from "react-router-dom";

import logo from '../resources/logo.svg';

const linkText = [
    {rus: 'ОбоМне', en: 'about', href: '/'}, 
    {rus: 'Работы', en: 'works', href: '/works'},
    {rus: 'Скилы', en: 'skils', href: '/skils'}];

export const Navigation = () => {
    const [hover, setHover] = useState(null)
    const [active, setActive] = useState(null);
    const location = useLocation().pathname

    useEffect(() => {
        switch(location) {
            case '/': setActive(0);
            break;
            case '/works': setActive(1);
            break;
            case '/skils': setActive(2);
            break;
        }
    }, [location])
    
    return (        
        <div className='navigation'>
            <div className='navigation_backimage'/>
            {/* <img className='navigation_logo' style={location === '/' ? {'opacity':'0'}:{'opacity':'.1'}} src={logo} alt=''/> */}
            <img className='navigation_logo' src={logo}/>
            {linkText.map((item,i) => 
            <Link 
                to={item.href}                
                onMouseEnter={() => {setHover(i)}}
                onMouseLeave={() => {setHover(null)}}
                className={ active === i ? 'navigation_link navigation_link_hover' : 'navigation_link'} 
                key={i}>{item.rus}
                    {(hover === i || active === i) && 
                        <>
                            <span className='navigation_link_text' style={{'color': '#FFD700'}}> (</span>
                            <span className='navigation_link_text' style={{'color': '#00BFFF','marginRight':'3px'}}>{item.en}</span>  
                            <span className='navigation_link_text' style={{'color': '#FFD700'}}>)</span>
                            <span className='navigation_link_text' style={{'color': '#FFFFFF'}}>;</span>
                        </>
                    }                                   
                <div className='navigation_link_in'/></Link>)}
                <div className='navigation_workhours'> 2019 - {new Date().getFullYear()}</div>
        </div>
    )
}