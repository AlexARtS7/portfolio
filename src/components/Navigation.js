import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

import logo from '../resources/logo.svg';

const link = [
    {rus: 'ОбоМне', en: 'about', href: '/'}, 
    {rus: 'Работы', en: 'works', href: '/works'},
    {rus: 'Скилы', en: 'skils', href: '/skils'}];

export default function Navigation () {
    const location = useLocation().pathname;
    const [active, setActive] = useState();

    useEffect(() => {
        link.forEach((item, i) => item.href == location ? setActive(i) : null)
    }, [location])

    return (
        <div className='navigation flex_between'>
            <div className='navigation_bg'/>
        <img className='navigation_logo' src={logo}/>
        <div className='navigation_controls flex_between'>
        {link.map((item,i) => 
            <Link 
                className={active === i ? 'navigation_link navigation_activelink':'navigation_link'}
                // style={active === i ? {'width':'70%'}: null}
                to={item.href}
                key={i}>
                    {item.rus}
                
            </Link>
            )}
        </div>
        <div className='navigation_date'>2019-{new Date().getFullYear()}</div>
        </div>
    )
}