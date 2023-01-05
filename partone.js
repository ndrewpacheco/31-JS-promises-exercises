const body = document.querySelector("body");
let deckId;

// part 1
counter = 0;
function appendCard(res) {
  let deckId = res.data.deck_id;

  const img = document.createElement("img");
  img.src = res.data.cards[0].image;
  body.appendChild(img);
}

// async function getTwoCards() {
//   let res = await axios.get(
//     "https://deckofcardsapi.com/api/deck/new/draw/?count=1"
//   );
//   appendCard(res);

//   res = await axios.get(
//     `https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`
//   );
//   appendCard(res);
// }

// getTwoCards();

// part 2

axios
  .get("https://deckofcardsapi.com/api/deck/new/shuffle")
  .then((res) => (deckId = res.data.deck_id));

async function drawCard() {
  try {
    let res = await axios.get(
      `https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`
    );
    appendCard(res);
    counter += 1;
    console.log("counter is: " + counter);
  } catch (e) {
    body.removeEventListener("click", drawCard);
  }

  // .then((res) => {
  //   res.data.cards[0];
  //   const img = document.createElement("img");
  //   img.src = res.data.cards[0].image;
  //   body.appendChild(img);
  // })

  // .catch(() => body.removeEventListener("click", drawCard));
}

body.addEventListener("click", drawCard);
