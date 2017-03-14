require(`angular/${process.env.ANGULAR_VERSION}.js`)

export default angular
  .module('app.store', [])
  .factory('appStore', function() {
    return {
      cat: 'daggle cat'
    }
  })