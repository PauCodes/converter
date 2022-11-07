import { useContext } from "react";
import CurrencyContext from "../../context/CurrencyContext";
import ExchangeResult from "./ExchangeResult";
import BackBtn from "../UI/BackBtn";

const CurrencyExchange = () => {

    const { currencyCodesArray,  fromCurrencyHandlerChange, toCurrencyHandlerChange ,currencySubmit, amountHandlerChange, amountEntered, currencyFormSubmitted, fromCurrency, toCurrency } = useContext(CurrencyContext);

    const countryCodes =  currencyCodesArray.map((code, index) => {
        return <option key={index} value={code}>{code}</option>
    });

    console.log();
    
    
    return (
        <section className="currencySection">
            <div className="wrapper" >
                <header>            
                    <h2>Currency</h2>
                </header>
                <div className="card">
                    <form onSubmit={currencySubmit}>
                        <label htmlFor="amount" className="userInput">Enter amount</label>
                        <input onFocus={(e) => e.target.select()} type="number"  step="0.01" name="amount" id="amount" value={amountEntered} onChange={amountHandlerChange}/>
                        <div className="selectContainer">
                            <label htmlFor="currencyFrom" className="sr-only">From:</label>
                            <select name="currencyFrom" id="currencyFrom" onChange={fromCurrencyHandlerChange}>
                                <option value="CAD">{fromCurrency}</option>
                                {countryCodes}
                            </select>
                            <label htmlFor="currencyTo" className="sr-only">To:</label>
                            <select name="currencyTo" id="currencyTo" onChange={toCurrencyHandlerChange}>
                                <option value="CLP">{toCurrency}</option>
                                {countryCodes}
                            </select>
                        </div>
                        <button type="submit">Convert</button>
                    </form>
                    { currencyFormSubmitted &&  <ExchangeResult />}  
                </div>                  
            </div>
            <BackBtn />
        </section>
    );
};

export default CurrencyExchange;