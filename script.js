const bord = document.getElementById("bord");
const bordData = new Array(9).fill(null);
const button = document.getElementById("button");
const _is_win = document.getElementById("_is_win");
// const o_is_win = document.getElementById("o_is_win");
const winData = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

let player = "X";

function findWinner(bData, wData) {
  // find function
  winData.forEach((elm) => {
    if (
      bData[elm[0]] == bData[elm[1]] &&
      bData[elm[1]] == bData[elm[2]] &&
      bData[elm[0]] !== null
    ) {
      // if (player === "X") { 
        _is_win.style.opacity = 1;
        _is_win.style.visibility = "visible";
      // } else {
      //   o_is_win.style.opacity = 1;
      //   o_is_win.style.visibility = "visible";
      // }
      button.style.opacity = 1;
      button.style.visibility = "visible";
      console.log(`player ${player} is win`);
      bord.removeEventListener("click", addToBord);
    } else if (
      bData[0] !== null &&
      bData[1] !== null &&
      bData[2] !== null &&
      bData[3] !== null &&
      bData[4] !== null &&
      bData[5] !== null &&
      bData[6] !== null &&
      bData[7] !== null &&
      bData[8] !== null
    ) {
      button.style.opacity = 1;
      button.style.visibility = "visible";
      console.log("draw");
    }
  });
}

function addToBord(e) {
  // bord.addEventListener("click", (e) => {
  // console.log(e.target.localName === 'p') // true or false

  if (e.target.localName === "p" && e.target.innerText === "") {
    e.target.innerText = player;

    e.target.classList.add(player === "X" ? "coral" : "darkcyan");

    bordData[e.target.dataset.index] = e.target.innerText;

    console.log(bordData);
    findWinner(bordData, winData);
    player = player === "X" ? "O" : "X";
  }
}

bord.addEventListener("click", addToBord);

button.addEventListener("click", () => {
  bord.addEventListener("click", addToBord);

  button.style.opacity = 0;
  button.style.visibility = "hidden";

  _is_win.style.opacity = 0;
  _is_win.style.visibility = "hidden";
  _is_win.textContent = `Player ${player.toLocaleUpperCase()} is Win`

  // o_is_win.style.opacity = 0;
  // o_is_win.style.visibility = "hidden";

  bordData.fill(null);
  player = "X";

  bord.querySelectorAll("p").forEach((elm) => {
    elm.innerText = "";
    elm.className = "";
    // elm.classList.remove("coral");
    // elm.classList.remove("darkcyan");
  });

  // bord.innerHTML = `
  // <p data-index="0"></p>
  // <p data-index="1"></p>
  // <p data-index="2"></p>
  // <p data-index="3"></p>
  // <p data-index="4"></p>
  // <p data-index="5"></p>
  // <p data-index="6"></p>
  // <p data-index="7"></p>
  // <p data-index="8"></p>
  // `;
  console.log(bordData);
});
