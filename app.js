let oneEuroIs = {
    "JPY": 156.5, 
    "USD": 1.07,  
    "GBP": 0.87, 
}

function fromDollarToYen(dollars) {
    return dollars * (oneEuroIs.JPY / oneEuroIs.USD);
}

function fromEuroToDollar(euros) {
    return euros * oneEuroIs.USD;
}

function fromYenToPound(yen) {
    return yen * (oneEuroIs.GBP / oneEuroIs.JPY);
}

module.exports = { fromDollarToYen, fromEuroToDollar, fromYenToPound };
