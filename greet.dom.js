// get a reference to all the greet elements

// let english = document.querySelector(".radio-button2")
// let venda = document.querySelector(".radio-button3")
let nameElement = document.querySelector(".inputTxt")
let greetButton = document.querySelector(".last-button")
let theName = document.querySelector(".names")
let displayElement = document.querySelector(".display")
let counterElement = document.querySelector(".counter")

// create a variables that will keep track of all the settings


// create an instance for greetMe

  
//add an event listener for when the 'Click Me' button is pressed
greetButton.addEventListener('click', function() {
   
   
  
  let language = document.querySelector('.radio-button:checked');
  let result = language.value;
  var storeNames = [];
  var counter = 0;
   counter += 1;
   counterElement.innerHTML = counter;
  

  var storage = nameElement.value;
  if(storage !== "")
  
  
  if(result !== null){
    if(result === "xhosa" ){
      displayElement.innerHTML = "Molo, " + storage;
    }
    else if(result === "english"){
      displayElement.innerHTML = "Hello, " + storage;
    }
    else if(result === "venda"){
      displayElement.innerHTML = "Nda, " + storage;
      
    }
   

   
    
    storeNames.push(storage);
    console.log(storeNames);
}


});




