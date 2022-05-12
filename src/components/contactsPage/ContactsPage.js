import telegramLogo from '../../resources/tg.svg'; 
import mailLogo from '../../resources/mail.svg';

import './contactsPage.scss';

export default function ContactsPage () {
    return (
        <div className='contacts'>
            <div className='contacts_text'>Здесь представлены контакты по которым Вы можете связаться со мной,<br/> если хотите поговорить о сотрудничестве в проекте или задать вопросы.</div>
            <div className='contacts_block'>
                <div className='contacts_telegram'>
                    <img className='contacts_telegram_logo' src={telegramLogo} alt='logo'></img>
                    <span className='contacts_telegram_text'>AlexARtS7</span>
                </div>
                <div className='contacts_mail'>
                    <img className='contacts_mail_logo' src={mailLogo} alt='logo'></img>
                    <span className='contacts_mail_text'>enginpro@yandex.ru</span>
                </div>  
            </div>
                      
        </div>
    )
}