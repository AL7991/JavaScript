const topSite = document.getElementById("home");

const buttonTop = document.getElementById("topButton");

const texts = ["you can check my Portfolio.", "you can download my CV.", "you can Contact me."];
const element = document.getElementById("typingThings");
let countWords = 0;
let indexLetter = 0;
let currentText = '';
let letter = '';



(function typeLet() {
    if(countWords === 3){
        countWords = 0;
    }
    currentText = texts[countWords];
    letter = currentText.slice(0, ++indexLetter);
    element.textContent = letter;
    if(letter.length === currentText.length){
        countWords++;
        indexLetter = 0;
            return setTimeout(typeLet, 1200);
    }
    const time = setTimeout(typeLet, 140);

})();


let interval1 = setInterval(() => {topSite.getBoundingClientRect().top < 0 ? startShowingButton() : null} , 1000 / 60);
let interval2 = setInterval(() => {topSite.getBoundingClientRect().top >= 0 ? HideButton() : null} , 1000 / 60);

function startShowingButton(){
buttonTop.classList.remove("backToTopBeforeAdd");
buttonTop.classList.add("backToTop");
}

function HideButton(){
    buttonTop.classList.remove("backToTop");
    buttonTop.classList.add("backToTopBeforeAdd");
    }

 function scrollAppear(){


    const appearTextAbout = document.querySelector(".abouttext");
    const appearTextList = document.querySelector(".listy");
    const appearTextCV = document.querySelector(".contentCV");
    let position = appearTextAbout.getBoundingClientRect().top;
    let position2 = appearTextList.getBoundingClientRect().top;
    let position3 = appearTextCV.getBoundingClientRect().top;
    let screenPosition = window.innerHeight / 1.7;
        
    if(position < screenPosition){
        
        appearTextAbout.classList.add("abouttext-show");
        }

        if(position2 < screenPosition){
            appearTextList.classList.add("listy-show");
            }
        if(position3 < screenPosition){
            appearTextCV.classList.add("contentCV-show");
            }


    }
    

window.addEventListener("scroll",scrollAppear);




