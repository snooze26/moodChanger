//variables
let depressed = document.querySelector("#depressed-Btn");
let excited = document.querySelector("#excited-Btn");
let hangry = document.querySelector("#hangry-Btn");
let happy = document.querySelector("#happy-Btn");
let hungry = document.querySelector("#hungry-Btn");
let mad = document.querySelector("#mad-Btn");
let motivated = document.querySelector("#motivated-Btn");
let nervous = document.querySelector("#nervous-Btn");
let sad = document.querySelector("#sad-Btn");
let tired = document.querySelector("#tired-Btn");
const buttons = Array.from(document.querySelectorAll("#depressed-Btn, #excited-Btn, #hangry-Btn, #happy-Btn, #hungry-Btn, #mad-Btn, #motivated-Btn, #nervous-Btn, #sad-Btn, #tired-Btn"));

const container = document.querySelector("#container");
const message = document.querySelector("#message");


//functions
function moodSelector(mood) {
    switch(mood){
        case "depressed":
            document.body.style.background = "radial-gradient(circle, #212136, #181616, #808080)";            
            message.textContent = "Things will get better just try to stay as strong as you can";
            message.style.color = "#ffffff";
            break;

        case "excited":
            document.body.style.background = "radial-gradient(circle, #ff0000, #cc9900, #ffda47)";            
            message.textContent = "Things are looking good!!!";
            message.style.color = "#ffffff";
            break;  

        case "hangry":
            document.body.style.background = "radial-gradient(circle, #b30000, #006600, #ffbf00)";            
            message.textContent = "HULK MAD!! FEED HULK!!";
            message.style.color = "#ffffff";
            break;

        case "happy":
            document.body.style.background = "radial-gradient(circle, #33cccc, #ffffff, #ff99cc)";            
            message.textContent = "Lets have a good time! We only live so long.";
            message.style.color = "#706f6f";
            break;

        case "hungry":
            document.body.style.background = "radial-gradient(circle, #663300, #003300, #006600)";            
            message.textContent = "Foooooooood pleeeeeeeeease";
            message.style.color = "#ffffff";
            break;

        case "mad":
            document.body.style.background = "radial-gradient(circle, #b30000, #ff1a1a, #000000)";            
            message.textContent = "Scream or beat up a pillow <3";
            message.style.color = "#ffffff";
            break;

        case "motivated":
            document.body.style.background = "radial-gradient(circle, #99ffff, #99ff99, #ccffff)";            
            message.textContent = "Let's get to it! Don't be the thing that holds you back!!";
            message.style.color = "#706f6f";
            break;
            
        case "nervous":
            document.body.style.background = "radial-gradient(circle, #59b300, #b38600, #ffbf00)";            
            message.textContent = "Take deep breaths, center yourself. Oosah. Oosah";
            message.style.color = "#ffffff";
            break;

        case "sad":
            document.body.style.background = "radial-gradient(circle, #00264d, #404040)";            
            message.textContent = "Things will get better. Try to stay as strong as you can. Take your time to feel your emotions";
            message.style.color = "#ffffff";
            break;

        case "tired":
            document.body.style.background = "radial-gradient(circle, #333333, #00001a)";            
            message.textContent = "Go to sleep!";
            message.style.color = "#ffffff";
            break;

    }

}

depressed.addEventListener("click", () => moodSelector("depressed"));
excited.addEventListener("click", () => moodSelector("excited"));
hangry.addEventListener("click", () => moodSelector("hangry"));
happy.addEventListener("click", () => moodSelector("happy"));
hungry.addEventListener("click", () => moodSelector("hungry"));
mad.addEventListener("click", () => moodSelector("mad"));
motivated.addEventListener("click", () => moodSelector("motivated"));
nervous.addEventListener("click", () => moodSelector("nervous"));
sad.addEventListener("click", () => moodSelector("sad"));
tired.addEventListener("click", () => moodSelector("tired"));


moodSelector();