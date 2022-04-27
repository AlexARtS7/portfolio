import { CodeBlock } from "./others/codeblock/CodeBlock"


//Привет!, Я Александр. WebFrontend разработчик.
export const Main = () => {
    return (
        <>
            <div className='main_title_block animation_top_in'>
                <h1 className='main_title'><br/>Привет!<br/><br/>Меня зовут Александр,<br/>Я WebFrontend разработчик.</h1> 
            </div>
            
            <div className='buf'/>
            <div className='main_content animation_bottom_in'>
                {/* <div className='main_block_code'>
                    <CodeBlock/>
                </div>           */}
            </div>
        </>
    )
}
//