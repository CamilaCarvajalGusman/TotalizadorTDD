class TennisScorer {
  constructor() {
    this.player1Points = 0;
    this.player2Points = 0;
  }
  showScore() {
    const scoreNames = ["Love", "15", "30", "40"];

    if (this.player1Points >= 3 && this.player2Points >= 3) {
      if (this.player1Points === this.player2Points) {
        return "Deuce";
      } else if (this.player1Points === this.player2Points + 1) {
        return "Advantage Player 1";
      } else if (this.player2Points === this.player1Points + 1) {
        return "Advantage Player 2";
      } else if (this.player1Points >= this.player2Points + 2) {
        return "Game for Player 1";
      } else if (this.player2Points >= this.player1Points + 2) {
        return "Game for Player 2";
      }
    }

    if (this.player1Points >= 4) return "Game for Player 1";
    if (this.player2Points >= 4) return "Game for Player 2";
    console.log(`${this.player1Points} - ${this.player2Points}`);
    return `${scoreNames[this.player1Points]} - ${scoreNames[this.player2Points]}`;
  }
  player1Scores() {
    this.player1Points++;
  }
  player2Scores() {
    this.player2Points++;
  }
}
export default TennisScorer;
