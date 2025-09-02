import TennisScorer from "./tennisScorer";

const score01 =document.querySelector("#jugador1");
const score02 =document.querySelector("#jugador2");
const form = document.querySelector("#sumar-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const scorer = new TennisScorer();
  const scorePlayer01 =   Number.parseInt(score01.value);
  const scorePlayer02 =   Number.parseInt(score02.value);
  for (let i=1;i<scorePlayer01;i++){
    scorer.player1Points++;
  }
  for (let i=1;i<scorePlayer02;i++){
    scorer.player2Points++;
  }
  div.innerHTML = "<p>" + scorer.showScore() + "</p>";
});