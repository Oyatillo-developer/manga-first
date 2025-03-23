import React from 'react';
import '../style/manga.scss';
import { Link } from 'react-router-dom';
import { BiError } from "react-icons/bi";
import { useState } from "react";
import { IoIosStar } from "react-icons/io";
import { FaHeart } from "react-icons/fa6";
import { IoBookmarks } from "react-icons/io5";
import { IoEyeSharp } from "react-icons/io5";
import ExpandableText from "../page/textuchun";



import manga11 from '../img/manga 11.jpg'
import manga1 from '../img/manga 1.jpg';
import manga2 from '../img/manga 2.jpg';
import manga3 from '../img/manga 3.jpg';
import manga4 from '../img/manga 4.jpg';
import manga5 from '../img/manga 5.jpg';
import manga6 from '../img/manga 6.jpg';
import manga7 from '../img/manga 7.jpg';
import manga8 from '../img/manga 8.jpg';
import manga9 from '../img/manga 9.jpg';
import manga10 from '../img/manga 10.jpg';

const data = [
    { img: manga1, title: "Я так и не смогла усмирить эту злую натуру", genre: "Манхва, Драма" },
    { img: manga2, title: "Я стала богатой аристократкой", genre: "Манхва, Романтика" },
    { img: manga3, title: "Последний человек", genre: "Манхва, Постапокалипсис" },
    { img: manga4, title: "Дочь короля стихий", genre: "Манхва, Драма" },
    { img: manga5, title: "Не связывай себя с этой книгой", genre: "Манхва, Романтика" },
    { img: manga6, title: "Я так и не смогла усмирить эту злую натуру", genre: "Манхва, Драма" },
    { img: manga7, title: "Я стала богатой аристократкой", genre: "Манхва, Романтика" },
    { img: manga8, title: "Последний человек", genre: "Манхва, Постапокалипсис" },
    { img: manga9, title: "Дочь короля стихий", genre: "Манхва, Драма" },
    { img: manga10, title: "Не связывай себя с этой книгой", genre: "Манхва, Романтика" },
];


