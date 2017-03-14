require(`angular/${process.env.ANGULAR_VERSION}.js`)
require(`ui-router/${process.env.UI_ROUTER_VERSION}`)

export default angular
  .module('app.routes', ['ui.router'])
  .config(['$stateProvider', '$urlRouterProvider', config])

function config($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('home', {
      url: '/',
      template: `<root></root>`
    })
    .state('dashboard', {
      url: '/dashboard',
      template: `<dashboard></dashboard>`
    })
}