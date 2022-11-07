import { useContext } from "react";
import CurrencyContext from "../../context/CurrencyContext";

const ExchangeResult = () => {

    const { conversionResult, amountEntered, conversionRate, toCurrency} = useContext(CurrencyContext)
    return (
        <div>
            {
                amountEntered && conversionRate  ? <h3>$ {conversionResult} {toCurrency}</h3> : <h3>Please select a currency</h3>
            }
            
        </div>
    );
};

export default ExchangeResult;