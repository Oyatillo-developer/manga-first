import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { Autoplay } from "swiper/modules";
import '../style/sitenew.scss';
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
  
const Slider = () => {
    return (<>
    
    <div className="help3">

        <div className="lion3">
            <h1>Горячие новинки</h1>
        </div>

        <div className="go3">
            <Swiper
                slidesPerView={8} 
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
                        <div className="car3">

                            <Link to='/manga'></Link>

                            <div className="img3">
                                <img src={item.img} alt={item.title} />
                            </div>
                            <div className="run3">
                                <div className="name3">
                                    <h1>{item.title}</h1>
                                </div>
                                <div className="janr3">
                                   <h1>{item.genre}</h1>
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
  
export default Slider;
