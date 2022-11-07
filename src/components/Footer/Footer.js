import { useLocation } from "react-router-dom";

const Footer = () => {

    const location  = useLocation();

    return (       
        <footer className={location.pathname === "/" ? "homeFooter" : "sectionFooter"}>Made by <a href="https://www.paucodes.com/" target="_blank" rel="noreferrer">Pau</a></footer>
    );
};

export default Footer;