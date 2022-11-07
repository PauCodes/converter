import { useContext } from "react";
import CurrencyContext from "../../context/CurrencyContext";
import { Link } from "react-router-dom";

const BackBtn = () => {

    const {reset } = useContext(CurrencyContext);

    return (
        <Link to='/' className="backBtn" onClick={reset}>X</Link>
    );
};

export default BackBtn;