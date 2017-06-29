import angular from 'angular';
import Header from './header/header';
import Button from './button/button';

let commonModule = angular.module('app.common', [
  Header,
  Button
])
.name;

export default commonModule;
