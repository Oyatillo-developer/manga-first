import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { Autoplay } from "swiper/modules";
import '../style/new.scss';
import manga1 from '../img/anime.jpg';
import manga2 from '../img/anime 2.jpg';
import manga3 from '../img/anime 3.jpg';
import manga4 from '../img/anime 4.jpg';
import manga5 from '../img/anime 5.jpg';
import manga6 from '../img/anime 6.jpg';
import manga7 from '../img/anime.jpg';
import manga8 from '../img/anime 2.jpg';
import manga9 from '../img/anime 3.jpg';
import manga10 from '../img/anime 4.jpg';
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
  
const My = () => {
    return (<>
    
    <div className="help1">

        <div className="lion1">
            <h1>Новое на сайте</h1>
        </div>

        <div className="go1">
            <Swiper
                slidesPerView={1} 
                spaceBetween={0} 
                loop={true} 
                autoplay={{ delay: 5500, disableOnInteraction: false }} 
                grabCursor={true} /* Kursorni "drag" qilish uchun qo‘shiladi */
                freeMode={true} /* Telefon ekranida ham erkin surish imkoniyati yaratadi */
                touchMove={true} /* Qo‘lda surishni yoqish */
                simulateTouch={true}  /* Touchpad va sensor ekranlar uchun touch effektini yoqadi */
                touchRatio={1}  /* Touch harakatning sezgirligini optimallashtiradi */
                longSwipes={true}  
                longSwipesRatio={0.1}
                modules={[Autoplay]}
            >
                {data.map((item, index) => (
                    <SwiperSlide key={index} >
                        <div className="car1">
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
                                
                                <div className="book">
                                    <Link to='/manga'></Link>
                                    <h1>Читать</h1>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>

    </div>
    
    </>);
};
  
export default My;
