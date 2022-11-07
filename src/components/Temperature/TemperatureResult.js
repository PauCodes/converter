const TemperatureResult = ({userInput, result, convertTo}) => {
    // console.log(userInput);
    
    return (
        <h3>{result} {convertTo}</h3>
    );
};

export default TemperatureResult;