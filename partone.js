const body = document.querySelector("body");
const button = document.querySelector("button");
let deckId;
axios
  .get("https://deckofcardsapi.com/api/deck/new/")
  .then((res) => (deckId = res.data.deck_id));

function drawCard() {
  axios
    .get(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
    .then((res) => {
      res.data.cards[0];
      const img = document.createElement("img");
      img.src = res.data.cards[0].image;
      body.appendChild(img);
    })
    .catch(() => body.removeEventListener("click", drawCard));
}

body.addEventListener("click", drawCard);
// axios
//   .get("https://deckofcardsapi.com/api/deck/new/draw/?count=1")
//   .then((res) => {
//     deckId = res.data.deck_id;
//     console.log(res.data);

//     console.log(res.data.cards[0].code);
//     const img = document.createElement("img");
//     img.src = res.data.cards[0].image;

//     body.appendChild(img);
//   })
//   .then(() => {
//     axios
//       .get(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
//       .then((res) => {
//         console.log(res.data);
//         console.log(res.data.cards[0].code);
//         const img = document.createElement("img");
//         img.src = res.data.cards[0].image;

//         body.appendChild(img);
//       });
//   });
