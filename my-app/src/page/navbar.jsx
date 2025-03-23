import { Link } from 'react-router-dom';
import '../style/navbar.scss'
import { IoIosSearch } from "react-icons/io";
import { MdOutlineBookmarks } from "react-icons/md";
import { LuSunMoon } from "react-icons/lu";
import { HiOutlineBellAlert } from "react-icons/hi2";
import { RxEnter } from "react-icons/rx";
import { useState } from "react";
import SearchModal from "../page/search";
import SearchModa2 from "../page/login";




function Navbar() {


    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [isSearchOpen2, setIsSearchOpen2] = useState(false);


    return ( <>
    
    <div className="home">
        <div className="boss">
            
            <div className="navigate">
                <div className="logo">
                    <Link to="/">Ma</Link>
                    <Link to="/">No</Link>
                </div>

                <div className="links">
                    <Link>Каталог</Link>
                    <Link to='/trend'>Популярное</Link>
                    <Link to='/'>Новости</Link>
                </div>
            </div>

            <div className="profile">

                <Link onClick={() => setIsSearchOpen(true)} > <IoIosSearch className='icon' /> </Link>
                {/* Modalni faqat button bosilganda ochish */}
                {isSearchOpen && <SearchModal onClose={() => setIsSearchOpen(false)} />}

                <Link to='/save'><MdOutlineBookmarks className='icon' /></Link>

                <a href=""><LuSunMoon className='icon' /></a>
                
                <Link to='/bell'><HiOutlineBellAlert className='icon' /></Link>

                <Link onClick={() => setIsSearchOpen2(true)} > <RxEnter className='icon' /> </Link>
                {/* Modalni faqat button bosilganda ochish */}
                {isSearchOpen2 && <SearchModa2 onClose={() => setIsSearchOpen2(false)} />}

            </div>

        </div>
    </div>
    
    </> );
}

export default Navbar;