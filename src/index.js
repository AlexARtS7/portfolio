import React, { useState, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route, Link, useLocation, useNavigate } from 'react-router-dom';

import './styles/style.scss';

import Navigation from './components/NavigationPanel';
import MainPage from './components/MainPage';
import Carousel from './components/others/carousel/Carousel';

import Bgt from './components/others/bg/bgt';
import Bgs from './components/others/bg/bgs';


const bg = Math.floor(Math.random() * 2);

const links = [
    {rus: 'ОбоМне', href: '/', jsx: <MainPage/>, id: 0}, 
    {rus: 'Работы', href: '/works', jsx: <MainPage/>, id: 1},
    {rus: 'Скилы', href: '/skils', jsx: <MainPage/>, id: 2},
    {rus: 'Контакты', href: '/contacts', jsx: <MainPage/>, id: 3}];

const Main = () => {
    const location = useLocation().pathname;
    const navigate = useNavigate();
    const [activeRoute, setActiveRoute] = useState(0);
    const [touchStart, setTouchStart] = useState(null)
    const [touchEnd, setTouchEnd] = useState(null)   

    const minSwipeDistance = 50; 

    const onTouchStart = (e) => {
      setTouchEnd(null)
      setTouchStart(e.targetTouches[0].clientX)
    }
    
    const onTouchMove = (e) => setTouchEnd(e.targetTouches[0].clientX)
    
    const onTouchEnd = () => {
      if (!touchStart || !touchEnd) return
      const distance = touchStart - touchEnd
      const isLeftSwipe = distance > minSwipeDistance
      const isRightSwipe = distance < -minSwipeDistance
      isRightSwipe && activeRoute > 0 ? navigate(links[activeRoute-1].href):null
      isLeftSwipe && activeRoute < links.length-1 ? navigate(links[activeRoute+1].href):null
    }

    useEffect(() => {
        let index = 0
        links.forEach((item, i) => item.href == location ? index = +i : null);
        if(index === 0) navigate('/');
        setActiveRoute(index);
    }, [location]);

    return (     
        <div className='app' onTouchStart={onTouchStart} onTouchMove={onTouchMove} onTouchEnd={onTouchEnd}>
            {/* <div className='bgcontainer'>
                {bg ? <Bgs/>:<Bgt/>}
            </div>                 */}
        <div className='app_backimage'/>
        <Navigation activeRoute={activeRoute} links={links}/> 
            <Carousel activeRoute={activeRoute} links={links}/>    
            
        
              
        </div> 
    )
}

const App = () => {
    return (
        <Router>
            <Main/>
            <Routes>      
                {links.map(item => <Route path={item.href} element={<><div style={{'position':'fixed'}}>{item.href}</div></>}/>)}             
                {/* <Route path='/' element={<></>}/> 
                <Route path='/works' element={<>
                <div style={{'position':'fixed'}}>sds</div>
                </>}/>  */}
                <Route path='*' element={<></>}/> 
            </Routes> 
        </Router>
    )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App/>)