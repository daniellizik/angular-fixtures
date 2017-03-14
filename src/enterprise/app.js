require(`angular/${process.env.ANGULAR_VERSION}.js`)

import header from './header'
import input from './input'
import store from './store'
import table from './table'

const dependencies = [
  'app.header',
  'app.input',
  'app.store',
  'app.table'
]

angular
  .module('app', dependencies)
  .component('root', {
    template: `
      <div>
        <g-root g-dir></g-root>
        <app-header></app-header>
        <app-input></app-input>
        <app-table></app-table>
      </div>
    ` 
  })