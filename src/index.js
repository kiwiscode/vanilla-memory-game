const cards = [
  { name: "aquaman", img: "aquaman.jpg" },
  { name: "batman", img: "batman.jpg" },
  { name: "captain america", img: "captain-america.jpg" },
  { name: "fantastic four", img: "fantastic-four.jpg" },
  { name: "flash", img: "flash.jpg" },
  { name: "green arrow", img: "green-arrow.jpg" },
  { name: "green lantern", img: "green-lantern.jpg" },
  { name: "ironman", img: "ironman.jpg" },
  { name: "spiderman", img: "spiderman.jpg" },
  { name: "superman", img: "superman.jpg" },
  { name: "the avengers", img: "the-avengers.jpg" },
  { name: "thor", img: "thor.jpg" },
  { name: "aquaman", img: "aquaman.jpg" },
  { name: "batman", img: "batman.jpg" },
  { name: "captain america", img: "captain-america.jpg" },
  { name: "fantastic four", img: "fantastic-four.jpg" },
  { name: "flash", img: "flash.jpg" },
  { name: "green arrow", img: "green-arrow.jpg" },
  { name: "green lantern", img: "green-lantern.jpg" },
  { name: "ironman", img: "ironman.jpg" },
  { name: "spiderman", img: "spiderman.jpg" },
  { name: "superman", img: "superman.jpg" },
  { name: "the avengers", img: "the-avengers.jpg" },
  { name: "thor", img: "thor.jpg" },
];

const memoryGame = new MemoryGame(cards);

// SOLUTION
// let pickedCards = memoryGame.pickedCards;

// window.addEventListener("load", (event) => {
//   NOTE: event.preventDefault();
//   // memoryGame.shuffleCards(cards);
//   let html = "";
//   memoryGame.cards.forEach((pic) => {
//     html += `
//       <div class="card" data-card-name="${pic.name}">
//         <div class="back" name="${pic.img}"></div>
//         <div class="front" style="background: url(img/${pic.img}) no-repeat"></div>
//       </div>
//     `;
//   });
//   // Add all the divs to the HTML
//   document.querySelector("#memory-board").innerHTML = html;

//   // Bind the click event of each element to a function
//   document.querySelectorAll(".card").forEach((card) => {
//     card.addEventListener("click", () => {
//       // TODO: write some code here
//       // add turned class after click
//       card.classList.add("turned");
//       pickedCards.push(card);
//       let pairsClicked = document.getElementById("pairs-clicked");
//       pairsClicked.innerHTML++;
//       if (pickedCards.length === 2) {
//         const dataNameFirst = pickedCards[0].getAttribute("data-card-name");
//         const dataNameSecond = pickedCards[1].getAttribute("data-card-name");
//         if (memoryGame.checkIfPair(dataNameFirst, dataNameSecond)) {
//           memoryGame.checkIfPair(dataNameFirst, dataNameSecond);
//           pickedCards = [];
//           let pairsGuessed = document.getElementById("pairs-guessed");
//           pairsGuessed.innerHTML++;
//           console.log(
//             "CHECKING THE GUESSED CORRECT => ",
//             typeof pairsGuessed.innerHTML
//           );
//           if (+pairsGuessed.innerHTML === 2) {
//             console.log("YOU FINISH THE GAME BRO ! ");
//             const header = document.getElementById("header");
//             header.style.color = "#26a7de";
//             header.innerHTML = "YOU WON";
//           }
//         } else {
//           setTimeout(() => {
//             if (pickedCards[0].classList.contains("turned")) {
//               pickedCards[0].classList.remove("turned");
//             }
//             if (pickedCards[1].classList.contains("turned")) {
//               pickedCards[1].classList.remove("turned");
//             }
//             pickedCards = [];
//           }, 1200);
//         }
//       }
//     });
//   });
// });
// SOLUTION

function toggle(element, classes) {
  classes.forEach((className) => element.classList.toggle(className));
}

window.addEventListener("load", (event) => {
  let html = "";
  memoryGame.cards.forEach((pic) => {
    html += `
      <div class="card" data-card-name="${pic.name}">
        <div class="back" name="${pic.img}"></div>
        <div class="front" style="background: url(img/${pic.img}) no-repeat"></div>
      </div>
    `;
  });

  // Add all the divs to the HTML
  document.querySelector("#memory-board").innerHTML = html;

  function toggle(element, classes) {
    classes.forEach((className) => element.classList.toggle(className));
  }

  // Bind the click event of each element to a function
  document.querySelectorAll(".card").forEach((card) => {
    card.addEventListener("click", () => {
      // TODO: write some code here
      const clicked = document.getElementById("pairs_clicked");
      const guessed = document.getElementById("pairs_guessed");

      console.log("Card clicked: ", card);
      toggle(card.children[0], ["back", "front"]);
      toggle(card.children[1], ["back", "front"]);

      let pairsClicked = document.getElementById("pairs-clicked");
      pairsClicked.innerHTML++;

      memoryGame.pickedCards.push(card);
      // console.log(memoryGame.pickedCards);
      if (memoryGame.pickedCards.length === 2) {
        const firstInPair = memoryGame.pickedCards[0];
        const secondInPair = memoryGame.pickedCards[1];
        const cardName1 = firstInPair.getAttribute("data-card-name");
        const cardName2 = secondInPair.getAttribute("data-card-name");
        // console.log(cardName1, cardName2);

        if (memoryGame.checkIfPair(cardName1, cardName2)) {
          firstInPair.children[1].classList.add("blocked");
          secondInPair.children[1].classList.add("blocked");
          memoryGame.pickedCards = [];

          let pairsGuessed = document.getElementById("pairs-guessed");
          pairsGuessed.innerHTML++;

          if (memoryGame.checkIfFinished()) {
            document.querySelector("#memory-board").innerHTML = "";
            let h1 = document.createElement("h1");
            h1.style.color = "pink";
            h1.innerHTML = "YOU WON!!!";
            document.querySelector("#memory-board").appendChild(h1);
          }
        } else {
          setTimeout(() => {
            toggle(firstInPair.children[0], ["back", "front"]);
            toggle(firstInPair.children[1], ["back", "front"]);
            toggle(secondInPair.children[0], ["back", "front"]);
            toggle(secondInPair.children[1], ["back", "front"]);
          }, 1000);
          memoryGame.pickedCards = [];
        }
        clicked.innerHTML = memoryGame.pairsClicked;
        guessed.innerHTML = memoryGame.pairsGuessed;
      }
    });
  });
});
