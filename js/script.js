//DOM elements
// forms
const formElm = document.getElementById('form')
//fields
const nameSurnameFieldElm = document.getElementById('namesurname-field');
const kilometresElm = document.getElementById('kilometres-field');
const ageElm = document.getElementById('age-field');


//event
formElm.addEventListener('submit' , function(event){
    event.preventDefault();
    console.log(event)
})
