import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

import logo from '../resources/logo.svg';

const link = [
    {rus: 'Обо Мне', en: 'about', href: '/'}, 
    {rus: 'Работы', en: 'works', href: '/works'},
    {rus: 'Скилы', en: 'skils', href: '/skils'}];

export default function Navigation () {
    const navigate = useNavigate();
    const location = useLocation().pathname;
    const [active, setActive] = useState();

    useEffect(() => {
        let total = 0;
        link.forEach((item, i) => item.href == location ? total ++ : null);
        if(total === 0) navigate('/');
    }, []);

    useEffect(() => {
        link.forEach((item, i) => item.href == location ? setActive(i) : null);
    }, [location]);

    return (
        <div className='navigation flex_between'>
            <div className='navigation_bg'/>
        <img className='navigation_logo' src={logo}/>
        <div className='navigation_controls flex_between'>
        {link.map((item,i) => 
            <Link 
                className={active === i ? 'navigation_link navigation_activelink':'navigation_link'}
                to={item.href}
                key={i}>
                    {item.rus}
                    <div className={active === i ? 'navigation_led_active':'navigation_led'}></div>
                
            </Link>
            )}
        </div>
        <div className='navigation_date'>2019-{new Date().getFullYear()}</div>
        </div>
    )
}