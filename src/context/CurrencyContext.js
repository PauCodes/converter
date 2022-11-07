import { createContext, useEffect, useState } from "react";
import axios from "axios";

const CurrencyContext = createContext();

export const CurrencyProvider = ({children}) => {

    const url = "https://v6.exchangerate-api.com/v6/a9ae822acc76e889555a326d/latest/USD";
    // const key = "a9ae822acc76e889555a326d";

    const pairCodeUrl = `https://v6.exchangerate-api.com/v6/a9ae822acc76e889555a326d/pair/`;


    const [ currency, setCurrency ] = useState([]);
    const [ amountEntered, setAmountEntered ] = useState(0);
    const [ fromCurrency, setFromCurrency ] = useState("CAD");
    const [ toCurrency, setToCurrency ] = useState("CLP");
    const [ currencyFormSubmitted, setCurrencyFormSubmitted ] = useState(false);
    const [ conversionRate, setConversionRate ] = useState(0);
    const [ conversionResult, setConversionResult ] = useState(0);


    //API call to populate select el. 
    useEffect(() => {
        axios({
            method: "GET",
            url: url
        }).then((apiData) => {
            setCurrency(apiData.data.conversion_rates)
        })
    },[]);

    //API call for rate exchange
    useEffect(() => {
        if(fromCurrency !== '' && toCurrency !== ''){
             axios({
            method: 'GET',
            url: `${pairCodeUrl}${fromCurrency}/${toCurrency}`,
        }).then((apiData) => {
            setConversionRate(apiData.data.conversion_rate);    
        });
        };
       
    },[fromCurrency, pairCodeUrl, toCurrency]);

    const currencyCodesArray = Object.keys(currency); 

    const amountHandlerChange = (e) => {
        setAmountEntered(e.target.value);
        setConversionResult(null)
    };

    const fromCurrencyHandlerChange = (e) => {
        setFromCurrency(e.target.value);
    };

    const toCurrencyHandlerChange = (e) => {
        setToCurrency(e.target.value);
    };

    const conversionRateCalc = (x, y) => {
        setConversionResult((x * y).toFixed(2)); 
    };

    const currencySubmit = (e) =>{
        e.preventDefault();
        setCurrencyFormSubmitted(true)
        conversionRateCalc(amountEntered, conversionRate);  
    };

    const reset = () => {
        setConversionResult(0);
        setAmountEntered(0);
        setConversionRate(0);
        setCurrencyFormSubmitted(false);    
    };

    return (
        <CurrencyContext.Provider value={{
            currencyCodesArray,
            amountHandlerChange,
            amountEntered,
            conversionRate,
            fromCurrencyHandlerChange,
            toCurrencyHandlerChange,
            toCurrency,
            fromCurrency,
            currencySubmit,
            currencyFormSubmitted,
            conversionResult,
            reset,
        }}
        >
            {children}
        </CurrencyContext.Provider>
    );
};

export default CurrencyContext;