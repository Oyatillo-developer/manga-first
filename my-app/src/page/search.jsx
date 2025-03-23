import React from "react";
import { IoSearchOutline } from "react-icons/io5";
import { IoCloseOutline } from "react-icons/io5";
import '../style/search.scss'


function Search({ onClose }) {

    return ( <>
    
    <div className="girls">

        <button onClick={onClose}></button>

        <div className="devil">
            <div className="time">
                <IoSearchOutline className="nier" />
                <input type="text" placeholder="Nima qidiryapsiz" />
                <button  onClick={onClose}><IoCloseOutline className="niga" /></button>
            </div>
        </div>
    </div>
    
    </> );
}

export default Search;