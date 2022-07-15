
let nameElement = document.querySelector(".inputTxt")
let greetButton = document.querySelector(".last-button")
let displayElement = document.querySelector(".display")
let counterElement = document.querySelector(".counter")



let greetings = Greetings();
// Get the values stored in the local storage 

let getItem = {}
if(localStorage.getItem('nameEntered')){
  getItem = localStorage.getItem('nameEntered');
}
console.log(getItem)


greetButton.addEventListener('click', function() {
  
  let greetedName = nameElement.value;
  let languageElem = document.querySelector('.radio-button:checked');
  // alert(languageElem.value);
  
  greetings.setNames(greetedName)
  // console.log(greetings.greet(greetedName));
  if(languageElem){
  let message = greetings.greet(greetedName,languageElem.value)
  // console.log(message);
  displayElement.innerHTML = message;
}

  //store names into local storage , make sure that I convert my object that stores names into an string

    localStorage.setItem('nameEntered', JSON.stringify(nameElement.value));
    
    
    
    
    
    
    
  });
  
  
  
  

  

  
  
  


  
  
  
  