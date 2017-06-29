import angular from 'angular';
import uiRouter from 'angular-ui-router';
import gameComponent from './game.component';
import GameService from '../../services/game/game.service';

let gameModule = angular.module('game', [
  uiRouter
])

.config(($stateProvider, $urlRouterProvider) => {
  "ngInject";

  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('game', {
      url: '/',
      component: 'game'
    });
})

// component
.component('game', gameComponent)

// Services
.service('gameService', GameService)

.name;

export default gameModule;


