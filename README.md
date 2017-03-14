bogus angular apps to be used as mocks/fixtures for other projects

`/dist` contains folders based on the version of angular, and there will be a bundle for each application stored in `/src`. 

In order to add another app, you have to add the project to `/src`, add the webpack entry point in `/webpack/base.js` and then add an html file in `/www`.

todo: 

- I think webpack 2 has an html provide plugin so we could get rid of the `/www` folder entirely
- Can't get provide plugin to work right, dynamic require is workaround