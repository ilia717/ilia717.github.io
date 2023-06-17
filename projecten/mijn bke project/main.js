
// knop om site te reloaden
document.querySelector(".reload-button").addEventListener("click", function() {
    location.reload();
});


// Hier wordt een selectie gemaakt van alle elementen met de CSS-klasse 'cube'
let cube = document.querySelectorAll('.cube')
// Hier wordt de selectie van elementen omgezet in een array
cube = Array.from(cube)
// Hier wordt de huidige speler vastgelegd als X
let currentPlayer = "X"
// Hier wordt een array gedefinieerd met acht arrays die elk een combinatie bevatten van winnende mogelijkheden
let winningCombinations = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]
// Deze functie herhaalt elke mogelijke combinatie
function checkForWinner(){
// controleert of de inhoud van elke cubus in de combinatie gelijk is aan de huidige speler
// Als dat zo is roept het de functie highlightCells aan met de combinatie als parameter
    winningCombinations.forEach(function(combination){
        let check = combination.every(idx => cube[idx].innerText.trim() == currentPlayer)
        if(check){
            highlightcube(combination)
        }
    })
}
// Deze functie itereert over elke index in de meegegeven combinatie en voegt de CSS-klasse 'highlight' toe aan de bijbehorende cel
function highlightcube(combination){
    combination.forEach(function(idx){
        cube[idx].classList.add("highlight")
    })
}
// Hier wordt een eventlistener toegevoegd aan elke cube in de array zodat wanneer een cube wordt geklikt
// de inhoud van de cube wordt gezet naar de huidige speler en de functie checkForWinner wordt aangeroepen 
// De huidige speler wordt vervolgens gewisseld tussen X en O
cube.forEach(function(cube){
    cube.addEventListener('click', function(){
        if(cube.innerText.trim() != "") return
        cube.innerText = currentPlayer
        checkForWinner()
        currentPlayer = currentPlayer == "X" ? "O" : "X"
    })
})