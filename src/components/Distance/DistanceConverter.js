import { useState } from "react";
import DistanceResult from "./DistanceResult";
import { BsArrowLeftRight } from 'react-icons/bs';
import BackBtn from "../UI/BackBtn";


const DistanceConverter = () => {

    const [ userInput, setUserInput ] = useState(0);
    const [ result, setResult ] = useState(null);
    const [ from, setFrom ] = useState('Miles');
    const [ to, setTo ] = useState('Km');
    

   const handleConvert = () => {
    const mile = 1.609;
    // const km = 0.621;

       if(from === 'miles') {
            setResult((userInput * mile).toFixed());
       }else {
            setResult((userInput / mile).toFixed())
       };
   };

    const handleToggleClick = () => {
        setFrom(to);
        setTo(from)
    };

    const changeHandler = (e) => {
        setUserInput(e.target.value);
        setResult(null);
    };

    const submitHandler = (e) => {
        e.preventDefault();
        if(userInput > 0) {
            setResult(handleConvert);
        } else {
            return;
        };
        
        setUserInput("");
    };

    return (
        <section className="DistanceSection">
            <div className="wrapper">
                <header>            
                    <h2>Distance</h2>
                </header>
                <div className="card">
                    <form onClick={submitHandler}>
                        <div className="tempContainer"> 
                            <label htmlFor="miles" className="unitName">{from}</label>
                            <button className="convertBtn" onClick={handleToggleClick}> { <BsArrowLeftRight />}</button>  
                            <label htmlFor="km"className="unitName">{to}</label>
                        </div>
                        <label htmlFor="distanceNumber" className="userInput">Enter a number</label>
                        <input onFocus={(e) => e.target.select()} type="number"  name="distanceNumber" id="distanceNumber" value={userInput} onChange={changeHandler}/> 
                        <button type="submit">Convert</button>
                    </form>                  
                    {result && <DistanceResult result={result} convertTo={to}/>}
                </div>
            </div>
            <BackBtn/>
        </section>
    );
};

export default DistanceConverter;