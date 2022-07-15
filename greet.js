// Create a function to set names of users and count them

function Greetings() {

    var storedNames = {}


    function setNames(namez) {
        if (storedNames[namez] === undefined) {
            storedNames[namez] = 1;
        }
        else {
            storedNames[namez]++;
        }

    }

    // Create a function to greet the name with the selected language

    function greet(name, language) {
        let greetMessage = "";
        if (language !== null) {
            if (language === "xhosa") {
                return "Molo, " + name;
            }
            else if (language === "english") {
                return "Hello, " + name;
            }
            else if (language === "venda") {
                return "Nda, " + name;
            }
        }
        return greetMessage;
    }


    // Get the length of values in the object but first convert it into a list/array
    function countNames() {
        let counter = Object.keys(storedNames);
        return counter;
    }

    // Create a function that returns the stored names
    function namesReturned() {
        return storedNames
    }

    // handling erros when theres no names, nothing selected and when names contain numeric values
    function errorHandling(names, languages) {

        if (names === null) {
            return "Please enter your name ";
        }
        if (languages === null) {
            return "Please select a language";
        }
        if (names && languages === null) {
            return "Please enter a name and select a language";
        }
        if (names && languages === Number) {
            return "Please do not enter any numeric values";
        }

    }





    return {
        setNames,
        countNames,
        greet,
        namesReturned,
        errorHandling,

    }
}



