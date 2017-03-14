require(`angular/${process.env.ANGULAR_VERSION}.js`)

export default angular
  .module('app.header', [])
  .component('appHeader', {
    template: `
      <div>
        <div><h3>dklj</h3></div>
      </div>
    `
  })
