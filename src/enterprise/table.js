require(`angular/${process.env.ANGULAR_VERSION}.js`)

export default angular
  .module('app.table', [])
  .component('appTable', {
    controllerAs: 'vm',
    controller: function() {
      this.rows = ['dog', 'cat', 'fish', 'horse', 'dragon']
      this.activeRow = 0
      this.click = (i) => this.activeRow = i
    },
    template: `
      <table>
        <tbody>
          <tr 
            ng-style="{color: $index === vm.activeRow ? 'blue' : 'black'}"
            ng-click="vm.click($index)"
            style="cursor:pointer"
            ng-repeat="row in vm.rows">
            <td>
              {{$index}}
            </td>
            <td>{{row}}</td>
          </tr>
        </tbody>
      </table>
    `
  })