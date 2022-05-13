import telegramLogo from '../../resources/tg.svg'; 
import mailLogo from '../../resources/mail.svg';

import './contactsPage.scss';

export default function ContactsPage () {

    return (
        <div className='contacts'>
            <div className='contacts_text'>Здесь представлены контакты по которым Вы можете связаться со мной,<br/> если хотите поговорить о сотрудничестве в проекте или задать вопросы.</div>
            <div className='contacts_block'>
                <a className='contacts_link' href='https://t.me/AlexARtS7'>
                    <img className='contacts_link_logo' src={telegramLogo} alt='logo'></img>
                    <span className='contacts_link_text'>AlexARtS7</span>
                </a>
                <a className='contacts_link' href='mailto:enginpro@yandex.ru?subject=Hi'>
                    <img className='contacts_link_logo' src={mailLogo} alt='logo'></img>
                    <span className='contacts_link_text'>enginpro@yandex.ru</span>
                </a>  
            </div>
                      
        </div>
    )
}