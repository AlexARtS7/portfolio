import man from '../../resources/manR.svg';

import './mainPage.scss';

export default function MainPage() {
    return (
        <div className='main'>
            <img className='main_img' src={man} alt='ds'></img>
            {/* <div className='main_buf'/> */}
            <h2 className='main_title'>Привет!</h2>
            <div className='main_buf'/>
            <h3 className='main_title'>Меня зовут Александр.</h3>
            <div className='main_buf'/>
            <h3 className='main_title_dop'>Я занимаюсь веб разработкой и программированием.</h3>
            <div className='main_buf'/>           
            <p className='main_text'>Js / React / React-Redux / Redux-Saga</p>          
        </div>        
    )
};