fetch('text.txt')
  .then(response => response.text())
  .then(data => {

const words = [];

for(element of data.trim().split(/\r\n/)){
    const tuUpperCase = element.toUpperCase();
    words.push(tuUpperCase);
}


const answer = document.getElementById("answer");
const lines = document.getElementsByClassName("lines");
const rowsKeyboard = document.getElementsByClassName('rows');
const keys = [
    "Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P",
    "A", "S", "D", "F", "G", "H", "J", "K", "L",
    "Z", "X", "C", "V", "B", "N", "M",
    "Ą", "Ś", "Ę", "Ć", "Ż", "Ź", "Ń", "Ó" , "Ł" , "<"
];

let WinWordNumber = 0;
let lineNumber = 0;
let letterNumber = 0;
let WinWordNumbersArray;

WinWordNumbersArray = randomNumbers();

function randomNumbers() {
    let setRandom = new Set();
    let arr = [];
    let i = 0;
    while(setRandom.size < 10){    
      const random = Math.floor(Math.random() * 101);
      if(!setRandom.has(random)){
        setRandom.add(random);
        arr.push(random);
        i++;
      }
    }
    return arr;
  }

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

let keynumber = 1;

keys.forEach(key =>{
    const keyBtn = document.createElement("button");
    keyBtn.setAttribute("type", "button");
    keyBtn.classList.add("key");
    keyBtn.textContent = key;

    if(key !== "<"){
    keyBtn.addEventListener("click", () => {

        for(let i = 0; i < lines[lineNumber].children.length ; i++){
            if(lines[lineNumber].children[i].textContent === ""){
                lines[lineNumber].children[i].textContent = key;
                letterNumber = i;

                if( i + 1 === lines[lineNumber].children.length){
                    const word = lineToString();
                    checkWord(word);
                    break;
                }
                break;
            }
        }
    });   

    }else{
    keyBtn.addEventListener("click", () => {
   
            try {
                lines[lineNumber].children[letterNumber].textContent = "";
                if(letterNumber + 1 === lines[lineNumber].children.length){
                   for(element of lines[lineNumber].children){
                        element.classList.remove('letterPositionWrong');
                    }
                }
                letterNumber --;
                
            } catch (error) {
        }
    });
    }

    if(keynumber <= 10){
        rowsKeyboard[0].appendChild(keyBtn);
    }else if(keynumber <= 19 ){
        rowsKeyboard[1].appendChild(keyBtn);
    }else if(keynumber <=26){
        rowsKeyboard[2].appendChild(keyBtn);
    }else{
        rowsKeyboard[3].appendChild(keyBtn);
    }

    keynumber++;

});

}

function lineToString(){

    let word = "";
    for(element of lines[lineNumber].children){
        word += element.textContent;
    }
    return word;
    
}

function checkWord(word){

    const keyElements = document.getElementsByClassName('key');
    const SplitWord = word.split('');
    const winWordCharArray = words[WinWordNumber].split('');



    for(element of words){
        if(word === element){

            if(word === words[WinWordNumber]){

                winSituation(winWordCharArray , keyElements);

                return null;


            }else{

                addClassToLetters(SplitWord, winWordCharArray, lineNumber, keyElements);

                getRidOfTooManyYellowLetters(lineNumber, winWordCharArray);

                lineNumber++;

                if(lineNumber === 6){ 
                    
                    lineNumber = 0;
                    letterNumber = 0;
                    WinWordNumber++;
                    
                    alert('Było to słowo: ' + words[WinWordNumber]);

                    window.location.reload(true);

                }

                return null;
            }
        }
    }
    for(element of lines[lineNumber].children){
        element.classList.add('letterPositionWrong');
    }
}

function winSituation(winWordCharArray , keyElements){
    
    WinWordNumber++;

    for(forLetterElement of lines[lineNumber].children){
        forLetterElement.classList.add('letterPositionGood');
    }
    for(let i = 0; i <  winWordCharArray.length ; i++){
    for(elementKey of keyElements){
        if(elementKey.textContent === winWordCharArray[i]){
            elementKey.classList.add('keyPositionGood');
            }
        }
    }
    alert('win');

    window.location.reload(true);
}

function addClassToLetters(SplitWord, winWordCharArray, lineNumber, keyElements){
    for(let i = 0; i <  SplitWord.length ; i++){
        for(let j = 0 ; j <  winWordCharArray.length ; j++){
            if(SplitWord[i] === winWordCharArray[j]){
                if(i === j){
                    lines[lineNumber].children[i].classList.remove('letterPositionDifrent');
                    lines[lineNumber].children[i].classList.remove('letterPositionBad');
                    lines[lineNumber].children[i].classList.add('letterPositionGood');
                    for(element of keyElements){
                        if(element.textContent === SplitWord[i]){
                            element.classList.add('keyPositionGood');
                            element.classList.remove('keyPositionDifrent');
                            element.classList.remove('keyPositionBad');
                        }
                    }
                    
                }else{

                    lines[lineNumber].children[i].classList.remove('letterPositionBad');
                    if(!lines[lineNumber].children[i].classList.contains('letterPositionGood')){
                        lines[lineNumber].children[i].classList.add('letterPositionDifrent');
                    }

                    for(element of keyElements){
                        if(element.textContent === SplitWord[i]){
                            if(!element.classList.contains('keyPositionGood')){
                                element.classList.remove('keyPositionBad');
                                element.classList.add('keyPositionDifrent');
                            }
                        }
                    }

                }

            }else{
                if(! lines[lineNumber].children[i].classList.contains('letterPositionDifrent') && !lines[lineNumber].children[i].classList.contains('letterPositionGood')){
                    lines[lineNumber].children[i].classList.add('letterPositionBad');
                }
                for(element of keyElements){
                    if(element.textContent === SplitWord[i]){
                        if(!element.classList.contains('keyPositionDifrent') && !element.classList.contains('keyPositionGood')){
                            element.classList.add('keyPositionBad');
                        }
                    }
                }

            }
        }
    }
}

function getRidOfTooManyYellowLetters(lineNumber, winWordCharArray){

    let howMuchYellowLetters = new Set();

    for(element of lines[lineNumber].children){
        if(element.classList.contains('letterPositionDifrent')){
            howMuchYellowLetters.add(element.textContent);
        }
    }
 
    for(element of howMuchYellowLetters){
        let yellowLetters = 0;
        let greenLetters = 0;
        let lettersInWinWord = 0;
        let arrayOfYellow = [];

        for(element2 of lines[lineNumber].children){
            if(element2.classList.contains('letterPositionDifrent')){
                if(element2.textContent === element){
                    yellowLetters ++;
                }
            }
            if(element2.classList.contains('letterPositionGood')){
                if(element2.textContent === element){
                    greenLetters ++;
                }
            }
        }

        for(element3 of winWordCharArray){
            if(element3 === element){
                lettersInWinWord++;
            }
        }

            while((yellowLetters + greenLetters) > lettersInWinWord){
                for(element5 of lines[lineNumber].children){
                        if(element5.classList.contains('letterPositionDifrent')){
                        if(element5.textContent === element){                                        
                        arrayOfYellow.push(element5);
                        }
                    }
                }

                arrayOfYellow[arrayOfYellow.length - 1].classList.remove('letterPositionDifrent');
                arrayOfYellow[arrayOfYellow.length  - 1].classList.add('letterPositionBad');

                yellowLetters--;
            }
    }
}

createKeyboard();

});

