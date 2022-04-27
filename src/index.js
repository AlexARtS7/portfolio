import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './styles/style.scss';

import { Navigation } from './components/Navigation';
import { Main } from './components/Main';

import Bgt from './components/others/bg/bgt';
import Bgs from './components/others/bg/bgs';

const App = () => {
    
    return (
        <Router>
            <div className='app flex_between'>
                <Navigation/>            
                <div className='content'>
                    <Bgs/>
                    {/* <Bgt/>                                            */}
                    <Routes>                    
                        <Route path='/' element={<Main/>}/>
                    </Routes>                
                </div>
            </div>    
        </Router>
            
    )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App/>)