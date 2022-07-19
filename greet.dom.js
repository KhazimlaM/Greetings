
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
  event.target.style.color = 'red';

  let languageElem = document.querySelector('.radio-button:checked');


  let greetedName = nameElement.value;
  // alert(languageElem.value);

  // console.log(greetings.greet(greetedName));

  if (languageElem && greetedName) {
    let currLang = languageElem.value;
    // alert(languageElem)

    greetings.setNames(greetedName)
    let message = greetings.greet(greetedName, currLang)
    // console.log(message);
    if (message === "Please Enter a valid Name") {
      displayElement.style.color = "red"
      displayElement.innerHTML = message;
    }
    displayElement.innerHTML = message;
    counterElement.innerHTML = greetings.countNames();

  } else {
    let errorDisplay = greetings.errorHandling(greetedName, languageElem);

    if (errorDisplay === "Please select language and enter name"){ 
    greetElement.innerHTML = "Please select language and enter name"
  
    }
   
    displayElement.innerHTML = errorDisplay
    displayElement.style.color = "red"
  }
  

  //store names into local storage , make sure that I convert my object that stores names into an string

  localStorage.setItem('nameEntered', JSON.stringify(greetings.namesReturned()));






});















