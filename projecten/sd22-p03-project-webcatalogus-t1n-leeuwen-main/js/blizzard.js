console.log("pc games");

// row element ophalen
const pcDataElement = document.querySelector(".pc-data");

// Haalt data op van server
function fetchData(url) {
  fetch(url)
    .then((myData) => myData.json())
    .then((myJsonData) => showData(myJsonData));
}

// Maak card html code
function createCard(element) {
  const card = `
        <div class="card col-md-3 col-sm-12 m-1 p-0 ">
            <img class="card-img-top" src="${element.img}" alt="Title">
            <div class="card-body">
                <h4 class="card-title">${element.title}</h4>
                <p class="card-text">${element.description}</p>
            </div>
        </div> 
    `;
  return card;
}

// Toont data in row
function showData(myJsonData) {
  console.log(myJsonData);

  for (let i = 0; i < myJsonData.length; i++) {
    const element = myJsonData[i];
    const card = createCard(element);
    pcDataElement.innerHTML += card;
  }
}

// data ophalen van PC Blizzard
fetchData("https://mbo-sd.nl/period3-fetch/games-pc-blizzard-entertainment");