function App() {

    const [activeTab, setActiveTab] = useState("description");

    const [visibleCount, setVisibleCount] = useState(5);
    const handleLoadMore = () => {
        setVisibleCount(prev => prev + 5);
    };

    return ( <>
    

    <div className="telepat">

        <div className="port">

            <div className="me">
                <img src={manga11} alt="manga photo" />
            </div>

            <div className="what">

                <Link to='/reading'>
                    <div className="for">
                        <h1>Читать</h1>
                    </div>
                </Link>

                <Link to='/'>
                    <div className="for">
                        <h1>В закладки</h1>
                    </div>
                </Link>

                <Link to='/'>
                    <div className="for">
                        <h1>РЕДАКТИРОВАТЬ</h1>
                    </div>
                </Link>

                <Link to='/'>
                    <div className="for">
                        <h1>Жалоба <BiError className='error' /> </h1>
                    </div>
                </Link>

            </div>
        </div>

        <div className="you">

            <div className="spek">

                <div className="fine">

                    <div className="snow">
                        <a href="">Манхва 2025</a>
                    </div>

                    <h1>Слезы на увядших цветах</h1>

                    <div className="life">
                        <div className="shaman">
                            <h1>Глав</h1>
                            <p>120</p>
                        </div>
                        <div className="shaman">
                            <h1>Лайков</h1>
                            <p><FaHeart className='art' />1.1 M</p>
                        </div>
                        <div className="shaman">
                            <h1>В закладках</h1>
                            <p><IoBookmarks  className='art' /> 86.6 K</p>
                        </div>
                        <div className="shaman">
                            <h1>Просмотров</h1>
                            <p><IoEyeSharp  className='art' /> 5.5 M</p>
                        </div>
                        <div className="shaman">
                            <h1>Выпуск</h1>
                            <p>Продолжается</p>
                        </div>
                        <div className="shaman">
                            <h1>Перевод</h1>
                            <p>Продолжается</p>
                        </div>
                        <div className="shaman">
                            <h1>PG</h1>
                            <p>0+</p>
                        </div>
                    </div>
                </div>

                <div className="reyting">
                    <div className="human">
                        <h1><IoIosStar className='star' /> 9.1</h1>
                        <p>5.6 K</p>
                    </div>
                    <Link>Оценить</Link>
                </div>
            </div>


            <div className="container">

                <div className="tabs">
                    <button className={activeTab === "description" ? "active" : ""} onClick={() => setActiveTab("description")}>
                        ОПИСАНИЕ
                    </button>
                    <button className={activeTab === "chapters" ? "active" : ""} onClick={() => setActiveTab("chapters")}>
                        ГЛАВЫ
                    </button>
                    <button className={activeTab === "reviews" ? "active" : ""} onClick={() => setActiveTab("reviews")}>
                        ОТЗЫВЫ
                    </button>
                    <button className={activeTab === "reviews1" ? "active" : ""} onClick={() => setActiveTab("reviews1")}>
                        ОЗВУЧКА
                    </button>
                    <button className={activeTab === "reviews2" ? "active" : ""} onClick={() => setActiveTab("reviews2")}>
                        КАРТЫ
                    </button>
                    <button className={activeTab === "reviews3" ? "active" : ""} onClick={() => setActiveTab("reviews3")}>
                        ПИСЬМЕНА
                    </button>
                    <div className="love">
                        <h1>Похожее</h1>
                        <Link>Добавить</Link>
                    </div>
                </div>

                <div className="content">
                    {activeTab === "description" && (
                        <div className="matushka">

                            <ExpandableText text="Тан У Хён, известный как Всемогущий Дух, стало настоящим кошмаром для этого мира. Он считал, что будет править бесконечно. Однако всё изменилось, когда Восемь Бессмертных, стражи покоя и порядка в Срединных Землях, запечатали его в глубинах озера Дончонхо. Прошла тысяча лет, и за это время Тан У Хён успокоился, а его жажда крови иссякла. Осталось лишь мучительное одиночество, изнуряющее Всемогущего Духа.В один из дней блуждающий Тан У Хён случайно встречает маленькую девочку Хва Со Ми. Одинокий странник почувствовал необычайную связь с этой малышкой, ведь она также одинока, как и он сам. История о необычной семье из Срединных Земель: воине с ледяным сердцем и милой, искренней девочке, чьи судьбы переплетаются, никого не оставит равнодушным." />

                            <div className="body1">
                                <h1>О тайтле</h1>
                                <a href="">Экшен</a>
                                <a href="">Боевые искусства</a>
                                <a href="">Драма</a>
                                <a href=""> История</a>
                                <a href="">Элементы юмора</a>
                                <a href="">Приключения</a>
                                <a href="">Сверхъестественное</a>
                                <a href="">Сёнэн</a>
                                <a href="">Трагедия</a>
                                <a href="">Мурим</a>
                                <a href="">Веб</a>
                                <a href="">В цвете</a>
                                <a href="">Культивация</a>
                                <a href="">Боги</a>
                                <a href="">ГГ мужчина</a>
                                <a href="">Учитель / ученик</a>
                                <a href="">ГГ имба</a>
                                <a href="">Умный ГГ</a>
                                <a href="">Бои на мечах</a>
                            </div>

                            <div className="other">
                                <h1>Альтернативные названия:</h1>
                                <ExpandableText text="Martial Peak / Вершина боевых искусств / 武炼巅峰 / Wǔ Liàn Diān Fēng / mulyeonjeonbong / Võ Luyện Đỉnh Phong / مارشال بيك / Wu Lian Dianfeng / 武煉巔峰 / MP / ذروة الفنون القتالية / 무련전봉 / MP, 武炼巅峰 / The Pinnacle of Martial Arts /" />
                            </div>

                            <div className="creator">

                                <h1>Создатели</h1>

                                <div className="slow">
                                    
                                    <div className="hot">
                                        <img src={manga2} alt="photo" />
                                        <div className="royal">
                                            <h3>Mo mo</h3>
                                            <p>Автор</p>
                                        </div>
                                    </div>

                                    <div className="hot">
                                        <img src={manga5} alt="photo" />
                                        <div className="royal">
                                            <h3>Pi Ka Pi</h3>
                                            <p>Студия</p>
                                        </div>
                                    </div>

                                    <div className="hot">
                                        <img src={manga4} alt="photo" />
                                        <div className="royal">
                                            <h3>AC.QQ (Tencent)</h3>
                                            <p>Издатель</p>
                                        </div>
                                    </div>

                                    <div className="hot">
                                        <img src={manga3} alt="photo" />
                                        <div className="royal">
                                            <h3>Webnovel</h3>
                                            <p>Издатель</p>
                                        </div>
                                    </div>

                                </div>

                            </div>

                            <div className="translater">

                                <h1>Переводчики</h1>

                                <div className="redy">
                                    
                                    <div className="day">
                                        <img src={manga2} alt="photo" />
                                        <div className="but">
                                            <h3>Бабка.Team</h3>
                                            <p>Глава вместо пирожков.</p>
                                        </div>
                                    </div>

                                </div>

                            </div>

                            <div className="comment">
                                <h1>Комментарии отключены</h1>
                                <p>Владелец или переводчик решил отключить комментарии под данным тайтлом.</p>
                            </div>

                        </div>
                    )}

                    {activeTab === "chapters" && (
                        <div className="strong">
                            <h1>Главы</h1>

                            <div className="beuty">

                                <div className="male">
                                    <input type="number" name="" id="" placeholder='Искать по номеру главы' />
                                </div>
                                
                                <div className="chapter">

                                    <div className="part">
                                        <h1>1</h1>
                                        <h2>Глава</h2>
                                        <p>1</p>
                                    </div>

                                    <div className="data">
                                        <h1>Бабка.Team</h1>
                                        <p>11/03/2025</p>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                    )}

                    {activeTab === "reviews" && (
                        <p></p>
                    )}

                    {activeTab === "reviews1" && (
                        <p></p>
                    )}

                    {activeTab === "reviews2" && (
                        <p></p>
                    )}

                    {activeTab === "reviews3" && (
                        <p></p>
                    )}

                    <div className="super1">

                        <div className="geto1">

                            {data.slice(0, visibleCount).map((item,index ) => (
                            <div className="car1" key={index}>

                                <Link to='/manga'></Link>

                                <div className="img1">
                                    <img src={item.img} alt={item.title} />
                                </div>

                                <div className="run1">

                                    <div className="name1">
                                        <h1>{item.title}</h1>
                                    </div>

                                    <div className="janr1">
                                        <h1>{item.genre}</h1>
                                    </div>

                                </div>

                            </div>
                            ))}

                        </div>

                        {visibleCount < data.length && (
                            <button className="load-more" onClick={handleLoadMore}>Ko'proq</button>
                        )}
                    </div>
                </div>

            </div>

        </div>

    </div>
    
    </> );
}

export default App;