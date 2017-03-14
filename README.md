bogus angular apps to be used as mocks/fixtures for other projects

`/build` contains folders based on the version of angular, and there will be a bundle for each application stored in `/src`. 

In order to add another app, you have to add the project to `/src`, add the webpack entry point in `/webpack/base.js` and then add an html file in `/build`.

todo: 

- Can't get provide plugin to work right, dynamic require is workaround