import { useState } from "react";
import LengthResult from "./LengthResult";
import { BsArrowLeftRight } from 'react-icons/bs';
import BackBtn from "../UI/BackBtn";

const LengthConverter = () => {

    const [ userInput, setUserInput ] = useState(0);
    const [ result, setResult ] = useState(null);
    const [ from, setFrom ] = useState('Inches');
    const [ to, setTo ] = useState('Centimeters');

   console.log(userInput);
   

    const handleConvert = () => {
        const inch = 2.54;

        if(from === 'Inches') {
            setResult((userInput * inch).toFixed(2))
        }else {
            setResult((userInput / inch).toFixed(2))
        };
    };

    const handleToggleClick = () => {
        setFrom(to);
        setTo(from)        
    };

    const changeHandler = (e) => {
        setUserInput(e.target.value)
        setResult(null)
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
        <section className="LengthSection">
            <div className="wrapper">
                <header>            
                    <h2>Length</h2>
                </header>
                <div className="card">
                    <form onSubmit={submitHandler}>
                        <div className="tempContainer">
                            <label htmlFor="inches" className="unitName">{from}</label>
                            <button className="convertBtn" onClick={handleToggleClick}>{ <BsArrowLeftRight className="tempIcon"/>}</button>
                            <label htmlFor="centimeters" className="unitName">{to}</label>
                        </div>
                        <label htmlFor="lengthNumber" className="userInput">Enter a number</label>
                        <input onFocus={(e) => e.target.select()}  type="number"  name="lengthNumber" id="lengthNumber" value={userInput} onChange={changeHandler}/>  
                        <button type="submit">Convert</button>
                    </form>
                    {result && <LengthResult userInput={userInput} result={result} convertTo={to}/>}               
                </div>
            </div>
            <BackBtn/>
        </section>
    );
};

export default LengthConverter;