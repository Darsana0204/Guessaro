const words = [
"apple",
"banana",
"orange",
"mango",
"grapes",
"papaya",
"pineapple",
"guava",
"watermelon",
"peach",
"cherry",
"kiwi",
"pear",
"plum",
"apricot"
];
let word = words[Math.floor(Math.random()*words.length)];

let guessedLetters = [];
let attempts = 5;

function displayWord(){
    let display = "";

    for(let letter of word){
        if(guessedLetters.includes(letter)){
            display += letter + " ";
        } else {
            display += "_ ";
        }
    }

    document.getElementById("wordDisplay").innerText = display;
}

function guessLetter(){
    let input = document.getElementById("letterInput");
    let letter = input.value.toLowerCase();

    if(!letter) return;

    if(!word.includes(letter)){
        attempts--;
        document.getElementById("wrongGuesses").innerText += letter + " ";
    }

    guessedLetters.push(letter);

    document.getElementById("attempts").innerText = "Attempts left: " + attempts;

    displayWord();

    if(attempts === 0){
        alert("Game Over! Word was: " + word);
    }

    if(!document.getElementById("wordDisplay").innerText.includes("_")){
        alert("You Won!");
    }

    input.value="";
}

function resetGame(){
    word = words[Math.floor(Math.random()*words.length)];
    guessedLetters = [];
    attempts = 5;

    document.getElementById("wrongGuesses").innerText = "Wrong guesses: ";
    document.getElementById("attempts").innerText = "Attempts left: 5";

    displayWord();
}

displayWord();

function revealLetter(){
let hiddenLetters=[];
for(let letter of word){
if(!guessedLetters.includes(letter)){
hiddenLetters.push(letter);
}}
if(hiddenLetters.length===0){return;}
let randomLetter=hiddenLetters[Math.floor(Math.random()*hiddenLetters.length)];
guessedLetters.push(randomLetter);
displayWord();
attempts--;
document.getElementById("attempts").innerText="Attempts left: "+attempts;
}