const ctx3 = document.querySelector('.my-chart3')
const ctx2 = document.querySelector('.my-chart2');
const ctx1 = document.querySelector('.my-chart1');
fetch('https://api.coincap.io/v2/assets')
  .then(myData => myData.json())
  .then(textData => showInConsole(textData));

function showInConsole(json) {
  let labelData = [];
  let graphData = [];
  console.log(json.data);
  for (let i = 0; i < 6; i++) {
    labelData.push(json.data[i].name);
    graphData.push(json.data[i].priceUsd);
  }

  console.log(graphData)
  console.log(labelData);
  createChart(ctx1, 'pie', labelData, graphData)
  createChart(ctx2, 'bar', labelData, graphData)
}

function createChart(canvas, type, labels, data) {
  new Chart(canvas, {
    type: type,
    data: {
      labels: labels,
      datasets: [{
        label: 'Crypto Worth',
        data: data,
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }

  });

}

function getBiggestNumber(numbersArray) {

  let biggestNumber = 0;
  for (let i = 0; i < numbersArray.length; i++) {
    const currentNumber = numbersArray[i];
    if (currentNumber > biggestNumber) {
      biggestNumber = currentNumber;
    }
  }
 return biggestNumber;

}

function ShowBiggestnumber() {
getBiggestNumber(ctx3)


}


const numberArray = [1, 2, 77, 3, 92];
console.log(getBiggestNumber(numberArray));