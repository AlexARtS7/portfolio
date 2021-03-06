import React, { useState, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom/client';
import { Provider, useSelector, useDispatch } from 'react-redux';
import { BrowserRouter as Router, Routes, Route, Link, useLocation, useNavigate } from 'react-router-dom';

import './styles/style.scss';

import Navigation from './components/navigationPanel/NavigationPanel';
import MainPage from './components/mainPage/MainPage';
import WorksPage from './components/worksPage/WorksPage';
import ContactsPage from './components/contactsPage/ContactsPage';
import Carousel from './components/others/carousel/Carousel';

import Bgt from './components/others/bgs/bgt';

import store from './redux/store';

const links = [
    {rus: 'ОбоМне', href: '/', jsx: <MainPage/>, id: 0}, 
    {rus: 'Портфолио', href: '/portfolio', jsx: <WorksPage/>, id: 1},
    {rus: 'Контакты', href: '/contacts', jsx: <ContactsPage/>, id: 2}];

const App = () => {
    const dispatch = useDispatch();
    const location = useLocation().pathname;
    const navigate = useNavigate();
    const activeRoute = useSelector(state => state.activeRoute);
    const [touchStart, setTouchStart] = useState(null)
    const [touchEnd, setTouchEnd] = useState(null)   

    const minSwipeDistance = 120; 

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
        dispatch({type: 'SET_ACTIVEROUTE', payload: index})
    }, [location]);

    return (     
        <div className='app' onTouchStart={onTouchStart} onTouchMove={onTouchMove} onTouchEnd={onTouchEnd}>             
            <div className='app_backimage'/>
            <Bgt/>
            <Navigation activeRoute={activeRoute} links={links}/> 
            <Carousel links={links}/>       
        </div> 
    )
}

ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <Router>
            <Routes>      
                <Route path='*' element={<App/>}/> 
            </Routes> 
        </Router>
    </Provider>    
)