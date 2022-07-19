
let nameElement = document.querySelector(".inputTxt")
let greetButton = document.querySelector(".last-button")
let displayElement = document.querySelector(".display")
let counterElement = document.querySelector(".counter")
let errorElement = document.querySelector(".errors")
let resetButton = document.querySelector(".first-button")


// Get the values stored in the local storage 
let getItemNames = {}
if (localStorage.getItem('nameEntered')) {
  getItemNames = JSON.parse(localStorage.getItem('nameEntered'));
}


let greetings = Greetings(getItemNames);

counterElement.innerHTML = greetings.countNames();

// eventListener for reset button

resetButton.addEventListener('click', function () {
  event.target.style.color = 'red';
  // alert("hi")
  localStorage.clear();
  counterElement.innerHTML = greetings.countNames().value = 0;
 
});

greetButton.addEventListener('click', function () {
  event.target.style.color = 'red';


  let languageElem = document.querySelector('.radio-button:checked');

  let greetedName = nameElement.value;
  // alert(languageElem.value);

  if (languageElem && greetedName) {
    let currLang = languageElem.value;
    // alert(languageElem)

    greetings.setNames(greetedName)
    let message = greetings.greet(greetedName, currLang)
    // console.log(message);

    if (message === "Please enter a valid name") {
      displayElement.style.color = "red"
      displayElement.innerHTML = message;
    }
    displayElement.innerHTML = message;
    setTimeout(() => {
      displayElement.innerHTML = "";
    }, 5000);
    counterElement.innerHTML = greetings.countNames();

  } else {
    let errorDisplay = greetings.errorHandling(greetedName, languageElem);

    if (errorDisplay === "Please select language and enter name") {
      greetElement.innerHTML = "Please select language and enter name"

    }

    displayElement.innerHTML = errorDisplay
  
    displayElement.style.color = "red"
    setTimeout(() => {
      displayElement.innerHTML = "";
    }, 5000);


  }

  // setTimeout(() => {
  //     greetElement.style.color = "black"
  //     greetElement.innerHTML = "Your message will show here!";
  //   }, 5000);


  //store names into local storage , make sure that I convert my object that stores names into an string

  localStorage.setItem('nameEntered', JSON.stringify(greetings.namesReturned()));




});















