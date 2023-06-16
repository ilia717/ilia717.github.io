console.log('file loaded')
const MinimumTime = 500;
const MaximumTime= 1250;

let PlayerPoints = 0;

const PlayerPointsElement = document.querySelector(".player-points");

const AllTiles = document.querySelectorAll(".tile");

GetRandomNumber(1,50);

function GetRandomNumber(min,max){
    let random= Math.random();
    console.log(random);
    console.log (min);
    console.log(max);
    console.log(Math.floor(random));
    console.log(max-min+1);
    console.log(Math.floor(random * max - min + 1));
    return Math.floor(Math.random() * (max - min + 1) + min );
}

AllTiles.forEach(function(tile){
    console.log(tile)
    tile.addEventListener('click',function(){
        tileclicked(tile);
    });
});

function tileclicked(tile){
console.log(tile);
if(tile.classList.contains('active')){
    PlayerPoints = PlayerPoints + 1;
}
else {
    PlayerPoints = PlayerPoints -2;
}
console.log(PlayerPoints);
tile.classList.remove('active');
PlayerPointsElement.textContent = PlayerPoints;
}

function ActivateRandomTile(){
    const CurrentActiveTile = document.querySelector('.tile.active');
    if (CurrentActiveTile){
        CurrentActiveTile.classList.remove('active');
    }
    let RandomTileNumber = GetRandomNumber(0,AllTiles.length - 1);
    const SelectedTile = AllTiles[RandomTileNumber];
    SelectedTile.classList.add('active');
     StartGame();
}

function StartGame(){
    const RandomTime = GetRandomNumber(MinimumTime,MaximumTime);

    setTimeout(ActivateRandomTile,RandomTime);
}

StartGame();
