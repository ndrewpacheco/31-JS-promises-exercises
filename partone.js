const body = document.querySelector("body");
let favNumber = 12;
body.innerText = `Your fav number is: ${favNumber}\n`;

function getNumberData(url) {
  axios.get(url).then((res) => {
    body.innerText += res.data.text + "\n";
  });
}

getNumberData(`http://numbersapi.com/${favNumber}?json`);
getNumberData(`http://numbersapi.com/${favNumber}?json`);
getNumberData(`http://numbersapi.com/${favNumber}?json`);
getNumberData(`http://numbersapi.com/${favNumber}?json`);

// axios.get("http://numbersapi.com/1..3,10").then((res) => {
//   for (let num in res.data) {
//     body.innerHTML += "<div>" + res.data[num] + "<div>";
//   }
// });
