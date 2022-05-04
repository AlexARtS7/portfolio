import { useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

import logo from '../resources/logo.svg';



export default function Navigation ({activeRoute, links}) {
    return (
        <div className='navigation flex_between'>
            <div className='navigation_bg'/>
            <img className='navigation_logo' src={logo}/>
            <div className='navigation_controls flex_between'>
            {links.map((item,i) => 
                <Link 
                    className={activeRoute === i ? 'navigation_link navigation_activelink':'navigation_link'}
                    to={item.href}
                    key={i}>{item.rus}
                        <div className='navigation_led_block'>
                            <div className={activeRoute === i ? 'navigation_led navigation_led_active':'navigation_led'}></div>
                        </div>                
                </Link>
                )}
            </div>
            <div className='navigation_date'>2019 {new Date().getFullYear()}</div>
        </div>  
    )
}