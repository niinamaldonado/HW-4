const message = prompt('Please enter a num between 2 and 10: '); /*/ ask user for input /*/

if (message >=2 && message <=10) { /*/ valid range /*/
    qOne.innerHTML = 'Your input number is ' + message;

    qTwo.innerHTML = 'The number of times to divide the number ' + message
    + ' by 2 to get a value less than one millionth is ' + countMillionth(message);

    qThree.innerHTML = writeStars(message);
    
    

    document.getElementById("qTwo").style.visibility = "visible";
    document.getElementById("qThree").style.visibility = "visible";



} else { /*/ invalid range /*/
    qOneInvalid.innerHTML = 'Your input is ' + message + 
    '. The valid input number is between 2 and 10. Please reload this page and try again. ';
}

function countMillionth(message) { /*/ function for qTwo /*/
    let count = 0;
    while (message > 1.0e-6) {
        message = message / 2;
        count += 1;
    }
    return count;
}

function writeStars(message){ /*/ function to write stars qThree /*/
    let text = "";
    for (i = message; i > 0; i--) {
        for (j = i; j > 0; j--) {
            text +=  "*" ;
        }
        text += "<br>";
    }
    return text;
}