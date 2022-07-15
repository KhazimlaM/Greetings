
let nameElement = document.querySelector(".inputTxt")
let greetButton = document.querySelector(".last-button")
let displayElement = document.querySelector(".display")
let counterElement = document.querySelector(".counter")
let errorElement = document.querySelector(".errors")



// Get the values stored in the local storage 

let getItemNames = {}
if (localStorage.getItem('nameEntered')) {
  getItemNames = JSON.parse(localStorage.getItem('nameEntered'));
}


let greetings = Greetings(getItemNames);

counterElement.innerHTML = greetings.countNames();

greetButton.addEventListener('click', function () {

  let greetedName = nameElement.value;
  let languageElem = document.querySelector('.radio-button:checked');
  // alert(languageElem.value);

  // console.log(greetings.greet(greetedName));

  if (languageElem) {
    if(greetedName) {
      greetings.setNames(greetedName)
      let message = greetings.greet(greetedName, languageElem.value)
      console.log(message);
      displayElement.innerHTML = message;
      counterElement.innerHTML = greetings.countNames();
    }
 
    errorElement.innerHTML = greetings.errorHandling();

  }

  //store names into local storage , make sure that I convert my object that stores names into an string

  localStorage.setItem('nameEntered', JSON.stringify(greetings.namesReturned()));









});















