let credits = 100;
let bankDob1, bankDob2, playerDob1, playerDob2;
let totaal2, totaal1;
let playCredits
let dice, dice2, dice3, dice4   
let hasClicked = false;

function runGame() {
    alert ('Welkom bij Hoger Lager spel!')
    alert ("Je begint met 100 credits waarbij je jouw inzet van je credits zelf bepaalt!")
    alert ("Je speelt tegen de computer of je hoger of lager scoort dan de computer.")
    alert ("als je het goed hebt win je het dubbele van je ingezette credits terug.")
    alert ('Anders verlies je jouw ingezette credits.')
    let adult = confirm ('Ben je 18+?')
    if (adult != true) {
        window.close()
    alert ('Sorry jij bent te jong!')
    }
}

setTimeout(() => {runGame()}, 1000);

function startGame1() { 
    hasClicked = true; 

    function getDiceNumber() {
        getDiceNumber(1,6);
    }
    
    function getDiceNumber(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

bankDob1 = getDiceNumber(1,6);    
bankDob2 = getDiceNumber(1,6);
playerDob1 = getDiceNumber(1,6);
playerDob2 = getDiceNumber(1,6);

totaal2= playerDob1+ playerDob2;
totaal1 = bankDob1 + bankDob2;
console.log (totaal1);
console.log (totaal2);

getElementById();
getElementById2();
getElementById5();
}


function Hoger() {
    if (hasClicked == true){
        if (totaal2 > totaal1) {
            credits = credits + getInputCreditValue()
            getElementById3();
            getElementById4();
            getElementById5();
            alert ('Gefeliciteerd! U heeft gewonnen!')
        }
        else {
            credits = credits - getInputCreditValue()
            getElementById3();
            getElementById4();
            getElementById5();
            alert ('Helaas! U heeft verloren!')
        }
        hasClicked = false;
    }
    else{
        alert("Klik op Begin en zit Credits eerst!");
    }
    
}

function Lager() {
    if (hasClicked == true) {
        playCredits = getInputCreditValue();
        if (totaal1 > totaal2) {
            credits = credits + getInputCreditValue()
        getElementById3();
        getElementById4();
        getElementById5();
            alert ('Gefeliciteerd! U heeft gewonnen!')
        }
        else { 
        credits = credits - getInputCreditValue()
        getElementById3();
        getElementById4();
        getElementById5();
        alert ('Helaas! U heeft verloren!')
        }
        hasClicked = false
    }
    else {
        alert("Klik op Begin en zet Credits eerst!");
    }
}


function getInputCreditValue(){
    const element = document.querySelector('.input-credit');
    const value = element.value;
    return Number(value);
}

function getElementById () {
    let dice = document.getElementById('bankDob1');
    console.log(dice);
    dice.textContent = bankDob1;
}
function getElementById2 () {
    let dice2 = document.getElementById ('bankDob2');
    console.log(dice2);
    dice2.textContent = bankDob2;
}

function getElementById3 () {
    let dice3 = document.getElementById ('playerDob1');
    console.log(dice3);
    dice3.textContent = playerDob1;
}
function getElementById4 () {
    let dice4 = document.getElementById ('playerDob2');
    console.log(dice4);
    dice4.textContent = playerDob2;
}

function getElementById5 () {
    let creditsShow = document.getElementById ('credits');
    console.log(creditsShow);
    console.log(credits);
    creditsShow.textContent = credits;
}