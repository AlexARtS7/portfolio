import { CodeBlock } from "./others/codeblock/CodeBlock"

export default function Main() {
    return (
        <div className='main main_center'>
            <div className='main_robo_block'>
                <div className='main_robo'>
                    <div className='main_robo_hand'/>
                    <div className='main_robo_ball'/>
                </div>                        
            </div>
            <div className='main_line'/>
            <div>
                <h1 className='main_title'>Привет!<br/><br/>Меня зовут Александр,<br/>Я занимаюсь веб разработкой.</h1>
                <div className='main_description main_description_buf'>Сайты - приложения типа SPA (Single Page Application).</div>
                <div className='main_description'>Стек: Js, Html, Css, Scss, React, React-Redux, Redux-Saga.</div>
            </div>          
        </div>
    )
}
//