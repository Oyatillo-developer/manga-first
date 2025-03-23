import React from "react";
import '../style/save.scss';
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
import { Link } from "react-router-dom";

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
  
const Save = () => {
    return (<>
    
    <div className="drink">

        <div className="more">
            <h1>Закладки</h1>
        </div>

        <div className="gas">
            
                {data.map((item) => (
                    
                    <div className="fall">

                        <Link to='/manga'></Link>

                        <div className="big">
                            <img src={item.img} alt={item.title} />
                        </div>

                        <div className="dont11">
                            <div className="hera">
                                <h1>{item.title}</h1>
                            </div>

                            <div className="hero">
                                <h1>{item.genre}</h1>
                            </div>
                        </div>
                    </div> 
                ))}
        </div>

    </div>
    
    </>);
};
  
export default Save;
