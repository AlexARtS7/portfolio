import { workImages } from "./others/workImages"

export default function WorksPage() {
    return (
        <div className='works'>
            <div className='works_list'>
                {workImages.map((item, i) => 
                <div className='works_list_item' key={i}>
                    <div className='works_list_item_description_block'>
                        <div className='flex_between'>
                            <p className='works_list_item_description_title'>{item.name}</p>
                            {item.date && <p className='works_list_item_description_title'>{item.date}</p>}
                        </div>
                        <div className='works_list_item_description_line'></div>                          
                    </div>
                    <img className='works_list_item_img' src={item.src[0]}/>
                    <div className='works_list_item_blind'>
                        <div className='works_list_item_blind_rel'>
                            <div className='works_list_item_blind_content'>
                                {item.stack && 
                                    <><p className='works_list_item_blind_stack'>{item.stack}</p><br/></>}
                            </div>  
                            {item.http && 
                                    <><a href={item.http} className='works_list_item_blind_http'>{item.http}</a><br/></>}                          
                            <p className='works_list_item_blind_continue'>подробнее...</p>
                        </div>                        
                    </div>
                </div>
                )}                
            </div>            
        </div>        
    )
}