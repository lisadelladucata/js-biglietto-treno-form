// DOM elements
// forms
const formElm = document.getElementById('form');
// fields
const nameSurnameFieldElm = document.getElementById('namesurname-field');
const kilometresFieldElm = document.getElementById('kilometres-field');
const ageFieldElm = document.getElementById('age-field');

// card
const nameSurnameCardElm = document.getElementById('namesurname');
const discountCardElm = document.getElementById('discount');
const totalPriceCardElm = document.getElementById('total-price');
const cpCodeCardElm = document.getElementById('cp-code');
const carriageCardElm = document.getElementById('carriage')

// prezzo biglietto
const price = 0.21;

//funzione per generare numero casuale della carrozza e del codice cp
function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

//funzione per stampare i dati nella card
formElm.addEventListener('submit', function(event) {
    event.preventDefault();
    const nameSurname = nameSurnameFieldElm.value;
    const kilometres = parseFloat(kilometresFieldElm.value);
    const age = ageFieldElm.value;
    let totalPrice = kilometres * price;
    nameSurnameCardElm.innerHTML = nameSurname;

    if (age === 'underage') {
        let discount = totalPrice * 0.20;
        let discountPrice = totalPrice - discount;
        totalPriceCardElm.innerHTML = `${discountPrice.toFixed(2)} €`;
        discountCardElm.innerHTML= `Biglietto con tariffa young`
    } else if (age === '65yearsold') {
        let discount = totalPrice * 0.40;
        let discountPrice = totalPrice - discount;
        totalPriceCardElm.innerHTML = `${discountPrice.toFixed(2)} €`;
        discountCardElm.innerHTML= `Biglietto con tariffa senior`
    } else {
        totalPriceCardElm.innerHTML = `${totalPrice.toFixed(2)} €`;
        discountCardElm.innerHTML= `Biglietto con tariffa standard`
    }

    carriageCardElm.innerHTML= randomNumber(1, 10)
    cpCodeCardElm.innerHTML= randomNumber(1000, 9999)
});
