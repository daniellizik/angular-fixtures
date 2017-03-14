require(`angular/${process.env.ANGULAR_VERSION}.js`)

export default angular
  .module('app.input', [])
  .component('appInput', {
    template: `
      <div>
        <h2>a component root, {{vm.cat}}</h2>
        <input ng-change="vm.change()" ng-model="vm.model"/>
      </div>
    `,
    controllerAs: 'vm',
    controller: ['appStore', function(store) {
      this.cat = store.cat
      this.model = ''
      this.change = () => {
        store.cat = this.model
        this.cat = store.cat
      }
    }]
  })