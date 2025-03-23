import '../style/ongoin.scss';
import React, { useState } from 'react';

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
import { Link } from 'react-router-dom';

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

function Ongoin() {

    const [visibleCount, setVisibleCount] = useState(5);
    const handleLoadMore = () => {
        setVisibleCount(prev => prev + 5);
    };
    
    return (
        <div className="dont">
            <div className="super">
                <div className="get">
                    <h1>Обновления</h1>
                    <p>Только мои закладки</p>
                </div>
                <div className="geto">
                    {data.slice(0, visibleCount).map((item, index) => (
                        <div className="car" key={index}>

                            <Link to='/manga'></Link>

                            <div className="img">
                                <img src={item.img} alt={item.title} />
                            </div>
                            <div className="run">
                                <div className="name">
                                    <h1>{item.title}</h1>
                                </div>
                                <div className="janr">
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

            <div className="super">
                <div className="get">
                    <h1>В тренде</h1>
                    <p>Только мои закладки</p>
                </div>
                <div className="geto">
                    {data.slice(0, visibleCount).map((item, index) => (
                        <div className="car" key={index}>

                            <Link to='/manga'></Link>

                            <div className="img">
                                <img src={item.img} alt={item.title} />
                            </div>
                            <div className="run">
                                <div className="name">
                                    <h1>{item.title}</h1>
                                </div>
                                <div className="janr">
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
    );
}

export default Ongoin;
