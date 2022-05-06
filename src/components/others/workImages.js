import sv1 from '../../resources/works/svmachine/sv2.png';
import sv2 from '../../resources/works/svmachine/sv1.png';
import sv3 from '../../resources/works/svmachine/sv3.png';

import ezs1 from '../../resources/works/ezscratch/1.png';
import ezs2 from '../../resources/works/ezscratch/2.png';
import ezs3 from '../../resources/works/ezscratch/3.png';

import pute1 from '../../resources/works/pute/1.jpg';
import pute2 from '../../resources/works/pute/2.jpg';
import pute3 from '../../resources/works/pute/3.jpg';

import vis1 from '../../resources/works/viselic/1.jpg';
import vis2 from '../../resources/works/viselic/2.jpg';
import vis3 from '../../resources/works/viselic/3.jpg';

import suv1 from '../../resources/works/suvenir/suv1.png';
import suv2 from '../../resources/works/suvenir/suv2.png';
import suv3 from '../../resources/works/suvenir/suv3.png';

import mega1 from '../../resources/works/mega/1.jpg';
import mega2 from '../../resources/works/mega/2.jpg';
import mega3 from '../../resources/works/mega/3.jpg';

export const workImages = [
    {   
        name: 'SoundVisualMachine', 
        id: 0,
        type: 'SPA',
        description: 'Приложение обрабатывает звуковой поток с микрофона или видеокарты и сопровождает цветовой индикацией. Простыми словами цветомузыка онлайн.',
        ps: 'Есть возможность настроить срабатывание каналов на определенную тональность.',
        http: 'https://svmachine.ru',
        date: '11.2021 - 02.2022', 
        stack: 'Js / React / React-Redux / Html / Sass', 
        frameworks: 'react-colorful / react-full-screen / use-debouncy',
        src: [sv1,sv2,sv3]
    },
    {   
        name: 'Сувенирсам', 
        id: 1,
        type: 'WebSite',
        description: 'Интернет магазин с редактором кастомных товаров.',
        http: 'https://сувенирсам.рф',
        date: '09.2019 - 03.2020', 
        stack: 'Js / Html / Css', 
        src: [suv1,suv2,suv3]
    },
    {   
        name: 'Mega', 
        id: 2,
        type: 'WebSite',
        description: 'Онлайн журнал для соцсетей (vk.com, facebook.com) по заказу сети магазинов Мега.', 
        date: '2019', 
        stack: 'Js / Html / Css', 
        src: [mega1,mega2,mega3]
    },
    {   
        name: 'Ezscratch', 
        id: 3,
        type: 'WebSite',
        description: 'Игра лотерея Леприконец.', 
        date: '2019',
        stack: 'Js / Html / Css', 
        src: [ezs1,ezs2,ezs3]
    },
    {   
        name: 'Pute', 
        id: 4,
        type: 'WebSite',
        description: 'Путеводитель онлайн - книга с эффектами и анимацией.', 
        date: '2019',
        stack: 'Js / Html / Css', 
        src: [pute1,pute2,pute3]
    },
    {   
        name: 'Viselica', 
        id: 4,
        type: 'WebSite',
        description: 'Классическая в своем жанре игра "виселица".', 
        history: 'Применялась для тестирования знаний барменов, с целью выявления лучших. Логика стандартная, угадываем буквы, если нажимаем букву неправильно, то висилица опускается.',
        date: '2019',
        stack: 'Js / Html / Css', 
        src: [vis1,vis2,vis3]
    }
]