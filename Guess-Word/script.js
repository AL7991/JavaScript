const keys = [
    "Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P",
    "A", "S", "D", "F", "G", "H", "J", "K", "L",
    "Z", "X", "C", "V", "B", "N", "M",
    "Ą", "Ś", "Ę", "Ć", "Ż", "Ź", "Ń", "Ó" , "Ł" , "<"
];

const keyboard = document.getElementById("keyboard");
const answer = document.getElementById("answer");

function createKeyboard() {

for(let i = 1; i < 7 ; i++){
    const line = document.createElement("div");
    line.classList.add('lines');
    line.classList.add('line' + i);
    answer.appendChild(line);

    for(let j = 1; j < 7 ; j++){
        const forLetter = document.createElement("div");
        forLetter.classList.add('letters');
        forLetter.classList.add('line' + i + 'letter' + j);
        line.appendChild(forLetter);
    }

}

// CREATE KEYS

const letters = document.getElementsByClassName("letters");
let letterNumber = 0;

keys.forEach(key =>{
    const keyBtn = document.createElement("button");
    
    keyBtn.setAttribute("type", "button");
    keyBtn.classList.add("key");

    keyBtn.textContent = key;



    if(key !== "<"){
    keyBtn.addEventListener("click", () => {

        for(let i = 0 ; i < letters.length ; i++){
            if(letters[i].textContent === ""){
                letters[i].textContent = key;
                letterNumber = i;
                break;
            }

        }

    });

    } else {
    keyBtn.addEventListener("click", () => {
        try {
            letters[letterNumber].textContent = "";
            letterNumber --;
        } catch (error) {
            
        }
    });
    }

    keyboard.appendChild(keyBtn);

    });

}

window.addEventListener("DOMContentLoaded" , function() {
createKeyboard();
});

