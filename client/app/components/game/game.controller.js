class GameController {
  constructor(gameService) {
    "ngInject";
    this.name = 'game';
    this.gameService = gameService;
  }

  // Called by restart button
  onRestart() {
    this.gameService.doSomething();
  }
}

export default GameController;
