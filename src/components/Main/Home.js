import { Link } from "react-router-dom";
import { MdAttachMoney } from 'react-icons/md';
import { MdPhotoSizeSelectSmall } from 'react-icons/md';
import { FaTemperatureHigh } from 'react-icons/fa';
import { GiPathDistance } from 'react-icons/gi';
import Footer from "../Footer/Footer";

const Home = () => {
    return (
        <>
        <main className="control">
            <div className="homeWrapper">
                <header>            
                    <h1>Personal Converter</h1>
                </header>
                <div className="options card">
                    <Link to='/currency-converter'><button className="roundBtn">{<MdAttachMoney className="mainIcon"/>}Currency</button></Link>
                    <Link to='/length-converter'><button className="roundBtn">{<MdPhotoSizeSelectSmall className="mainIcon"/>}Length</button></Link>
                    <Link to='/distance-converter'><button className="roundBtn">{<GiPathDistance className="mainIcon"/>}Distance</button></Link>
                    <Link to='/temperature-converter'><button className="roundBtn">{<FaTemperatureHigh className="mainIcon"/>}Temperature</button></Link>
                </div>
            </div>
        </main>
    </>
    );
};

export default Home;