//variables
let depressed = document.querySelector("depressed-Btn");
let excited = document.querySelector("excited-Btn");
let hangry = document.querySelector("hangry-Btn");
let happy = document.querySelector("happy-Btn");
let hungry = document.querySelector("hungry-Btn");
let mad = document.querySelector("mad-Btn");
let motivated = document.querySelector("motivated-Btn");
let nervous = document.querySelector("nervous-Btn");
let sad = document.querySelector("sad-Btn");
let tired = document.querySelector("tired-Btn");



//do i really want to use the prompt, if I'm using buttons?
//functions
function moodSelector(array) {
    const mood = prompt("How are you feeling today?");
    switch(mood.toLowerCase()){
        case 'depressed':
            alert("Sad ass bitch");
            //change background
            //add text
            break;
        case 'excited':
            //change background
            //add text
            break;  
        case 'hangry':
            //change background
            //add text
            break;
        case 'happy':
            //change background
            //add text
            break;
        case 'hungry':
            //change background
            //add text
            break;
        case 'mad':
            //change background
            //add text
            break;
        case 'motivated':
            //change background
            //add text
            break;
        case 'nervous':
            //change background
            //add text
            break;
        case 'sad':
            //change background
            //add text
            break;
        case 'tired':
            //change background
            //add text
            break;

    }

}

moodSelector();