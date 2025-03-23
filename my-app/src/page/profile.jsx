import '../style/profile.scss'
import my from '../img/anime 3.jpg'
import { RxExit } from "react-icons/rx";



function Prof() {
    return ( <>
    
    <div className="expres">
        <div className="shortcut">
            <div className="blod">
                <div className="john">
                    <img src={my} alt="" />
                </div>
                <div className="smit">
                    <h1>Ortiqov Oyatillo</h1>
                    <p>oyatilloortiqov3@gmail.com</p>
                </div>
            </div>
            <div className="ortga">
                <button> Chiqish <RxExit className='chiq' /> </button>
            </div>
        </div>
    </div>
    
    </> );
}

export default Prof;