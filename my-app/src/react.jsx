import { Routes, Route } from "react-router-dom";
import Navbar from "./page/navbar";
import MySlider from "./page/online";
import My from "./page/new";
import Slider from "./page/sitenew";
import Ongoin from "./page/ongoin";
import Contact from "./page/contacts";
import Trend from "./page/trending";
import App from "./page/manga";
import Search from "./page/search";
import Save from "./page/save";
import Bell from "./page/notification";
import Login from "./page/login";
import Prof from "./page/profile";
import Reading from "./page/riding";


function Proyect() {
    return ( <>
    <Routes>
        <Route path="/" element={<> <Navbar/> <MySlider/> <My/> <Slider/> <Ongoin/> <Contact/> </>}/>
        <Route path="/trend" element={<> <Navbar/> <Trend/> <Contact/> </>}/>
        <Route path="/manga" element={<> <Navbar/> <App/> </>}/>
        <Route path="/search" element={<> <Search/> </>}/>
        <Route path="/save" element={<> <Navbar/> <Save/> <Contact/> </>}/>
        <Route path="/bell" element={<> <Navbar/> <Bell/> <Contact/> </>}/>
        <Route path="/login" element={<> <Login/> </>}/>
        <Route path="/reading" element={<> <Reading/> </>}/>
    </Routes>
    </> );
}

export default Proyect;