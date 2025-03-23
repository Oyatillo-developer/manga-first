import React from "react";
import '../style/contacts.scss'
import { FaInstagram } from "react-icons/fa6";
import { BiLogoTelegram } from "react-icons/bi";






function Contact() {
    return ( <>
    
    <div className="watch">
        <div className="cool">

            <h1>2025 © MaNo</h1>
            <a href="">DMCA</a>
            <a href="">Для правообладателей</a>
            <a href="">Пользовательское соглашение</a>
            <a href="">Помощь по сайту</a>

            <div className="chanel">
                <a href=""><FaInstagram className="instagram" /></a>
                <a href=""><BiLogoTelegram className="telegram" /></a>
            </div>
        </div>
    </div>
    
    </> );
}

export default Contact;
