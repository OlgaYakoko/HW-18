const userString = prompt();
const userNumb = +prompt();
const userSymbol = prompt();
const userBoolean = confirm();

let result = null;
let resultWithSymbol = null;

const padString = function (argString, argNumber, argSymbol, argBoolean) {

    if(argString === null || argString === "" ){return console.log(`err, enter the string!`)};
    if(!isNaN (argNumber)) {return console.log(`err, enter the number!`)};
    if(argSymbol.length > 1) {return console.log(`err, enter only one symbol`)};

    
    if(argNumber < argString.length){
        result = argString.substring(0, argNumber);  

        if(argBoolean === true) {
        resultWithSymbol = result + argSymbol
        console.log(resultWithSymbol);
        } else (resultWithSymbol = argSymbol + result)
        console.log(resultWithSymbol);

    } else (console.log(argString));
}

padString(userString, userNumb, userSymbol, userBoolean);

