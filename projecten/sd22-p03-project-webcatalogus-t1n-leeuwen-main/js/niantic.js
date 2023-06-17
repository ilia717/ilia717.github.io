console.log("pc games");
const pcDataElement = document.querySelector(".mobile-data")
function fetchDataPc(url) {
    fetch(url)
    .then(myData => myData.json())
    .then(myJsonData => showData(myJsonData));
}

function fetchDataBlizzard(url) {
    fetch(url)
    .then(myData => myData.json())
    .then(myJsonData => showData(myJsonData));
}

fetchDataPc("https://mbo-sd.nl/period3-fetch/games-mobile-niantic");


function showData(myJsonData) {
    console.log(myJsonData);
    
    for (let i = 0; i < myJsonData.length; i++) {
        const element = myJsonData[i];
        const card = createCard(element);
        pcDataElement.innerHTML += card;

    }
}
function createCard(element) {
    const card = `
        <div class="card col-md-3 col-sm-12 m-1 p-0">
            <img class="card-img-top" src="${element.img}" alt="Title">
            <div class="card-body">
                <h4 class="card-title">${element.title}</h4>
                <p class="card-text">${element.description}</p>
            </div>
        </div>   
    
    
    `;
    return card;
}