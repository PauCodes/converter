import { useState } from "react";
import TemperatureResult from "./TemperatureResult";
import { BsArrowLeftRight } from 'react-icons/bs';
import BackBtn from "../UI/BackBtn";

const TemperatureConverter = () => {

    const [ userInput, setUserInput ] = useState(0);
    const [ result, setResult ] = useState(null);
    const [ from, setFrom ] = useState('Fahrenheit');
    const [ to, setTo ] = useState('Celsius');

    console.log(userInput);
    
    const handleConvert = () => {    
           if(from === 'Fahrenheit') {
                setResult(((userInput - 32) * 5/9).toFixed());
           }else {
                setResult(((userInput * 9/5) + 32).toFixed())
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
        }else {
            return;
        };
       
        setUserInput("");
    };

    return (
        <section className="temperatureSection">
        <div className="wrapper">
            <header className="tempHeader">            
                <h2>Temperature</h2>
            </header>
            <div className="card tempCard">
                <form  onSubmit={submitHandler}>
                    <div className="tempContainer">
                        <label htmlFor="from" className="unitName">{from}</label> 
                        <button className="convertBtn" onClick={handleToggleClick}> { <BsArrowLeftRight className="tempIcon"/>}</button>                
                        <label htmlFor="to" className="unitName">{to}</label>
                    </div>
                    <label htmlFor="temperature" className="userInput">Enter a number</label>
                    <input onFocus={(e) => e.target.select()}  type="number"  name="temperature" id="temperature" value={userInput} onChange={changeHandler}/>        
                    <button type="submit">Convert</button>
                </form>
                {result && <TemperatureResult userInput={userInput} result={result} convertTo={to}/>}
            </div>       
        </div>
        <BackBtn />
</section>
    );
};

export default TemperatureConverter;